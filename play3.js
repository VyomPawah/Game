function nextpage(){
    window.location="page6.html"
}
function play(){
    window.location="page2.html"
    background.loadImage("Title.jpeg")
}
function delayImg1(){
    var img2=document.getElementById("img2")
    img2.innerHTML="<img src='Q5.png'/>"
}
setTimeout("delayImg2()",1000)
function delayImg1(){
    var img3=document.getElementById("img3")
    img3.innerHTML="<img src='Q6.png'/>"
}
setTimeout("delayImg2()",2000)






