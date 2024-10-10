let balance = 5000; // Стартовий баланс
let farmingActive = false;
let farmingInterval;
let timer = 30; // Таймер на 30 секунд
let farmRate = 100; // Базова ставка фарму
let playerLevel = 1; // Рівень гравця
let boostCost = [500, 1000, 1500, 6000, 10000, 20000, 50000, 100000, 200000, 500000]; // Вартість бустів
let boostAmount = [100, 300, 1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000]; // Сума бусту

function startFarming() {
    if (!farmingActive) {
        farmingActive = true;
        document.getElementById("farmButton").style.opacity = 0.5; // Вимкнути кнопку
        document.getElementById("claimButton").disabled = true;

        // Встановлюємо інтервал для відліку часу
        farmingInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                updateTimerDisplay();
            } else {
                clearInterval(farmingInterval);
                farmingActive = false;
                document.getElementById("farmButton").style.opacity = 1; // Увімкнути кнопку
                document.getElementById("claimButton").disabled = false;
            }
        }, 1000);
    }
}

function updateTimerDisplay() {
    let minutes = Math.floor(timer / 60).toString().padStart(2, '0');
    let seconds = (timer % 60).toString().padStart(2, '0');
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

function claimReward() {
    if (timer === 0) {
        balance += farmRate;
        document.getElementById("balance").innerText = balance;
        resetFarming();
    }
}

function resetFarming() {
    timer = 30; // Повертаємо таймер до 30 секунд
    updateTimerDisplay();
    document.getElementById("claimButton").disabled = true;
}

function buyBoost() {
    if (balance >= boostCost[playerLevel - 1]) {
        balance -= boostCost[playerLevel - 1];
        farmRate += boostAmount[playerLevel - 1];
        playerLevel++; // Збільшуємо рівень гравця
        document.getElementById("balance").innerText = balance;
        document.getElementById("playerLevel").innerText = playerLevel; // Оновлюємо LVL
        updateBoostInfo();
    }
}

function updateBoostInfo() {
    if (playerLevel <= 10) {
        document.getElementById("boostCost").innerText = boostCost[playerLevel - 1];
    } else {
        document.getElementById("boostCost").innerText = "-";
    }
}
