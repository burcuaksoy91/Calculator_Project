const nmr_1= document.getElementById("nmr_1");
const nmr_2= document.getElementById("nmr_2");
const nmr_3= document.getElementById("nmr_3");
const nmr_4= document.getElementById("nmr_4");
const nmr_5= document.getElementById("nmr_5");
const nmr_6= document.getElementById("nmr_6");
const nmr_7= document.getElementById("nmr_7");
const nmr_8= document.getElementById("nmr_8");
const nmr_9= document.getElementById("nmr_9");
const nmr_0= document.getElementById("nmr_0");
const ac_btn= document.getElementById("ac_btn");
const calc_text= document.getElementById("calc_text");
const yzde_btn= document.getElementById("yzde_btn");
const blm_btn= document.getElementById("blm_btn");
const silme_btn= document.getElementById("silme_btn");
const multi_btn= document.getElementById("multi_btn");
const pls_btn= document.getElementById("pls_btn");
const smg_nkta= document.getElementById("smg_nkta");
const esit_btn= document.getElementById("esit_btn");
const calc_text_pre= document.getElementById("calc_text_pre");

nmr_1.addEventListener("click",function() {
    calc_text.value += Number(1);
    calc_text_pre.innerText=calc_text.value;
})
nmr_2.addEventListener("click",function() {
    calc_text.value += Number(2);
})
nmr_3.addEventListener("click",function() {
    calc_text.value += Number(3);
})
nmr_4.addEventListener("click",function() {
    calc_text.value += Number(4);
})
nmr_5.addEventListener("click",function() {
    calc_text.value += Number(5);
})
nmr_6.addEventListener("click",function() {
    calc_text.value += Number(6);
})
nmr_7.addEventListener("click",function() {
    calc_text.value += Number(7);
})
nmr_8.addEventListener("click",function() {
    calc_text.value += Number(8);
})
nmr_9.addEventListener("click",function() {
    calc_text.value += Number(9);
})
nmr_0.addEventListener("click",function() {
    calc_text.value += Number(0);
})

ac_btn.addEventListener("click",function() {
    calc_text.value ="";
})

silme_btn.addEventListener("click",function(){
    calc_text
 
})
