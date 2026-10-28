const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync(require('path').join(__dirname,'../public/games/flush-rush/index.html'),'utf8');
const src=html.slice(html.indexOf('function drawPlayerSprite('),html.indexOf('\nfunction drawPlayer(){'));
const calls=[],img={refill:1};
const ctx=new Proxy({}, {get:(_,k)=>(...a)=>calls.push([k,...a])});
const env={WALK_ON:false,ctx,performance:{now:()=>1000},P:(x,y)=>[x,y],JAN:{h:78},JAN_IMG:{naturalWidth:160,naturalHeight:362},POSE:{refill:{img,ax:650/1451,ay:947/1084}},poseOk:k=>k==='refill',poseSize:()=>[129,96],reduceMotion:false,shadow:()=>{},clamp:(v,a,b)=>Math.min(b,Math.max(a,v)),rr:()=>{},C:{ink:'#000',orange:'#f80'},Math};
vm.createContext(env);vm.runInContext(src+';globalThis.draw=drawPlayerSprite;',env);
const p={x:100,y:200,fc:-1,moving:false,work:{type:'refill',kind:'stall',t:.4,total:.8}};
env.draw(p);assert(calls.some(c=>c[0]==='drawImage'&&c[1]===img));assert.deepEqual(calls.find(c=>c[0]==='translate'),['translate',100,200]);assert.deepEqual(calls.find(c=>c[0]==='scale'),['scale',1,1]);assert(calls.find(c=>c[0]==='transform')[3]<0);
env.reduceMotion=true;calls.length=0;env.draw(p);assert.equal(Math.abs(calls.find(c=>c[0]==='transform')[3]),0,'Reduced motion keeps a static refill pose');
env.reduceMotion=false;p.work.kind='sink';calls.length=0;env.draw(p);assert(!calls.some(c=>c[0]==='drawImage'&&c[1]===img),'Soap refill must not show paper');
const block=html.slice(html.indexOf('} else if(w.type==="refill"){')+2,html.indexOf('} else if(w.type==="pick"){'))+'}';
const g={tut:null},work={type:'refill',t:.79,total:.8,x:0,y:0},ref={paper:0,soap:0},player={carry:2,work};let feedback=0;
const job={w:work,t:{kind:'stall'},r:ref,pl:player,G:g,sfx:{pick:()=>{}},floatText:()=>feedback++,C:{ink:''}};vm.createContext(job);
vm.runInContext(block.replace(/^else /,''),job);assert.equal(ref.paper,0);assert.equal(player.carry,2);
work.t=.8;vm.runInContext(block.replace(/^else /,''),job);assert.equal(ref.paper,1);assert.equal(player.carry,1);assert.equal(player.work,null);assert.equal(feedback,1);
job.t.kind='sink';ref.soap=3;vm.runInContext(block.replace(/^else /,''),job);assert.equal(ref.soap,4);assert.equal(ref.paper,1);
const update=html.slice(html.indexOf('function updatePlayer('),html.indexOf('\nfunction update(dt)'));
const sim={...job,Math,keys:new Set(),G:{player:{x:30,y:300,walk:null,target:{kind:'stall',ref,fx:30,fy:300},carry:2,work:null},S:{speed:190},puddles:[],tut:null},clamp:env.clamp,dist:(a,b,c,d)=>Math.hypot(a-c,b-d),STALL_X0:170,STALL_W:124,STALL_GAP:6,ROOM:{w:900,h:560},CART:{x:420,y:440,w:84,h:44},jobFor:()=>({type:'refill',time:.8}),sfx:{pick:()=>{}},floatText:()=>{},exitStallFirst:()=>{}};
// Exercise real updatePlayer at normal and 2x simulation deltas, including the
// existing sendTo guard used by repeated Next taps.
const send=html.slice(html.indexOf('function sendTo('),html.indexOf('\nconst stallTarget'));
for(const delta of [1/60,2/60]){
 const s={...sim,G:{...sim.G,player:{...sim.G.player,target:{kind:'stall',ref:{paper:0},fx:30,fy:300}},puddles:[]},sfx:{pick:()=>{},click:()=>{}}};vm.createContext(s);vm.runInContext(update+';'+send+';globalThis.step=updatePlayer;globalThis.send=sendTo;',s);
 for(let i=0;i<Math.ceil(.8/delta)+1;i++){s.send(s.G.player.target);s.step(delta)}
 assert.equal(s.G.player.target.ref.paper,1);assert.equal(s.G.player.carry,1);
}
console.log('PASS: paper-only pose, fixed feet, reach, reduced motion, stock/soap accounting, 1x/2x repeated commands');


