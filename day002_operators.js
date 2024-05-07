let mealCost = 100
let tipPercentage = 15
let taxPercentage = 8


solve = (mealCost, tipPercentage, taxPercentage) => {
    let tipAmount = mealCost * (tipPercentage / 100)
    let taxAmount = mealCost * (taxPercentage / 100) 
    let totalBill = mealCost + tipAmount + taxAmount

    console.log(totalBill.toFixed(2));
    return
}

solve(mealCost,tipPercentage,taxPercentage)