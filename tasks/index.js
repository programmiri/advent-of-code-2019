import { puzzleinput01 } from './day01/puzzleinput.js';
import { calcRequiredFuel, sumFuel } from './day01/part1.js';
import { calcFuelForFuel, sumAllRequiredFuel } from './day01/part2.js';

const result = sumAllRequiredFuel(puzzleinput01);
console.log(result);
