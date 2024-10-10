let balance = 5000; // Стартовий баланс
let farmingActive = false;
let farmingInterval;
let timer = 30; // Таймер на 30 секунд
let farmRate = 100; // Базова ставка фарму
let boostLevel = 1; // Рівень бусту
let boostCost = [500, 1000, 1500, 6000, 10000, 20000, 50000, 100000, 200000, 500000]; // Вартість бустів
let boostAmount = [100, 300, 1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000]; // Сума бусту

function startFarming() {
    if (!farmingActive) {
        farmingActive = true;
        document.getElementById("farmButton").disabled = true;
        document.getElementById("claimButton").disabled = true;

        // Встановлюємо інтервал для відліку часу
        farmingInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                updateTimerDisplay();
            } else {
                clearInterval(farmingInterval);
                farmingActive = false;
                document.getElementById("farmButton").disabled = false;
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
    if (boostLevel <= 10 && balance >= boostCost[boostLevel - 1]) {
        balance -= boostCost[boostLevel - 1];
        farmRate += boostAmount[boostLevel - 1];
        boostLevel++;
        document.getElementById("balance").innerText = balance;
        document.getElementById("level").innerText = boostLevel; // Оновлення LVL
    }
}
