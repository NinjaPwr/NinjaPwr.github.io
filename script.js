let coins = Number(localStorage.getItem("coins")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;
let xpMax = 100; // XP needed for next level

function earn() {
  coins += 0.05; // 5 cents per click
  xp += 10;      // gain 10 XP per click
  checkLevelUp();
  saveGame();
  updateUI();
}

function checkLevelUp() {
  if (xp >= xpMax) {
    xp -= xpMax;
    level++;
    xpMax = Math.floor(xpMax * 1.5); // XP requirement increases
    alert(`🎉 You reached Level ${level}!`);
  }
}

function saveGame() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
}

function updateUI() {
  document.getElementById("coins").textContent = coins.toFixed(2);
  document.getElementById("xp").textContent = xp;
  document.getElementById("xpMax").textContent = xpMax;
  document.getElementById("level").textContent = level;
  document.getElementById("xpFill").style.width = (xp / xpMax * 100) + "%";
}

updateUI();
