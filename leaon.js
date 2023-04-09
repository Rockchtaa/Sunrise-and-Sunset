let stars1 = document.getElementById("stars1");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river");
let boat6 = document.getElementById("boat6");
let yassine = document.querySelector(".yassine");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountains.style.top = value * 2 + "px";
    mountain.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat6.style.top = value + "px";
    boat6.style.left = value * 3 + "px";
    yassine.style.fontSize = value + "px";
    if (scrollY >= 67){
        yassine.style.fontSize = 67 + "px";
        yassine.style.position = "fixed";

        if(scrollY >= 478){
            yassine.style.display = "none";
        }else{
            yassine.style.display = "block";
        }
        if(scrollY >= 127){
            document.querySelector(".main").style.background ="linear-gradient(#376281, #10001f)"
        }else{
            document.querySelector(".main").style.background ="linear-gradient(#200016, #10001f)"

        }
        
    }

}

