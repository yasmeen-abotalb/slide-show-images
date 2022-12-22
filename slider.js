var n = document.getElementById("next");
var pr = document.getElementById("previous");
var s = document.getElementById("slide");
var st = document.getElementById("stop");
var p = document.getElementById("pic");

//function loop in images
function loop(){
    if(i<6){
        i++;
        console.log(i);
        p.src = i+".jpg";
       }
 }

//btn next
var i =1;
n.addEventListener('click',loop)

//btn previous
pr.addEventListener('click',function(){
    if(i>1){
     i--;
     console.log(i);
     p.src = i+".jpg";
    }
 })

 // slideshow btn
 var setVal;
s.addEventListener('click',function(){
    setVal = setInterval(loop,1500);
})

// btn stop 

st.addEventListener('click',function(){
    clearInterval(setVal);
})




