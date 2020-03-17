
 window.addEventListener("load",function(){


var content1=document.querySelector("#content1");
var content2=document.querySelector("#content2");
var content3=document.querySelector("#content3");

//button    

var btn1=document.querySelector("#btn1")
var btn2=document.querySelector("#btn2");
var btn3=document.querySelector("#btn3");


//making function to open wildlife(contebt1)
 

 btn1.addEventListener("click",function(){
 
   
    content1.style.transform="translatex(0%)";
    content2.style.transform="translatex(100%)";
    content3.style.transform="translatex(100%)";
   btn1.style="color:orange" ;
   btn2.style="color:black" ;
   btn3.style="color:black" ;
    
   content1.style.transitionDelay="0.5s";
   content2.style.transitionDelay="0s";
   content3.style.transitionDelay="0s";


 })

//making function to open wildlife(contebt2)

btn2.addEventListener("click",function(){
 
   btn1.style="color:black" ;
   btn2.style="color:orange" ;
   btn3.style="color:black" ;

   content1.style.transitionDelay="0s";
   content2.style.transitionDelay="0.5s";
   content3.style.transitionDelay="0s";

    content1.style.transform="translatex(100%)";
    content2.style.transform="translatex(0%)";
    content3.style.transform="translatex(100%)";
 })

 
btn3.addEventListener("click",function(){
 
    btn1.style="color:black" ;
    btn2.style="color:black" ;
    btn3.style="color:orange" ;
 
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0.5s";

     content1.style.transform="translatex(100%)";
     content2.style.transform="translatex(100%)";
     content3.style.transform="translatex(0%)";
  })
  //disible drag img

   
 
  
})