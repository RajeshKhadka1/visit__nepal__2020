window.addEventListener("load",function(){

    //taking the value of buttons..

    var a=document.querySelector("#btn1");
    var b=document.querySelector("#btn2");
    var c=document.querySelector("#btn3");
    var d=document.querySelector("#btn4");
    var e=document.querySelector("#btn5");
    var f=document.querySelector("#btn6");

    //content value..
var con1=document.querySelector("#id1");
var con2=document.querySelector("#id2");
var con3=document.querySelector("#id3");
var con4=document.querySelector("#id4");
var con5=document.querySelector("#id5");
var con6=document.querySelector("#id6");

 
 a.addEventListener("click",function(){
      con1.style.transform="translatex(0%)"
      con2.style.transform="translatex(140%)"
      con3.style.transform="translatex(140%)"
      con4.style.transform="translatex(140%)"
      con5.style.transform="translatex(140%)"
      con6.style.transform="translatex(140%)"
//changing color
      a.style="background-color:black"
      b.style="background-color:transparent"
      c.style="background-color:transparent"
      d.style="background-color:transparent"
      e.style="background-color:transparent"
      f.style="background-color:transparent"


con1.style.transitionDelay="0.3s"
con2.style.transitionDelay="0s"
con3.style.transitionDelay="0s"
con4.style.transitionDelay="0s"
con5.style.transitionDelay="0s"
con6.style.transitionDelay="0s"

     


 });




 b.addEventListener("click",function(){
    con1.style.transform="translatex(140%)"
    con2.style.transform="translatex(0%)"
    con3.style.transform="translatex(140%)"
    con4.style.transform="translatex(140%)"
     con5.style.transform="translatex(140%)"
     con6.style.transform="translatex(140%)"

     a.style="background-color:transparent"
     b.style="background-color:black"
     c.style="background-color:transparent"
     d.style="background-color:transparent"
     e.style="background-color:transparent"
     f.style="background-color:transparent"

     con1.style.transitionDelay="0s"
con2.style.transitionDelay="0.3s"
con3.style.transitionDelay="0s"
con4.style.transitionDelay="0s"
con5.style.transitionDelay="0s"
con6.style.transitionDelay="0s"


});




c.addEventListener("click",function(){
    con1.style.transform="translatex(1400%)"
    con2.style.transform="translatex(140%)"
    con3.style.transform="translatex(0%)"
    con4.style.transform="translatex(140%)"
      con5.style.transform="translatex(140%)"
      con6.style.transform="translatex(140%)"

      a.style="background-color:transparent"
      b.style="background-color:transparent"
      c.style="background-color:black"
      d.style="background-color:transparent"
      e.style="background-color:transparent"
      f.style="background-color:transparent"



      con1.style.transitionDelay="0s"
con2.style.transitionDelay="0s"
con3.style.transitionDelay="0.3s"
con4.style.transitionDelay="0s"
con5.style.transitionDelay="0s"
con6.style.transitionDelay="0s"

});




d.addEventListener("click",function(){
    con1.style.transform="translatex(1400%)"
    con2.style.transform="translatex(140%)"
    con3.style.transform="translatex(140%)"
    con4.style.transform="translatex(0%)"
      con5.style.transform="translatex(140%)"
      con6.style.transform="translatex(140%)"

      a.style="background-color:transparent"
      b.style="background-color:transparent"
      c.style="background-color:transparent"
      d.style="background-color:black"
      e.style="background-color:transparent"
      f.style="background-color:transparent"

      con1.style.transitionDelay="0s"
con2.style.transitionDelay="0s"
con3.style.transitionDelay="0s"
con4.style.transitionDelay="0.3s"
con5.style.transitionDelay="0s"
con6.style.transitionDelay="0s"


});




e.addEventListener("click",function(){
    con1.style.transform="translatex(1400%)"
    con2.style.transform="translatex(140%)"
    con3.style.transform="translatex(140%)"
    con4.style.transform="translatex(140%)"
      con5.style.transform="translatex(0%)"
      con6.style.transform="translatex(140%)"

      a.style="background-color:transparent"
      b.style="background-color:transparent"
      c.style="background-color:transparent"
      d.style="background-color:transparent"
      e.style="background-color:black"
      f.style="background-color:transparent"


      con1.style.transitionDelay="0s"
con2.style.transitionDelay="0s"
con3.style.transitionDelay="0s"
con4.style.transitionDelay="0s"
con5.style.transitionDelay="0.3s"
con6.style.transitionDelay="0s"


});


f.addEventListener("click",function(){
    con1.style.transform="translatex(140%)"
    con2.style.transform="translatex(140%)"
    con3.style.transform="translatex(140%)"
    con4.style.transform="translatex(140%)"
      con5.style.transform="translatex(140%)"
      con6.style.transform="translatex(0%)"


      a.style="background-color:transparent"
      b.style="background-color:transparent"
      c.style="background-color:transparent"
      d.style="background-color:transparent"
      e.style="background-color:transparent"
      f.style="background-color:black"



      con1.style.transitionDelay="0s"
con2.style.transitionDelay="0s"
con3.style.transitionDelay="0s"
con4.style.transitionDelay="0s"
con5.style.transitionDelay="0s"
con6.style.transitionDelay="0.3s"

});



var cross=document.querySelector(".cross");
 
cross.addEventListener("click",function(){
      var body=document.querySelector(".mainkomain");

      // body.style="opacity:0";
      body.style.transform = "scale(0.5)";
      setTimeout(scale,1);
      function scale()
      {
            body.stye.transform="scale(0.6)"
      }



})




 
})

 