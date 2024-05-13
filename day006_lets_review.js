input = "2\nHacker\nRank"

let lines = input.split('\n')

for (let z = 1; z < lines.length; z++){
    let str = lines[z]
    let even = ""
    let odd = ""
    
    for (let i = 0; i < str.length; i++){
        i % 2 === 0 ? even += str[i] : odd += str[i]
    }
    console.log(`${even} ${odd}`)
}