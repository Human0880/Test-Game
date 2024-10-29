// Змінні для трекінгу
let balance = 100; // Стартовий баланс
let farmingActive = false; // Статус фармінгу
let timeLeft = 10; // Таймер на 10 секунд
let boostActive = false; // Статус активного бусту
let originalReward = 150; // Оригінальна нагорода

// Оновлення елементу балансу
document.getElementById('balanceDisplay').textContent = `${balance} MX`; // Відображення початкового балансу

// Функція для запуску фармінгу
function startFarming() {
    if (!farmingActive) {
        farmingActive = true; // Встановлюємо статус фармінгу
        document.getElementById('farmButton').classList.add('hidden'); // Сховати кнопку Farm
        const claimButton = document.getElementById('claimButton');
        claimButton.classList.remove('hidden'); // Показати кнопку Claim
        claimButton.style.backgroundColor = "grey"; // Встановити сіру кнопку Claim
        startTimer(); // Запустити таймер
    }
}

// Функція для старту таймера
function startTimer() {
    const timerElement = document.getElementById('timer');
    timeLeft = 10; // Скинути таймер на 10 секунд
    timerElement.textContent = "00:10"; // Встановити початкове значення таймера
    let interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            clearInterval(interval); // Зупинити таймер
            const claimButton = document.getElementById('claimButton');
            claimButton.style.backgroundColor = "#38FF6A"; // Змінити колір кнопки Claim на зелений
            timerElement.textContent = "00:00"; // Скинути таймер
        }
    }, 1000);
}

// Функція для отримання нагороди
function claimReward() {
    if (timeLeft === 0 && farmingActive) {
        let reward = originalReward;
        if (boostActive) {
            reward *= 2; // Подвоїти нагороду, якщо активний буст
            boostActive = false; // Скинути статус бусту
            alert("Boost activated! Your reward is doubled!"); // Сповіщення про активний буст
        }
        balance += reward; // Додаємо нагороду до балансу
        document.getElementById('balanceDisplay').textContent = `${balance} MX`; // Оновити баланс
        document.getElementById('claimButton').classList.add('hidden'); // Сховати кнопку Claim
        document.getElementById('farmButton').classList.remove('hidden'); // Показати кнопку Farm знову
        farmingActive = false; // Скидаємо статус фармінгу
    } else {
        alert("You cannot claim rewards yet!"); // Попередження, якщо не можна отримати нагороду
    }
}

// Функція для активації бусту
function activateBoost() {
    if (!boostActive) {
        boostActive = true; // Встановлюємо статус активного бусту
        alert("Boost activated! You will earn double rewards for the next farming cycle!"); // Сповіщення про активацію бусту
    } else {
        alert("Boost is already active!"); // Попередження, якщо буст вже активний
    }
}

// Функція для показу вкладок
function showTab(tabName) {
    const tabTitle = document.getElementById('tabTitle');
    const logoImage = document.getElementById('logoImage');
    const worldsPanel = document.getElementById('worldsPanel');
    const timer = document.getElementById('timer');
    const farmButton = document.getElementById('farmButton');
    const claimButton = document.getElementById('claimButton');
    const boostButton = document.getElementById('boostButton'); // Кнопка бусту

    if (tabName === 'Farm') {
        tabTitle.classList.add('hidden'); // Приховати заголовок
        logoImage.classList.remove('hidden'); // Показати логотип
        farmButton.classList.remove('hidden'); // Показати кнопку Farm
        timer.classList.remove('hidden'); // Показати таймер
        boostButton.classList.remove('hidden'); // Показати кнопку Boost
    } else {
        tabTitle.textContent = tabName;
        tabTitle.classList.remove('hidden'); // Показати заголовок
        logoImage.classList.add('hidden'); // Приховати логотип
        timer.classList.add('hidden'); // Приховати таймер
        farmButton.classList.add('hidden'); // Приховати кнопку Farm
        claimButton.classList.add('hidden'); // Приховати кнопку Claim
        boostButton.classList.add('hidden'); // Приховати кнопку Boost
    }

    // Показуємо або ховаємо панель вибору світу
    if (tabName === 'Worlds') {
        worldsPanel.classList.remove('hidden');
    } else {
        worldsPanel.classList.add('hidden');
    }
}

// Функція для вибору світу
function selectWorld(worldName) {
    alert(`You have selected: ${worldName}`);
    // Додайте тут додаткову логіку для обробки вибору світу
}
