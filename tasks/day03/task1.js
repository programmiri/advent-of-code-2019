function getDirection(direction) {
	const dir = direction[0];
	const len = direction.split(dir)[1];
	return { [dir]: parseInt(len) };
}

function setWireOnGrid(wire, grid, intersections) {
	let currentX = 0;
	let currentY = 0;
	wire.forEach((step) => {
		const direction = getDirection(step);
		if (direction.R) {
			for (let i = 0; i < direction.R; i++) {
				currentX++;

				if (!grid[currentX]) {
					grid[currentX] = {};
				}
				if (grid[currentX][currentY]) {
					grid[currentX][currentY]++;
					if (intersections) {
						intersections.push([currentX, currentY]);
					}
				} else {
					grid[currentX][currentY] = 1;
				}
			}
		}
		if (direction.L) {
			for (let i = 0; i < direction.L; i++) {
				currentX--;

				if (!grid[currentX]) {
					grid[currentX] = {};
				}
				if (grid[currentX][currentY]) {
					grid[currentX][currentY]++;
					if (intersections) {
						intersections.push([currentX, currentY]);
					}
				} else {
					grid[currentX][currentY] = 1;
				}
			}
		}
		if (direction.U) {
			for (let i = 0; i < direction.U; i++) {
				currentY++;

				if (!grid[currentX]) {
					grid[currentX] = {};
				}
				if (grid[currentX][currentY]) {
					grid[currentX][currentY]++;
					if (intersections) {
						intersections.push([currentX, currentY]);
					}
				} else {
					grid[currentX][currentY] = 1;
				}
			}
		}
		if (direction.D) {
			for (let i = 0; i < direction.D; i++) {
				currentY--;

				if (!grid[currentX]) {
					grid[currentX] = {};
				}
				if (grid[currentX][currentY]) {
					grid[currentX][currentY]++;
					if (intersections) {
						intersections.push([currentX, currentY]);
					}
				} else {
					grid[currentX][currentY] = 1;
				}
			}
		}
	});
}

function calcManhattenDistance(locations) {
	const allLocations = locations.map((location) => {
		return Math.abs(location[0]) + Math.abs(location[1]);
	});
	return Math.min(...allLocations);
}

export function calcDistance(wire1, wire2) {
	const grid = {};
	const intersections = [];
	setWireOnGrid(wire1, grid);
	setWireOnGrid(wire2, grid, intersections);
	return calcManhattenDistance(intersections);
}
