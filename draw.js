var clear = document.getElementById("clear");
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var started = false;

ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "lightsteelblue";

var erase = function(){
    ctx.clearRect(0, 0, 500, 500);
    started = false;
    console.log("cleared");
}

var draw = function(e){
    var rect = c.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (started){
        ctx.lineTo(x, y);
    }
    else {
        ctx.beginPath();
        ctx.moveTo(x, y);
        started = true;
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

clear.addEventListener('click', erase);
canvas.addEventListener('click', draw);