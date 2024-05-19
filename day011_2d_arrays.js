/**
sample input
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

edge case
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 6 6 6
0 0 0 6 6 0
0 0 1 6 6 6

to run use: 
echo -e "1 1 1 0 0 0\n0 1 0 0 0 0\n1 1 1 0 0 0\nn0 0 2 6 6 6\n0 0 0 6 6 0\n0 0 1 6 6 6" | node day011_2d_arrays.js
// 42


 */

'use strict'
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

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    // placeholder for max hourglass - min sum is -9 * 7 = -63
    let max = -63
    // x & y domain are 2 shorter than length of x and y arrays
    let xdomain = arr[0].length - 2
    let ydomain = arr.length - 2

    // select through the interior indices as starting coordinate for hourglass sum
    // starting vals
    let x=0, y=0
    let hourglass = 0
        
    while (x != xdomain && y != ydomain) {
        hourglass = (arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]);
        
        if (hourglass > max) {
            max = hourglass
        }
        // console.log(`x: ${x}  y: ${y}  xy: ${arr[x][y]}  hourglass: ${hourglass}`)
        
        x++
        
        if (x == xdomain) {
            x=0
            y++
        }
    }
    console.log(max)
}

/** chatgpt solution
let max = -63;
for (let y = 0; y <= ydomain; y++) {
    for (let x = 0; x <= xdomain; x++) {
        let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2]
                            + arr[y+1][x+1] +
                  arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2];
        max = Math.max(max, sum);
    }
}
 */