const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];

function draw() {
  const random = Math.floor(Math.random() * omikuji.length);
  result.textContent = omikuji[random];

  // ボタン切り替え
  btn.style.display = "none";
  reset.style.display = "inline-block";
}

function resetGame() {
  result.textContent = "もう一回引いてね";

  // ボタン切り替え
  btn.style.display = "inline-block";
  reset.style.display = "none";
}

// 初期状態
reset.style.display = "none";

// イベント
btn.addEventListener("click", draw);
reset.addEventListener("click", resetGame);