/**
sample input
Heraldo Memelli 8135627
2
100 80
echo "Heraldo Memelli 8135627\n2\n100 80" | node day012_inheritance.js
 */
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super()
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = id
        this.scores = scores
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    calculate() {
        const avg = this.scores.reduce( (accumulator, currentValue) =>
            accumulator + currentValue ) / this.scores.length

            return avg >= 90 && avg <= 100 ? 'O' :
            avg >= 80 && avg < 90 ? 'E' :
            avg >= 70 && avg < 80 ? 'A' :
            avg >= 55 && avg < 70 ? 'P' :
            avg >= 40 && avg < 55 ? 'D' : 'T'
    }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
