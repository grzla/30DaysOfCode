/**
 * 
 * sample data
 * 
 * 3
 * sam 99912222
 * tom 11122222
 * harry 12299933
 * sam
 * edward
 * harry
 * 
 * 3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry
 */

function processData(input) {
    const arr = input.split('\n')
    const numInputs = arr[0]
    const phonebook = new Map()

    let i  // use final increment as starting point below
        for (i = 1; i <= numInputs; i++){
            let keyvalue = arr[i].split(' ')
            phonebook.set(keyvalue[0], keyvalue[1])
        }
    
    for (let j= i; j<arr.length; j++) {

        const phonenumber = phonebook.get(arr[j]) 
        // undefined if name doesn't exist in map
        // otherwise display name=phonenumber
        if (phonenumber) console.log(`${arr[j]}=${phonenumber}`)
        
            else console.log(`Not found`)
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



