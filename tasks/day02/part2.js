import { runIntcode, prep } from './part1.js';

export function findInputAndNoun(intList) {
	let result = null;

	for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			const list = prep([...intList], verb, noun);
			const newList = runIntcode(list);
			if (newList[0] === 19690720) {
				result = 100 * newList[1] + newList[2];
				break;
			}
		}
		if (result !== null) {
			break;
		}
	}
	return result;
}
