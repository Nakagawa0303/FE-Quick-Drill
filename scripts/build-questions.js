import {readFile,writeFile,rename,unlink} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {sampleQuestions} from '../data/questions.js';
import {prepareQuestionBank,serializeQuestionBank} from '../js/question-bank.js';

// 不正なJSONでは出力を変更しない。正常時も一時ファイルから置き換える。
export async function buildQuestions({input=new URL('../data/additional-questions.json',import.meta.url),output=new URL('../data/additional-questions.js',import.meta.url),write=false}={}) {
  const raw=await readFile(input,'utf8');
  let payload;
  try {payload=JSON.parse(raw.replace(/^\uFEFF/,''));}catch {throw new Error('問題JSONの構文が不正です。');}
  const additions=prepareQuestionBank(sampleQuestions,payload);
  const generated=serializeQuestionBank(additions);
  if(write){
    // URL/pathの両方を扱い、出力と同じディレクトリに作成する。
    const tempPath=output instanceof URL?new URL(`${output.href}.tmp`):`${output}.tmp`;
    try {await writeFile(tempPath,generated,'utf8');await rename(tempPath,output);}
    finally {await unlink(tempPath).catch(error=>{if(error.code!=='ENOENT')throw error;});}
  }else{
    let current;try{current=await readFile(output,'utf8');}catch(error){if(error.code!=='ENOENT')throw error;}
    if(current?.replace(/\r\n/g,'\n')!==generated)throw new Error('生成済みデータがJSONと一致しません。npm run questions:build を実行してください。');
  }
  return {additional:additions.length,total:sampleQuestions.length+additions.length,verified:additions.filter(q=>q.verification.status==='verified').length};
}
if(typeof process!=='undefined'&&process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const args=process.argv.slice(2);
  if(args.length!==1||!['--check','--write'].includes(args[0])){console.error('Usage: node scripts/build-questions.js --check | --write');process.exitCode=1;}
  else try{const result=await buildQuestions({write:args[0]==='--write'});console.log(`問題検査OK: 全${result.total}問、追加${result.additional}問（検証済み${result.verified}問）`);}
  catch(error){console.error(error.message);process.exitCode=1;}
}
