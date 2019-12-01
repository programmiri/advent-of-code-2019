import { calcRequiredFuel } from './part1.js';

export function calcFuelForFuel(mass) {
	let fuelNeeded = calcRequiredFuel(mass);

	if (fuelNeeded > 0) {
		return fuelNeeded + calcFuelForFuel(fuelNeeded);
	}
	return 0;
}

export function sumAllRequiredFuel(masses) {
	return masses.reduce((acc, curr) => {
		acc += calcFuelForFuel(curr);
		return acc;
	}, 0);
}
