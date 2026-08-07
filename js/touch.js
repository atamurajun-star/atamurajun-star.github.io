/* =========================================
   JUN ATAMURA touch audio
========================================= */

const enterScreen = document.getElementById("enterScreen");


// ENTER画面表示中はスクロール禁止
document.body.classList.add("enter-locked");


// =========================================
// AMBIENT AUDIO
// =========================================

const ambient = new Audio("music/ambient.mp3");

ambient.loop = true;
ambient.volume = 0.8;


// =========================================
// ENTER
// =========================================

let entered = false;

enterScreen.addEventListener("click", () => {

  // すでにENTER済みなら何もしない
  if (entered) return;

  entered = true;

  // Ambient music start
  ambient.play();

  // ENTER画面をフェードアウト
  enterScreen.classList.add("hide");

  // フェードアウト完了後にスクロール解除
  setTimeout(() => {
    document.body.classList.remove("enter-locked");
  }, 1500);

});

// =========================================
// BROWSER BACK / PAGESHOW
// =========================================

window.addEventListener("pageshow", () => {

  // ENTER画面を再表示
  enterScreen.classList.remove("hide");

  // スクロール禁止
  document.body.classList.add("enter-locked");

  // ENTER状態をリセット
  entered = false;

  // Ambientを停止して最初に戻す
  ambient.pause();
  ambient.currentTime = 0;

});
