// Preserve the existing GitHub Pages docs/ contract; support any repository subpath.
import {cp,mkdir,readdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
await mkdir('docs',{recursive:true});await cp('dist','docs',{recursive:true});
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())await walk(f);else if(f.endsWith('.html')){let s=await readFile(f,'utf8');const relative=u=>{const [p,hash]=u.split('#');let target=p.replace(/^\//,'');if(!target||target.endsWith('/'))target+='index.html';return path.relative(path.dirname(f),path.join('docs',target)).split(path.sep).join('/')+(hash!==undefined?'#'+hash:'');};s=s.replace(/\b(href|src|data-src)="(\/(?!\/)[^"]*)"/g,(_,a,u)=>`${a}="${relative(u)}"`).replace(/url\((\/(?!\/)[^)]*)\)/g,(_,u)=>`url(${relative(u)})`);await writeFile(f,s);}}}await walk('docs');
