function random() {
  return Math.random() * 100;
}

for (let i = 0; i < 10; i++) {
  const positionTop = random(100);

  const positionLeft = random(100);

  const star = document.createElement("div");

  star.style.top = positionTop.toString + "%";

  star.style.left = positionLeft.toString + "%";

  document.body.appendChild(star);
}
