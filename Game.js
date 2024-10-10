let balance = 5000; // Стартовий баланс
let level = 1; // Початковий рівень
let farmingActive = false;
let farmingInterval;
let timer = 20; // Таймер на 20 секунд
let farmRate = 100; // Базова ставка фарму

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
        balance += farmRate;
        document.getElementById("balance").innerText = balance;

        // Збільшуємо рівень, якщо баланс перевищує 10000
        if (balance >= 10000) {
            level++;
            document.getElementById("level").innerText = `LVL: ${level}`;
            balance = 5000; // Скидаємо баланс після підвищення рівня
        }

        resetFarming();
    }
}

function resetFarming() {
    timer = 20; // Повертаємо таймер до 20 секунд
    updateTimerDisplay();
    document.getElementById("claimButton").disabled = true;
}

function buyBoost() {
    // Логіка для покупки бустів (поки не реалізована)
    alert("Буст куплено!");
}
