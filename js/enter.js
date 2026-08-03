/* =========================================
   JUN ATAMURA ENTER
========================================= */

const enterScreen = document.getElementById("enterScreen");


// =========================================
// AMBIENT AUDIO
// =========================================

const ambient = new Audio("music/ambient.mp3");

ambient.loop = true;
ambient.volume = 0.5;


// =========================================
// ENTER済みか確認
// =========================================

const hasEntered =
  sessionStorage.getItem("junAtamuraEntered");


// =========================================
// すでにENTER済みの場合
// =========================================

if (hasEntered === "true") {

  // ENTER画面を表示しない
  enterScreen.classList.add("hide");

  // スクロール禁止解除
  document.body.classList.remove("enter-locked");

}


// =========================================
// 初回ENTER
// =========================================

else {

  // スクロール禁止
  document.body.classList.add("enter-locked");

}


// =========================================
// ENTER
// =========================================

let entered = false;

enterScreen.addEventListener("click", () => {

  if (entered) return;

  entered = true;

  // ENTER済みとして記録
  sessionStorage.setItem(
    "junAtamuraEntered",
    "true"
  );

  // Ambientを最初から再生
  ambient.currentTime = 0;
  ambient.play();

  // ENTER画面フェードアウト
  enterScreen.classList.add("hide");

  // フェードアウト完了後にスクロール解除
  setTimeout(() => {

    document.body.classList.remove(
      "enter-locked"
    );

  }, 1500);

});


// =========================================
// BACKで戻ってきたとき
// =========================================

window.addEventListener("pageshow", () => {

  // ENTER済みの場合
  if (
    sessionStorage.getItem("junAtamuraEntered")
    === "true"
  ) {

    // ENTER画面を表示しない
    enterScreen.classList.add("hide");

    // スクロール禁止解除
    document.body.classList.remove(
      "enter-locked"
    );

    // Ambientを最初から再生
    ambient.currentTime = 0;

    ambient.play().catch(() => {
      console.log("Ambient autoplay blocked.");
    });

  }

});
