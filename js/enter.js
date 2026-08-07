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
   
// =========================================
// ユーザーの操作で音声再生を解禁
// =========================================

let isAudioPlaying = false;

// 再生を実行する共通関数
function startAudio() {
  if (isAudioPlaying) return;

  ambient.play()
    .then(() => {
      isAudioPlaying = true;
      console.log("Audio started!");
      
      // 再生が始まったら、もうこのイベントリスナーたちは不要なので削除する
      removeInteractionListeners();
    })
    .catch((err) => {
      console.log("Audio play blocked, waiting for interaction...");
    });
}

// 複数のイベントを定義する
const interactionEvents = ['click', 'keydown', 'wheel', 'touchstart', 'touchmove'];

function addInteractionListeners() {
  interactionEvents.forEach(event => {
    document.addEventListener(event, startAudio);
  });
}

function removeInteractionListeners() {
  interactionEvents.forEach(event => {
    document.removeEventListener(event, startAudio);
  });
}

// 初期化
addInteractionListeners();
