// Finance App Practice

// This is an array of arrays

let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', -322013]
]

let changes = []




    for (let i = 0; i < finances.length; i++) {
        const finance = finances[i];
        const [date, amount] = finance

        if (i > 0) {
            const changeInProfits = finances [i-1]
            const [lastDate, lastAmount] = changeInProfits
            changes.push(amount - lastAmount)
        }

    }

    console.log(changes)





















// console.log("=====================================")

//     let salary1 = 10000000
//     let salary2 = 140543000000
//     let salary3 = 10000000

//     let totalSalary = salary1 + salary2 + salary3

//     let salaryCap = 40000000
//     let taxRate = .18

//     if (totalSalary > salaryCap) {
//         let taxableIncome = totalSalary - salaryCap
//         let taxToPay = taxableIncome*taxRate

//         console.log("You owe: " + taxToPay)

//     } else {
//         console.log("No tax to pay")
//     }

// console.log("=====================================")



// let arrayLoops = ["marc", "Becky", "Elsie", "Willow"]

// for (let i = 0; i < arrayLoops.length; i++) {
//     const arrayloop = arrayLoops[i];
//     console.log(arrayloop)
// }
