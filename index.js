var cvs=document.getElementById('osnova');
var ctx=cvs.getContext('2d');
//подсказка
var container=document.getElementById('rgb');
//получение значений input
var R=document.getElementById('R');
var G=document.getElementById('G');
var B=document.getElementById('B');
var r=R.value;
var g=G.value;
var b=B.value;

//copy HEX 
function copy(){
	var copyHex = document.getElementById('copyHex');
	copyHex.select();
	copyHex.setSelectionRange(0, 99999)
	document.execCommand("copy");
	
}

//rgb to Hex
function rgbToHex(r,g,b) 
{
	 var rgb = b| (g << 8) | (r << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

hex=rgbToHex(r,g,b)


//подсказка
html=`
HEX: <input type='text' id='copyHex' onclick='copy()'  value='${hex}'></input>
<span>R: ${r} G: ${g} B: ${b}</span>`;
container.innerHTML=html;
//Обновляем цвет фона
color =`rgb(${r}, ${g}, ${b})`;
cvs.style.background=color;

//сменяем цвет фона
function Change_Color(){

var r=R.value;
var g=G.value;
var b=B.value;
hex=rgbToHex(r,g,b)

html=`
HEX: <input type='text'  onclick='copy()'  id='copyHex' value='${hex}'></input>
<span>R: ${r} G: ${g} B: ${b}</span>`;
container.innerHTML=html;
color =`rgb(${r}, ${g}, ${b})`;
cvs.style.background=color;
}
