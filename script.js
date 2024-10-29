body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-image: url('bg.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    padding: 20px;
}

.burger-menu {
    position: absolute;
    top: 20px;
    right: 20px;
}

.burger-content {
    display: none;
    position: absolute;
    background-color: #333;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.burger-button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
}

.burger-content button {
    background-color: #4A4A4A;
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    display: block;
}

.logo {
    margin-top: 150px;
    text-align: center;
}

.logo img {
    width: 282px;
}

.hidden {
    display: none;
}

.center-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timer-balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.timer,
.balance {
    font-size: 24px;
    color: white;
    text-align: center;
}

.farm-button {
    background-color: #FF3874;
    border: none;
    color: black;
    padding: 20px 60px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 30px;
    margin-top: 10px;
}

.nav-panel {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    position: relative; /* Змінено для позиціонування підвалу */
}

.nav-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 11px;
}

.nav-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
}

.burger-button:focus + .burger-content,
.burger-content:hover {
    display: block;
}

/* Стиль для підвалу */
.footer {
    background-color: rgba(0, 0, 0, 0.5); /* Чорний фон з 50% прозорістю */
    height: 60px; /* Висота підвалу */
    width: 100%; /* Ширина підвалу */
    position: absolute; /* Абсолютне позиціонування */
    bottom: 0; /* Знизу */
    display: flex;
    align-items: center; /* Вертикальне центрування вмісту */
    justify-content: center; /* Горизонтальне центрування */
}
