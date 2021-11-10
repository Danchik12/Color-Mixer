var cvs=document.getElementById('osnova');
var ctx=cvs.getContext('2d');
var container=document.getElementById('rgb');
var R=document.getElementById('R');
var G=document.getElementById('G');
var B=document.getElementById('B');
var r=R.value;
var g=G.value;
var b=B.value;
html=`<span>R: ${r} G: ${g} B: ${b}</span>`;
container.innerHTML=html;
color =`rgb(${r}, ${g}, ${b})`;
cvs.style.background=color;


function Change_Color(){

var r=R.value;
var g=G.value;
var b=B.value;
html=`<span>R: ${r} G: ${g} B: ${b}</span>`;
container.innerHTML=html;
color =`rgb(${r}, ${g}, ${b})`;
cvs.style.background=color;
}
