const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const enteredValue = prompt('Maximum life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

//functions

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('Monster won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <=0) {
        reset();
    }
}

function attackMonster(attackValue) {
    let maxDamage;
    if (attackValue === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackValue === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monsterDamage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}


//main
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);