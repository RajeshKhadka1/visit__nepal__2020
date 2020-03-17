 function myfunction()
{

setTimeout(rajesh,2500);
function rajesh()
{
  

var first= document.querySelector(".first");
var sec= document.querySelector(".second");

first.style="margin-left:-50vw";
sec.style="margin-right:-50vw";
 


}
setTimeout(blur,2800);
 function blur(){
    var img1= document.querySelector(".raj");
   img1.classList.add("rajesh"); 
} 

//for view contactpage  

// var text=document.querySelector(".con");
// var nav=document.querySelector(".nav");

// var contact=document.querySelector(".contact");
// var box=document.querySelector(".box");

// var part2=document.querySelector(".part2");
// var part3=document.querySelector(".part3");
// var part4=document.querySelector(".part4");
//  var part5=document.querySelector(".part5");
//  var nav=document.querySelector(".nav");



// var excontent=document.querySelector(".excontent");
// var lifecontent=document.querySelector(".lifecontent");
// var explore=document.querySelector(".explore");
//  text.addEventListener("click",function(){
//    part2.style="display:none";
//     part5.style="display:none";      
//     style="opacity:0";
//    part3.style="display:none";
//    part4.style="display:none";
//    excontent.style="opcity:0";
//    lifecontent.style="opacity:0";
//    explore.style="opacity:0";
//    box.style="display:block";
//    nav.style="display:none";

//    contact.style="z-index:1";
//    contact.classList.add("addcontent");
// })

//  //close contact.

//  var con=document.querySelector(".close");
//  con.addEventListener("click",function(){
//    // var nav=document.querySelector(".nav").style="display:block";"opacity:1";

//    contact.style="position:absolute";
//    contact.style="top:-50px";


//    contact.style="z-index:0";
//    contact.style="opacity:0";

// //displaying hidden content and divs..
//    part2.style="display:block";
//    part3.style="display:block";
//    part4.style="display:block";
//    part5.style="display:block";      

//    excontent.style="opacity:1";
//    lifecontent.style="opacity:1";
//    explore.style="display:block";

//  })




 home.addEventListener("click",function(){


   animbox.style="position:absolute";
   animbox.style="left:0%";
    
   setTimeout(show,1000)
   function show(){
      var h2content= document.querySelector(".h2");
      h2content.style="opacity:1";

}
setTimeout(list1,2000);
function list1(){
   var l1= document.querySelector(".l1");
   l1.classList.add("l1add"); 
   console.log(l1);


}
 
    

 }) 

 
}  //for clse onlod

window.addEventListener("scroll",()=>{
   var windowh=window.pageYOffset;
   var windowa=document.body.scrollHeight;
   var viewport_height=window.innerHeight;
   console.log(windowh);
   percent=eval((windowh/(windowa-viewport_height))*100);
   document.querySelector(".line").style.width=percent+"%";
})



window.addEventListener("scroll", () =>{
 
 console.log(window.pageYOffset);
 console.log(document.querySelector(".visit").offsetTop);

 if(100 > window.pageYOffset){
   
   document.querySelector(".nav").style = "height:15%"


   
   


 

 
 
  }
if(document.querySelector(".visit").offsetTop   +100< window.pageYOffset){
  document.querySelector(".visit").style = " margin:0;opacity:1;"
  document.querySelector(".nav").style = "height:8%"
   //   document.querySelector(".line").style = "top:8%;z-index:100;"


  

  



  
    console.log(document.querySelector(".visit"));


 }

console.log(document.querySelector(".rightsideimage").offsetTop);
if(document.querySelector(".rightsideimage").offsetTop +100 < window.pageYOffset)
{
   document.querySelector(".rightsideimage").style = "transform:translatey(0px);opacity:1"
   for (var i  =1 ; i<7; i++){
      document.querySelectorAll(".class")[i].style = "animation-name :hello"

   }
    



}

console.log(document.querySelector(".rightsideimage").offsetTop);
if(document.querySelector(".rightsideimage").offsetTop +100 < window.pageYOffset)
{
   document.querySelector(".rightsideimage").style = "transform:translateX(0px);opacity:1"
    



}

 
console.log(document.querySelector(".im2").offsetTop);

if(1000 < window.pageYOffset)
{
   document.querySelector(".bgradient").style = "width:75% ;"   
   document.querySelector(".im2").style = "transform:translateX(0px) scale(1) rotate(360deg);opacity:1; "
    
   document.querySelector(".dancing").style = "transform:translatey(0px) scale(1) rotate(360deg);opacity:1; ";



}

//for  upeerside card 1...
console.log(document.querySelector(".suscontent1").offsetTop);

if(1960 < window.pageYOffset)
{

   document.querySelector(".suscontent1").style = "transform:translateX(0px) scale(1)  "
   document.querySelector(".suscontent2").style = "transform:translatey(0px) scale(1) "
   document.querySelector(".suscontent3").style = "transform:translateX(0px) scale(1)  "

}
//for downside card...
console.log(document.querySelector(".container").offsetTop);

if(2660 < window.pageYOffset)
{

   document.querySelector(".box1").style = "transform:translateX(0px) scale(1)     "
   document.querySelector(".box2").style = "transform:translatey(0px) scale(1)    "
   document.querySelector(".box3").style = "transform:translateX(0px) scale(1)     "

    



}


});

var com1=document.querySelector("#text1");
var com2=document.querySelector("#text1");

var combtn=document.querySelector("#comment");

var comment=document.querySelector(".comment");
var username=document.querySelector(".username");


comment.innerHTML = localStorage.getItem('comment');

username.innerHTML = localStorage.getItem("username");


combtn.addEventListener("click",function(){
   localStorage.setItem(username, com1.value);
   localStorage.setItem(comment, com2.value);


})


// // for contact page..
// $(document).ready(function(){
//    $('.start-btn').click(function(){
//      $('.modal-box').toggleClass("show-modal");
//      $('.start-btn').toggleClass("show-modal");
//    });
//    $('.fa-times').click(function(){
//      $('.modal-box').toggleClass("show-modal");
//      $('.start-btn').toggleClass("show-modal");
//    });
//  });