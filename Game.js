let balance = 5000; // Стартовий баланс
let baseFarmRate = 100; // Базовий фарм
let remainingTime = 60; // Таймер на 1 хвилину
let farmingActive = false; // Статус фармінгу
let boostLevel = 0; // Рівень бусту
const boostCosts = [500, 1000, 1500, 6000, 10000, 15000, 20000, 30000, 40000, 50000]; // Ціни для бустів
const boostIncreases = [100, 300, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]; // Збільшення фарму

function getFarmReward() {
    // Розрахунок нагороди з урахуванням рівня бусту
    return baseFarmRate + (boostLevel * 100);
}

function startTimer() {
    remainingTime = 60; // Скидання таймера на 1 хвилину
    farmingActive = true;

    const timerElement = document.getElementById('timer');
    document.getElementById('farmButton').classList.add('disabled'); // Змінюємо кнопку Farm на сіру
    document.getElementById('claimButton').classList.remove('disabled'); // Змінюємо кнопку Claim на активну

    const interval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(interval);
            farmingActive = false;
            // Нараховуємо нагороду з урахуванням бусту
            const reward = getFarmReward();
            balance += reward; // Додаємо нагороду до балансу
            alert(`Фармінг закінчився! Ви отримали ${reward} монет!`);
            document.getElementById('balance').textContent = `Баланс: ${balance} монет`;
            document.getElementById('claimButton').classList.add('disabled'); // Змінюємо кнопку Claim на сіру
            document.getElementById('farmButton').classList.remove('disabled'); // Змінюємо кнопку Farm на зелену
            document.getElementById('timer').textContent = "01:00"; // Скидання таймера на 1 хвилину
        }

        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        remainingTime--;
    }, 1000);
}

document.getElementById('farmButton').addEventListener('click', () => {
    if (!farmingActive) {
        alert('Фармінг почався!');
        startTimer();
    } else {
        alert('Фармінг вже активний!');
    }
});

document.getElementById('claimButton').addEventListener('click', () => {
    alert('Вам потрібно завершити фармінг перед тим, як забрати нагороду!');
});

// Функція для покупки бусту
document.getElementById('boostButton').addEventListener('click', () => {
    if (boostLevel < 10) {
        const cost = boostCosts[boostLevel];
        if (balance >= cost) {
            balance -= cost; // Зменшуємо баланс на вартість бусту
            boostLevel++; // Підвищуємо рівень бусту
            document.getElementById('balance').textContent = `Баланс: ${balance} монет`;
            document.getElementById('boostInfo').textContent = `Буст: ${boostLevel} (Ціна: ${boostCosts[boostLevel] || 'Максимум'})`;
            document.getElementById('levelInfo').textContent = `Рівень: ${boostLevel + 1} (Фарміть: +${getFarmReward()} монет/хв, Ціна: ${boostCosts[boostLevel] || 'Максимум'})`;
            alert(`Буст активовано! Тепер ви отримуєте ${getFarmReward()} монет за хвилину.`);
        } else {
            alert('У вас недостатньо монет для покупки бусту!');
        }
    } else {
        alert('Ви досягли максимального рівня бусту!');
    }
});
