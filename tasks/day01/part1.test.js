import { calcRequiredFuel, sumFuel } from './part1.js';
import { calcFuelForFuel } from './part2.js';

describe('calcRequiredFuel', () => {
	describe.each`
		mass      | fuel
		${12}     | ${2}
		${14}     | ${2}
		${1969}   | ${654}
		${100756} | ${33583}
	`('mass $mass', ({ mass, fuel }) => {
		it(`returns ${fuel} fuel required`, () => {
			expect(calcRequiredFuel(mass)).toBe(fuel);
		});
	});
	it('sumFuel sums up all required fuels of a given list of masses', () => {
		expect(sumFuel([12, 14, 1969, 100756])).toBe(34241);
	});
});

describe('calcFuelForFuel', () => {
	describe.each`
		mass      | fuel
		${14}     | ${2}
		${1969}   | ${966}
		${100756} | ${50346}
	`('for module with mass $mass', ({ mass, fuel }) => {
		it(`returns a total of ${fuel} fuel required`, () => {
			expect(calcFuelForFuel(mass)).toBe(fuel);
		});
	});
});
