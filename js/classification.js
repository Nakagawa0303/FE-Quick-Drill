// IPA FEシラバスVer.9.2の中分類相当を、アプリでは「小分野」と呼ぶ。
export const SUBFIELDS = Object.freeze(Object.fromEntries(Object.entries({
  'テクノロジ': ['基礎理論','アルゴリズムとプログラミング','コンピュータ構成要素','システム構成要素','ソフトウェア','ハードウェア','ユーザーインタフェース','情報メディア','データベース','ネットワーク','セキュリティ','システム開発技術','ソフトウェア開発管理技術'],
  'マネジメント': ['プロジェクトマネジメント','サービスマネジメント','システム監査'],
  'ストラテジ': ['システム戦略','システム企画','経営戦略マネジメント','技術戦略マネジメント','ビジネスインダストリ','企業活動','法務'],
}).map(([field, values])=>[field,Object.freeze(values)])));
export const FIELDS = Object.freeze({A:Object.freeze(Object.keys(SUBFIELDS)), B:Object.freeze(['アルゴリズム・プログラミング','情報セキュリティ'])});
export const UNCLASSIFIED = '未分類';
export const subfieldOf = q => q.subject==='A' ? (q.subfield ?? UNCLASSIFIED) : null;
export const subfieldOptions = (field='全分野') => [...(SUBFIELDS[field] ?? Object.values(SUBFIELDS).flat()),UNCLASSIFIED];
export const freshAnalysisFilter = () => ({subject:'すべて',field:'全分野',subfield:'全小分野'});
export function normalizeAnalysisFilter(value={}) {
  const subject=['A','B'].includes(value.subject)?value.subject:'すべて';
  const field=FIELDS[subject]?.includes(value.field)?value.field:'全分野';
  const subfield=subject==='A'&&subfieldOptions(field).includes(value.subfield)?value.subfield:'全小分野';
  return {subject,field,subfield};
}
export function changeAnalysisFilter(current,key,value) {
  if(key==='subject')return normalizeAnalysisFilter({subject:value});
  if(key==='field')return normalizeAnalysisFilter({...current,field:value,subfield:'全小分野'});
  return normalizeAnalysisFilter({...current,subfield:value});
}
export function matchesAnalysis(q,filter) {
  return filter.subject==='すべて'||(q.subject===filter.subject && (filter.field==='全分野'||q.field===filter.field) && (filter.subfield==='全小分野'||subfieldOf(q)===filter.subfield));
}
