/*
SAMPLE DATA
6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com

echo "6\nriya riya@gmail.com\njulia julia@julia.me\njulia sjulia@gmail.com\njulia julia@gmail.com\nsamantha samantha@gmail.com\ntanya tanya@gmail.com" | node day028_regex_patterns_intro_to_db.js
*/

'use strict';

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
    const N = parseInt(readLine().trim(), 10);
    
    const gmailUsers = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
        // console.log(firstMultipleInput)

        const firstName = firstMultipleInput[0];
        const emailID = firstMultipleInput[1];
        
        // test if emailID ends with @gmail.com
        if (/@gmail\.com$/.test(emailID)) {
            gmailUsers.push(firstName);
        }
    }
    
    gmailUsers.sort();

    gmailUsers.forEach(name => console.log(name));
}
