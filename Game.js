let balance = 5000; // Стартовий баланс
let farmingActive = false;
let farmingInterval;
let timer = 60; // Таймер на 1 хвилину
let farmRate = 100; // Базова ставка фарму
let boostLevel = 0; // Рівень бусту
let boostCost = [500, 1000, 1500, 6000, 10000, 20000, 50000, 100000, 200000, 500000]; // Вартість бустів
let boostAmount = [100, 300, 1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000]; // Сума бусту

function startFarming() {
    if (!farmingActive) {
        farmingActive = true;
        document.getElementById("farmButton").disabled = true;

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
        balance += farmRate + boostAmount[boostLevel]; // Додаємо MX до балансу з урахуванням рівня бусту
        document.getElementById("balance").innerText = balance;
        resetFarming();
    }
}

function resetFarming() {
    timer = 60; // Повертаємо таймер до 1 хвилини
    updateTimerDisplay();
    document.getElementById("claimButton").disabled = true; // Вимикаємо кнопку "Claim"
}

function buyBoost() {
    // Перевіряємо, чи достатньо балансу для покупки
    if (boostLevel < boostCost.length && balance >= boostCost[boostLevel]) {
        balance -= boostCost[boostLevel]; // Витрачаємо баланс на буст
        boostLevel++; // Підвищуємо рівень бусту
        document.getElementById("level").innerText = `LVL: ${boostLevel}`; // Оновлюємо відображення рівня
        document.getElementById("balance").innerText = balance; // Оновлюємо баланс

        alert("Буст куплено!"); // Повідомлення про успішну покупку
    } else if (boostLevel >= boostCost.length) {
        alert("Ви досягли максимального рівня бусту!"); // Повідомлення про максимальний рівень
    } else {
        alert("Недостатньо MX для покупки бусту."); // Повідомлення про недостатній баланс
    }
}
