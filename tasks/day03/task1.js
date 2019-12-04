function getDirection(direction) {
	const dir = direction[0];
	const len = direction.split(dir)[1];
	return { [dir]: len };
	// return { string[0]: .split()}
}

function findHighestDirections(directions) {
	return directions.reduce(
		(acc, curr) => {
			const test = getDirection(curr);

			return acc;
		},
		{ x: null, y: null }
	);
}

// function calcDimensionsOfGrid(locations) {
// 	return Object.keys(locations).reduce(
// 		(acc, curr) => {
// 			if (!acc.x || locations[curr].x > acc.x) {
// 				acc.x = locations[curr].x;
// 			}
// 			if (!acc.y || locations[curr].y > acc.y) {
// 				acc.y = locations[curr].y;
// 			}
// 			return acc;
// 		},
// 		{ x: null, y: null }
// 	);
// }

export function calcDistance(wire1, wire2) {
	const test = findHighestDirections([...wire1, ...wire2]);
	// console.log(test);
}
