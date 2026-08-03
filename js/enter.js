/* =========================================
   JUN ATAMURA ENTER
========================================= */
const enterScreen = document.getElementById("enterScreen");


// ENTER画面表示中はスクロール禁止
document.body.classList.add("enter-locked");


// =========================================
// AMBIENT AUDIO
// =========================================

const ambient = new Audio("music/ambient.mp3");

ambient.loop = true;
ambient.volume = 0.5;


// =========================================
// ENTER
// =========================================

enterScreen.addEventListener("click", () => {

  // Ambient music start
  ambient.play();

  // ENTER画面をフェードアウト
  enterScreen.classList.add("hide");

  // フェードアウト完了後にスクロール解除
  setTimeout(() => {
    document.body.classList.remove("enter-locked");
  }, 1500);

});
