var temp;
function buttonclick(val){

document.getElementById('screen').value+=val;

temp=0;
}

function clrscreen(){

document.getElementById('screen').value="";

}
function equalclick(){
    if(document.getElementById('screen').value !=""){
    var text = document.getElementById('screen').value;
    var res = eval(text);
    document.getElementById('screen').value=res;
}
}
function opclick(val){

if(temp == 0 && document.getElementById('screen').value !=""){
    document.getElementById('screen').value+=val;
    temp = 1;
}

}
