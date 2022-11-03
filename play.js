function play(){
    window.location="intro.html"
    background.loadImage("Title.jpeg")
}
/*function delayImg1(){
    var img2=document.getElementById("img2")
    img2.innerHTML="<img src='Q1.png'/>"
}
setTimeout("delayImg1()",1000)

function delayImg2(){
    var img3=document.getElementById("img3")
    img3.innerHTML="<img src='talk3.png'/>"
}
setTimeout("delayImg2()",2000)
*/
function Ans1(){
    document.getElementById("para1").innerHTML="Your Answer is Correct.Click On Start Game To Go On Next Stage"
    document.getElementById("button3").style.display="inline-block"
}
function Wrong1(){
    document.getElementById("para1").innerHTML="Your Answer is InCorrect"
}



