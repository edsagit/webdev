const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;

function drawBg() {
	ctx.fillStyle = '#252525';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y, radius, color) {
	ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

}

yOffset = 150;
speed = 1.2;
amplitude = 40;
wavelength = 60;

radGreen = 12;
radWhite = 2;

function draw() {
    drawBg();

    if (canvas.width > 800) {
        width = canvas.width;
        amplitude = 40;
        radGreen = 12;
        radWhite = 2;
    } else if (800> canvas.width > 600){
        width = (2*canvas.width)/5;
        amplitude = 30;
        radGreen = 10;
        radWhite = 1.5;
    } else {
        width = (3*canvas.width)/7;
        amplitude = 20;
        radGreen = 8;
        radWhite = 1.5;
    }
  // green path
  for( let i = -100; i < (canvas.height); i++) {
   	const y = i * speed + yOffset;
  	const x = width / 2 + Math.sin(i / wavelength) * amplitude;
    drawCircle(x, y, radGreen, 'rgba(120,183,115,1)');

  }

  // white path
  for( let i = 0; i < (window.scrollY); i++) {
    const y = i * speed + yOffset;
    const x = width / 2 + Math.sin(i / wavelength) * amplitude;
    drawCircle(x, y, radWhite, 'rgba(255,255,255,1)');
    }

  // calc values
  const y = window.scrollY * speed + yOffset;
  const x = width / 2 + Math.sin(window.scrollY / wavelength) * amplitude;

  // big circle
  drawCircle(x, y, 6, '#fff');
}
document.addEventListener('scroll', draw);


function initCanvas() {
	canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.scrollHeight;
  draw();
}
initCanvas();
window.addEventListener('resize', initCanvas);