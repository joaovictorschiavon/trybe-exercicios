const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
};
  
const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
};

const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


// Parte I
// Requisito 1
const dragonDamage = () => {
	const dmg = Math.floor(Math.random() * (dragon.strength - 14)) + 15;
	dragon.damage = dmg;
	return dmg
}

// Requisito 2
const warriorDamage = () => {
	const dmg = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength - 1)) 
	+ warrior.strength;
	warrior.damage = dmg;
	return dmg
}

//Requisito 3

const mageSpell = () => {
	return {
		damage: () => mage.damage = Math.floor(Math.random() * mage.intelligence) + mage.intelligence,
		mana: () => mage.mana < 15 ? this.damage = 'Não possui mana suficiente' : mage.mana -= 15,
	}
}

// Parte II

// Requisito 1, 2, 3 e 4

const gameActions = {
	warriorTurn: (warriorDamage) => {
		const wDmg = warriorDamage();
		dragon.healthPoints -= warrior.damage;
	},
	mageTurn: (mageSpell) => {
		const mSpell = mageSpell();
		mage.damage = mageSpell().damage();
		dragon.healthPoints -= mage.damage;
	},
	dragonTurn: (dragonDamage) => {
		const dDmg = dragonDamage();
		mage.healthPoints -= dragon.damage;
		warrior.healthPoints -= dragon.damage;
	},
	turns: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageSpell);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turns());