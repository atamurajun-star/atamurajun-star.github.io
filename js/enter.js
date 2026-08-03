/* =========================================
   JUN ATAMURA ENTER
========================================= */

const enterScreen = document.getElementById("enterScreen");
const enterButton = document.getElementById("enterButton");

// ENTER画面表示中はスクロール禁止
document.body.classList.add("enter-locked");
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

  ambient.play();

  enterScreen.classList.add("hide");

  setTimeout(() => {
    document.body.classList.remove("enter-locked");
  }, 1500);

});
