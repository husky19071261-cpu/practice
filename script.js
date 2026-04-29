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

  requestAnimationFrame(animate);
}

animate();
