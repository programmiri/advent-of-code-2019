import { calcRequiredFuel, sumFuel } from './part1.js';
import { puzzleinput01 } from './puzzleinput.js';

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

	it('returns the solution to the task', () => {
		expect(sumFuel(puzzleinput01)).toBe(3233481);
	});
});
