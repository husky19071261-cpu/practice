let x = 100;
let y = 100;
let vx = 0;
let vy = 0;

const speed = 3;
const box = document.getElementById("box");

// Track which keys are pressed
const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function animate() {
  // Horizontal movement
  if (keys["ArrowRight"]) vx = speed;
  else if (keys["ArrowLeft"]) vx = -speed;
  else vx = 0;

  // Vertical movement
  if (keys["ArrowDown"]) vy = speed;
  else if (keys["ArrowUp"]) vy = -speed;
  else vy = 0;

  x += vx;
  y += vy;

  box.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
