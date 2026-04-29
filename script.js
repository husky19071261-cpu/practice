let rotX = 0;
let rotY = 0;

const cube = document.getElementById("cube");
const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function animate() {
  const speed = 2;

  if (keys["ArrowUp"]) rotX -= speed;
  if (keys["ArrowDown"]) rotX += speed;
  if (keys["ArrowLeft"]) rotY -= speed;
  if (keys["ArrowRight"]) rotY += speed;

  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  // Dynamic shading: darker when rotated away from light
  const lightIntensity = Math.max(0.3, Math.cos(rotY * Math.PI / 180));
  cube.style.filter = `drop-shadow(0px 10px 20px rgba(0,0,0,0.5)) brightness(${lightIntensity})`;

  requestAnimationFrame(animate);
}

animate();
