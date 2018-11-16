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

// 
//Click Events
//

function changeText(id) {
        id.innerHTML = "Coming Soon!";
    }