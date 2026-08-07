/* =========================================
   SIMPLE TOUCH TO ENTER & AUDIO UNLOCK
   ========================================= */

const enterScreen = document.getElementById("enterScreen");

// 音声の準備
const ambient = new Audio("music/ambient.mp3");
ambient.loop = true;
ambient.volume = 0.5;

// 初期状態：スクロール禁止
document.body.classList.add("enter-locked");

// アクション状態フラグ
let hasStarted = false;

// 画面のどこかをタッチ / クリックした時の処理
function handleStart() {
  if (hasStarted) return;
  hasStarted = true;

  // 音声再生を開始（インタラクション直後なのでブラウザのブロックを回避可能）
  ambient.currentTime = 0;
  ambient.play().catch((err) => {
    console.log("Audio play blocked:", err);
  });

  // ENTER画面をフェードアウト
  enterScreen.classList.add("hide");

  // フェードアウトアニメーション完了後にスクロール制限を解除
  setTimeout(() => {
    document.body.classList.remove("enter-locked");
  }, 1000); // CSSのアニメーション時間に合わせて調整してください
}

// クリックおよびタッチイベントを登録
enterScreen.addEventListener("click", handleStart);
enterScreen.addEventListener("touchstart", handleStart, { passive: true });
