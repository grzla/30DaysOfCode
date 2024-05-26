/*
test:
echo 4\n3 5\n2 4\n-1 -2\n-1 3 | node day017_more_exceptions.js
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

//Write your code here
class Calculator {
    
    power(n, p) {
        try {
            if (p < 0 || n < 0) {
                throw new Error("n and p should be non-negative")
            } 
        return n**p
        } catch (e) {
            return e.message
        }
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }
    }
}