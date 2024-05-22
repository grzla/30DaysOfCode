'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class Difference {
    elements: number[];
    maximumDifference: number;

    constructor(elements: number[]) {
        this.elements = elements;
        this.maximumDifference = 0;
    }

    computeDifference(): void {
        let maxElement = Math.max(...this.elements);
        let minElement = Math.min(...this.elements);
        this.maximumDifference = Math.abs(maxElement - minElement);
    }
}

function main() {

    let n: number = parseInt(readLine().trim());
    let elements: number[] = readLine().trim().split(' ').map(Number);

    let difference = new Difference(elements);
    difference.computeDifference();

    console.log(difference.maximumDifference);
}