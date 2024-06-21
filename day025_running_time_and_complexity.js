/**
sample input: 
3
12
5
7
echo $'3\n12\n5\n7' | node day025_running_time_and_complexity.js
 */

function processData(input) {
    const lines = input.split('\n').slice(1);
    // console.log(lines)
    for ( const line of lines ) {
        const num = parseInt(line);
        let isPrime = true;
        // 1 is not prime
        if (num === 1) {
            isPrime = false; // 1 is not prime
        } else {
            // Only need to check up to the square root
            for (let j = 2; j * j <= line; j++) { 
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        console.log(isPrime ? "Prime" : "Not prime");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
