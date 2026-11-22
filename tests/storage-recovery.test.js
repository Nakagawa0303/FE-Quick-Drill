import test from 'node:test';
import assert from 'node:assert/strict';
import { questions } from '../data/questions.js';
import { freshState, grade, validateState } from '../js/core.js';
import { load } from '../js/storage.js';

const KEY = 'fe-quick-drill:v1';
const incompatible = [
  ['不正JSON', '  {broken\n', /JSON/],
  ['空文字', '', /JSON/],
  ['未知ID', JSON.stringify({ ...freshState(), review: ['UNKNOWN'] }), /問題ID/],
  ['旧形式', JSON.stringify({ ...freshState(), version: 0 }), /バージョン/],
  ['不正な構造', 'null', /項目/],
];
let importNumber = 0;

// 実ブラウザの保存領域には触れず、イベントとダウンロード内容を検査する。
async function withApplication(raw, run, readFails = false) {
  const names = ['document', 'window', 'localStorage', 'setInterval', 'setTimeout', 'clearTimeout'];
  const originals = new Map(names.map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)]));
  const listeners = {}, documentListeners = {}, windowListeners = {};
  const memory = new Map(raw === null ? [] : [[KEY, raw]]);
  const notice = { textContent: '' };
  const root = {
    innerHTML: '',
    addEventListener: (type, callback) => listeners[type] = callback,
    querySelector: () => ({ focus() {}, click() {} }),
  };
  let tick, approved = true, writeFails = false, writes = 0;
  const downloads = [], confirmations = [];
  try {
    Object.assign(globalThis, {
      document: {
        hidden: false,
        querySelector: selector => selector === '#app' ? root : notice,
        addEventListener: (type, callback) => documentListeners[type] = callback,
        createElement: () => ({ click() { downloads.push({ href: this.href, name: this.download }); } }),
      },
      window: {
        confirm: message => { confirmations.push(message); return approved; },
        scrollTo() {},
        addEventListener: (type, callback) => windowListeners[type] = callback,
      },
      localStorage: {
        getItem: key => { if (readFails) throw new Error('blocked'); return memory.get(key) ?? null; },
        setItem: (key, value) => {
          if (writeFails) throw new Error('quota');
          writes++;
          memory.set(key, value);
        },
      },
      setInterval: callback => { tick = callback; return 0; },
      setTimeout: () => 0,
      clearTimeout() {},
    });
    await import(`../js/app.js?storage-recovery=${++importNumber}`);
    const click = (action, data = {}) => listeners.click({
      target: { closest: () => ({ disabled: false, dataset: { action, ...data }, setAttribute() {} }) },
    });
    const restore = text => listeners.change({
      target: { id: 'import-file', value: 'test.json', files: [{ size: text.length, text: async () => text }] },
    });
    await run({
      memory, root, notice, downloads, confirmations, click, restore,
      load: () => load(questions),
      writes: () => writes,
      tick: () => tick(),
      approve: value => approved = value,
      failWrites: value => writeFails = value,
      hide: () => { document.hidden = true; documentListeners.visibilitychange(); },
      show: () => { document.hidden = false; documentListeners.visibilitychange(); },
      leave: () => windowListeners.pagehide(),
    });
  } finally {
    for (const download of downloads) URL.revokeObjectURL(download.href);
    for (const [name, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  }
}

for (const [name, raw, reason] of incompatible) {
  test(`DATA-01 ${name}：通常操作・タイマー・離脱で原文を保持し退避できる`, async () => {
    await withApplication(raw, async app => {
      assert.equal(app.load().raw, raw);
      assert.match(app.root.innerHTML, reason);
      assert.match(app.root.innerHTML, /保存データを保護しています/);
      app.click('subject', { subject: 'B' });
      app.click('count', { count: '1' });
      app.click('start');
      app.click('answer', { answer: '0' });
      app.tick(); app.hide(); app.show(); app.leave();
      app.click('pause'); app.click('resume'); app.click('finish');
      app.click('mark', { id: questions[0].id });
      app.click('home'); app.click('tab', { tab: 'records' });
      app.click('export');
      assert.equal(app.memory.get(KEY), raw);
      assert.equal(app.writes(), 0);
      assert.match(app.root.innerHTML, /保存データを保護しています/);
      app.click('export-original');
      const backup = app.downloads.at(-1);
      assert.match(backup.name, /^fe-quick-drill-original-/);
      assert.equal(await (await fetch(backup.href)).text(), raw);

      for (const [, invalid] of incompatible) await app.restore(invalid);
      const replacement = freshState();
      replacement.review = [questions[0].id];
      replacement.history = [{
        id: 'restored', finishedAt: '2026-11-22T00:00:00Z', elapsedMs: 100,
        items: grade({ ids: [questions[0].id], answers: {} }, questions),
      }];
      const valid = JSON.stringify(replacement);
      app.approve(false); await app.restore(valid);
      app.approve(true); app.failWrites(true); await app.restore(valid);
      app.leave();
      assert.equal(app.memory.get(KEY), raw);
      assert.equal(app.writes(), 0);
      assert.match(app.root.innerHTML, /保存データを保護しています/);
      assert.match(app.confirmations.at(-1), /保護中の元データも置き換わります/);
      app.failWrites(false); await app.restore(valid);
      assert.deepEqual(JSON.parse(app.memory.get(KEY)), replacement);
      assert(!app.root.innerHTML.includes('保存データを保護しています'));
      app.click('count', { count: '10' }); app.leave();
      assert.equal(JSON.parse(app.memory.get(KEY)).settings.count, 10);
      validateState(JSON.parse(app.memory.get(KEY)), questions);
    });
  });
}

test('DATA-01 保存領域の読取失敗でも書込みを止め、退避不可を表示', async () => {
  await withApplication('unreadable original', async app => {
    assert.match(app.root.innerHTML, /保存領域にアクセスできません/);
    assert.match(app.root.innerHTML, /data-action="export-original" disabled/);
    app.click('subject', { subject: 'B' }); app.hide(); app.leave();
    assert.equal(app.writes(), 0);
    assert.equal(app.memory.get(KEY), 'unreadable original');
  }, true);
});

for (const raw of [null, JSON.stringify(freshState())]) {
  test(`DATA-01 ${raw === null ? '未保存' : '正常データ'}では従来どおり保存`, async () => {
    await withApplication(raw, async app => {
      assert.equal(app.load().error, null);
      assert(!app.root.innerHTML.includes('保存データを保護しています'));
      app.click('subject', { subject: 'B' }); app.leave();
      assert.equal(JSON.parse(app.memory.get(KEY)).settings.subject, 'B');
      assert(app.writes() > 0);
    });
  });
}
