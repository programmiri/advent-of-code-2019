import { runIntcode } from './part1.js';

describe('runIntcode', () => {
	it('[1,0,0,0,99] returns [2,0,0,0,99]', () => {
		const result = runIntcode([1, 0, 0, 0, 99]);
		expect(result).toEqual([2, 0, 0, 0, 99]);
	});

	it('[2,4,4,5,99,0] returns [2,4,4,5,99,9801]', () => {
		const result = runIntcode([2, 4, 4, 5, 99, 0]);
		expect(result).toEqual([2, 4, 4, 5, 99, 9801]);
	});

	it('[1,1,1,4,99,5,6,0,99] returns [2,4,4,5,99,9801]', () => {
		expect(runIntcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
			30,
			1,
			1,
			4,
			2,
			5,
			6,
			0,
			99,
		]);
	});

	it('test', () => {
		const result = runIntcode([2, 4, 4, 5, 99, 0]);
		expect(result).toEqual([2, 4, 4, 5, 99, 9801]);
	});
});
