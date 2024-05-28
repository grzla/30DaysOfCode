/*
test input
echo "6" | node day019_interfaces.ts
*/

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

function main() {
    // Enter your code here
    interface AdvancedArithmetic {
        divisorSum(n: number): number 
    }
    class Calculator implements AdvancedArithmetic{
        divisorSum(n: number): number {
            let sum = 0
            for (let i = 0; i <= n; i++) {
                if( n % i == 0 ) {
                    sum += i
                }
            }
            return sum
        }
            
    }

    let n = parseInt(readLine())
    if (n) {
        const calc = new Calculator();
        let sum = calc.divisorSum(n)
        console.log(`I implemented: AdvancedArithmetic\n${sum}`)
    }
}