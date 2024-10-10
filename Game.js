let balance = 5000; // Стартовий баланс
let farmingActive = false;
let farmingInterval;
let timer = 60; // Таймер на 1 хвилину
let farmRate = 100; // Базова ставка фарму
let boostLevel = 1; // Рівень бусту
let boostCost = [500, 1000, 1500, 6000, 10000, 20000, 50000, 100000, 200000, 500000]; // Вартість бустів
let boostAmount = [100, 300, 1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000]; // Сума бусту

function startFarming() {
    if (!farmingActive) {
        farmingActive = true;
        document.getElementById("farmButton").disabled = true;
        document.getElementById("claimButton").disabled = false;

        // Встановлюємо інтервал для відліку часу
        farmingInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.getElementById("timer").innerText = timer;
            } else {
                clearInterval(farmingInterval);
                farmingActive = false;
                document.getElementById("farmButton").disabled = false;
                document.getElementById("claimButton").disabled = false;
                document.getElementById("claimButton").classList.remove("gray");
                document.getElementById("claimButton").classList.add("green");
            }
        }, 1000);
    }
}

function claimReward() {
    if (timer === 0) {
        balance += farmRate;
        document.getElementById("balance").innerText = balance;
        resetFarming();
    }
}

function resetFarming() {
    timer = 60;
    document.getElementById("timer").innerText = timer;
    document.getElementById("claimButton").disabled = true;
    document.getElementById("claimButton").classList.remove("green");
    document.getElementById("claimButton").classList.add("gray");
}

function buyBoost() {
    if (boostLevel <= 10 && balance >= boostCost[boostLevel - 1]) {
        balance -= boostCost[boostLevel - 1];
        farmRate += boostAmount[boostLevel - 1];
        boostLevel++;
        document.getElementById("balance").innerText = balance;
        document.getElementById("boostLevel").innerText = boostLevel;
        updateBoostDetails();
    }
}

function updateBoostDetails() {
    let boostDetails = document.getElementById("boostDetails");
    boostDetails.innerHTML = ""; // Очищаємо попередні деталі
    for (let i = 0; i < boostCost.length; i++) {
        if (i < boostLevel) {
            boostDetails.innerHTML += `<li>Рівень ${i + 1}: +${boostAmount[i]} до фарму за ${boostCost[i]} монет</li>`;
        } else {
            boostDetails.innerHTML += `<li>Рівень ${i + 1}: Непридбаний</li>`;
        }
    }
}
