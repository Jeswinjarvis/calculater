var temp;
var eqc=0;
function buttonclick(val){

document.getElementById('screen').value+=val;

temp=0;
}

function clrscreen(){

document.getElementById('screen').value="";
eqc=0;

}
function equalclick(){
    if(document.getElementById('screen').value !=""){
    var text = document.getElementById('screen').value;
    var res = eval(text);
    document.getElementById('screen').value=res;
    eqc=1;
}
}
function opclick(val){

if(temp == 0 && document.getElementById('screen').value !=""){
    document.getElementById('screen').value+=val;
    temp = 1;
}

}
function back(){
    if(eqc==0)
    document.getElementById('screen').value = document.getElementById('screen').value.slice(0,-1)
}

