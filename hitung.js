function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "Masukkan Angka 1";
    frm.a1.value = "Masukkan Angka 1";
    frm.hasil.value = "0";
}

function mul(){
    let frm=document.getElementById('formulir');
    let a1= parseFloat(frm.a1.value);
    let a2= parseFloat(frm.a2.value);
    frm.hasil.value=a1*a2;
    
}
function div(){
    let frm=document.getElementById('formulir');
    let a1= parseFloat(frm.a1.value);
    let a2= parseFloat(frm.a2.value);
    frm.hasil.value=a1/a2;
    
}
function add(){
    let frm=document.getElementById('formulir');
    let a1= parseFloat(frm.a1.value);
    let a2= parseFloat(frm.a2.value);
    frm.hasil.value=a1+a2;
}
function sub(){
    let frm=document.getElementById('formulir');
    let a1= parseFloat(frm.a1.value);
    let a2= parseFloat(frm.a2.value);
    frm.hasil.value=a1-a2;
    
}