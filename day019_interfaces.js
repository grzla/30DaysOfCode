/*
test input
echo "6" | node day019_interfaces.js
*/
'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
function main() {
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.divisorSum = function (n) {
            var sum = 0;
            for (var i = 0; i <= n; i++) {
                if (n % i == 0) {
                    sum += i;
                }
            }
            return sum;
        };
        return Calculator;
    }());
    var n = parseInt(readLine());
    if (n) {
        var calc = new Calculator();
        var sum = calc.divisorSum(n);
        console.log("I implemented: AdvancedArithmetic\n".concat(sum));
    }
}
