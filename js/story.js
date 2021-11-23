const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

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

function draw() {
  drawBg();
  


  // green path
  for( let i = -100; i < (canvas.height); i++) {
   	const y = i * speed + yOffset;
  	const x = canvas.width / 2 + Math.sin(i / wavelength) * amplitude; 
    drawCircle(x, y, 12, 'rgba(120,183,115,1)');
  	
  }
  
  // white path
  for( let i = 0; i < (window.scrollY); i++) {
    const y = i * speed + yOffset;
    const x = canvas.width / 2 + Math.sin(i / wavelength) * amplitude; 
    drawCircle(x, y, 2, 'rgba(255,255,255,1)');
    }
  
  // calc values
  const y = window.scrollY * speed + yOffset;
  const x = canvas.width / 2 + Math.sin(window.scrollY / wavelength) * amplitude;
  
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