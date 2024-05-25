'use strict';

/* test cases
echo "3" | node day016_exceptions.js  // 3
echo "abc" | node day016_exceptions.js // Bad String
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const S = readLine()
    try {
        console.log(eval(S))
    }
    catch(e) {
        console.log('Bad String')
    }
}