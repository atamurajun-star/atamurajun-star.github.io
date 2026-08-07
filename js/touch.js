const enterScreen = document.getElementById("enterScreen");

const ambient = new Audio("music/ambient.mp3");

ambient.loop = true;
ambient.volume = 0.5;

document.body.classList.add("enter-locked");

enterScreen.addEventListener("pointerdown", () => {

  ambient.play().catch(() => {});

  enterScreen.classList.add("hide");

  document.body.classList.remove("enter-locked");

}, { once: true });
