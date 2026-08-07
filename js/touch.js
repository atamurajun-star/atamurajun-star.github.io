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
function handleStart(e) {
  if (hasStarted) return;
  hasStarted = true;

  // タッチ操作時のデフォルト動作や2重発火を防止
  if (e && e.type === "touchstart") {
    e.preventDefault();
  }

  // 1. まず先に play() を呼び出す（ブラウザに「ユーザー操作による再生」と認可させる）
  const playPromise = ambient.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Audio started successfully!");
      })
      .catch((err) => {
        console.log("Audio play failed:", err);
      });
  }

  // 2. ENTER画面をフェードアウト
  enterScreen.classList.add("hide");

  // 3. フェードアウト完了後にスクロール制限を解除
  setTimeout(() => {
    document.body.classList.remove("enter-locked");
  }, 1000);
}

// pointerdown (PC・スマホ双方の最速タッチ・クリック判定) を使用
enterScreen.addEventListener("pointerdown", handleStart);

// フォールバック（pointerdown非対応環境向け）
enterScreen.addEventListener("click", handleStart);
