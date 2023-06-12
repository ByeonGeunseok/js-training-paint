// Set the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 650;

ctx.rect(50, 50, 100, 200);
ctx.fillStyle = "purple";
ctx.fill();

ctx.rect(250, 250, 100, 100);
ctx.stroke();

ctx.beginPath();
ctx.rect(150, 250, 50, 50);
ctx.rect(200, 200, 50, 50);
ctx.fillStyle = "skyblue";
ctx.fill();

ctx.moveTo(400, 400);
ctx.lineTo(450, 350);
ctx.lineTo(550, 350);
ctx.lineTo(500, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 400);

ctx.moveTo(550, 350);
ctx.lineTo(550, 450);
ctx.lineTo(500, 500);

ctx.stroke();
