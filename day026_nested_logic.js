function processData(input) {
    const lines = input.split('\n');
    const [actualDay, actualMonth, actualYear] = lines[0].split(' ').map(Number);
    const [expectedDay, expectedMonth, expectedYear] = lines[1].split(' ').map(Number);
    // Calculate fine
    let fine = 0;

    // Returned after the calendar year it was expected
    if (actualYear > expectedYear) {
        fine = 10000;
    }
    // Returned within the expected calendar, but after the expected month
    else if (actualYear === expectedYear && actualMonth > expectedMonth) {
        fine = 500 * (actualMonth - expectedMonth);
    }
    // Returned within expected month but after the expected day
    else if (actualYear === expectedYear && actualMonth === expectedMonth && actualDay > expectedDay) {
        fine = 15 * (actualDay - expectedDay);
    }
    
    console.log(fine);
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
