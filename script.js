let x = 100;
let y = 100;
let vx = 2;
let vy = 1.5;

const box = document.getElementById("box");

function animate() {
  x += vx;
  y += vy;

  box.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
