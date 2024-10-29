// Змінні для трекінгу
let balance = 0; // Стартовий баланс
let farmingActive = false; // Статус фармінгу
let timeLeft = 30; // Таймер на 30 секунд

// Оновлення елементу балансу
document.getElementById('balanceDisplay').textContent = `${balance} MAX`; // Відображення початкового балансу

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
    timeLeft = 30; // Скинути таймер на 30 секунд
    timerElement.textContent = "00:30"; // Встановити початкове значення таймера
    let interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            clearInterval(interval); // Зупинити таймер
            const claimButton = document.getElementById('claimButton');
            claimButton.style.backgroundColor = "green"; // Змінити колір кнопки Claim на зелений
            timerElement.textContent = "00:00"; // Скинути таймер
        }
    }, 1000);
}

// Функція для отримання нагороди
function claimReward() {
    if (timeLeft === 0 && farmingActive) {
        balance += 150; // Додаємо 150 монет до балансу
        document.getElementById('balanceDisplay').textContent = `${balance} MAX`; // Оновити баланс
        document.getElementById('claimButton').classList.add('hidden'); // Сховати кнопку Claim
        document.getElementById('farmButton').classList.remove('hidden'); // Показати кнопку Farm знову
        farmingActive = false; // Скидаємо статус фармінгу
    } else {
        alert("You cannot claim rewards yet!"); // Попередження, якщо не можна отримати нагороду
    }
}

// Функція для показу вкладок
function showTab(tabName) {
    const tabTitle = document.getElementById('tabTitle');
    const logoImage = document.getElementById('logoImage');
    const worldsPanel = document.getElementById('worldsPanel');
    const timer = document.getElementById('timer');

    if (tabName === 'Farm') {
        tabTitle.textContent = "Farm";
        tabTitle.classList.remove('hidden');
        logoImage.classList.add('hidden'); // Сховати логотип
        timer.classList.remove('hidden'); // Показати таймер
    } else {
        tabTitle.textContent = tabName;
        tabTitle.classList.remove('hidden');
        logoImage.classList.add('hidden'); // Сховати логотип
        timer.classList.add('hidden'); // Сховати таймер
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
