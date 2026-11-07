import {freshState,validateState} from './core.js';
const KEY='fe-quick-drill:v1';
export function load(bank) {
  try {const raw=localStorage.getItem(KEY);return {state:raw?validateState(JSON.parse(raw),bank):freshState(),error:null};}
  catch {return {state:freshState(),error:'保存データを読み込めませんでした。既存の保存内容は、次に保存するまで保持されます。JSONバックアップがある場合は復元してください。'};}
}
export function save(state) {localStorage.setItem(KEY,JSON.stringify(state));}
