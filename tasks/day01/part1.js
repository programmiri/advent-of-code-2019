export function calcRequiredFuel(mass) {
	return Math.floor(mass / 3) - 2;
}

export function sumFuel(masses) {
	return masses.reduce((acc, curr) => {
		acc += calcRequiredFuel(curr);
		return acc;
	}, 0);
}

