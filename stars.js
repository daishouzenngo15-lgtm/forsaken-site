const canvas=document.getElementById("starfield");
const ctx=canvas.getContext("2d");

let stars=[];
let w,h;

function resize(){
w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;
}
window.addEventListener("resize",resize);
resize();

for(let i=0;i<300;i++){
stars.push({
x:Math.random()*w,
y:Math.random()*h,
z:Math.random()*2
});
}

function animate(){
ctx.fillStyle="black";
ctx.fillRect(0,0,w,h);

ctx.fillStyle="white";
stars.forEach(star=>{
star.y+=star.z;
if(star.y>h){
star.y=0;
star.x=Math.random()*w;
}
ctx.fillRect(star.x,star.y,2,2);
});
requestAnimationFrame(animate);
}

animate();
