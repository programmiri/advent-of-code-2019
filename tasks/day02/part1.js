export function runSequenz(startIndex, list) {
	if (list[startIndex] === 1) {
		const sum = list[list[startIndex + 1]] + list[list[startIndex + 2]];
		list[list[startIndex + 3]] = sum;
	} else if (list[startIndex] === 2) {
		const multi = list[list[startIndex + 1]] * list[list[startIndex + 2]];
		list[list[startIndex + 3]] = multi;
	}
	return list;
}

export function prep(list, position1, position2) {
	list[1] = position1;
	list[2] = position2;
	return list;
}

export function runIntcode(intList) {
	let newList = intList;
	for (let i = 0; i < intList.length; i += 4) {
		if (i === 99) break;
		newList = runSequenz(i, newList);
	}
	return newList;
}

export function preppedRunIntCode(intList) {
	const preppedList = prep(intList, 12, 2);
	return runIntcode(preppedList);
}
