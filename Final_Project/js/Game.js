// 
//Mouseover Events
//

$(document).ready(function(){
    $("h1").mouseover(function(){
        $("h1").css("background-color", "yellow");
    });
    $("h1").mouseout(function(){
        $("h1").css("background-color", "lightgray");
    });
});

/* document.addEventListener("mouseover", function(){
    document.getElementById("gameone").style.background = "red";
});

document.addEventListener("mouseout", function(){
    document.getElementById("gameone").style.background = "white";
});

document.addEventListener("mouseover", function(){
    document.getElementById("gametwo").style.background = "red";
});

document.addEventListener("mouseout", function(){
    document.getElementById("gametwo").style.background = "white";
}); */