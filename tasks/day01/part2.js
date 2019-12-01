import { calcRequiredFuel } from './part1.js';

export function calcFuelForFuel(mass) {
	let fuelTotal = 0;
	let requiredFuel = mass;

	do {
		requiredFuel = calcRequiredFuel(requiredFuel);
		if (requiredFuel > 0) {
			fuelTotal += requiredFuel;
		}
	} while (requiredFuel > 0);
	return fuelTotal;
}

export function sumAllRequiredFuel(masses) {
	return masses.reduce((acc, curr) => {
		acc += calcFuelForFuel(curr);
		return acc;
	}, 0);
}
