import { freshState, validateState } from './core.js';

const KEY = 'fe-quick-drill:v1';

export function load(bank) {
  let raw;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return {
      state: freshState(),
      error: 'ブラウザの保存領域にアクセスできません。保存を停止しています。ブラウザの設定を確認して再読み込みしてください。元データの書き出しも現在はできません。',
      raw: null
    };
  }
  if (raw === null)
    return { state: freshState(), error: null, raw: null };

  let value;
  try {
    value = JSON.parse(raw);
  } catch {
    return { state: freshState(), error: '保存データのJSONが壊れているか、空になっています。', raw };
  }
  try {
    return { state: validateState(value, bank), error: null, raw: null };
  } catch {
    const reason = value && typeof value === 'object' && value.version !== 1
      ? '保存データの形式が古いか、このアプリに対応していないバージョンです。'
      : '保存データの項目、問題ID、または解答・成績の整合性が現在の問題データと一致しません。';
    return { state: freshState(), error: reason, raw };
  }
}

export function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}
