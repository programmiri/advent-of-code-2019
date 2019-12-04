import { calcDistance } from './task1.js';

describe('calcDistance', () => {
	it('calculate the Manhattan distance from the central port to the closest intersection', () => {
		const wire1 = [
			'R75',
			'D30',
			'R83',
			'U83',
			'L12',
			'D49',
			'R71',
			'U7',
			'L72',
		];
		const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

		const result = calcDistance(wire1, wire2);

		expect(result).toBe(159);
	});
});
