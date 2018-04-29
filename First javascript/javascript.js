document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px", style.backgroundColor = "orange", style.opacity = "1";

});