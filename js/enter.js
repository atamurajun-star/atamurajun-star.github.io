/* =========================================
   JUN ATAMURA ENTER
========================================= */

const enterScreen = document.getElementById("enterScreen");
const enterButton = document.getElementById("enterButton");


/* =========================================
   AMBIENT AUDIO
========================================= */

const ambient = new Audio("music/ambient.mp3");

ambient.loop = true;

ambient.volume = 0.5;


/* =========================================
   ENTER
========================================= */

enterButton.addEventListener("click", () => {

  // Ambient music start
  ambient.play();

  // Fade out enter screen
  enterScreen.classList.add("hide");

});
