// Fundamental Javascript review


//CONDITIONALS
console.log("=====CONDITIONALS=====")
// conditional operators 
// NOTE: I read my conditional statements out loud to myself to see if they make sense
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// != not equal example --- 5 != 10 "five is not equal to 10" this would be false
// == double equal allows comparisons across values that are not of the same primitive type from above 
            // example "5" == 5 is true!
            // normally it's safer to just use === to make sure you're always comparing "apples to apples"
// === the more strict version of equal comparisons 

// ARRAYS
console.log("=====ARRAYS=====")


let planetsArr = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars", 
        "Jupiter", 
        "Saturn", 
        "Uranus", 
        "Neptune"
    ];

// Console logging all the planets in planetsArr
console.log("=====LOOPING=====")
for (let i = 0; i < planetsArr.length; i++) {
    const planet = planetsArr[i]; // the variable planet gets created by default when 
    console.log("This is planet at index:", i, planet); // you can log multiple variables in a single console.log
    
    if (planet === "Earth"){
        console.log("I found "+ planet + " at index " + i + "!")
    }
}

console.log("=====2d Arrays=====")

// I know I talked about mixing datatypes in arrays being bad but here's how we would grab values from them anyway
let twoDArray = [["hello", 2, true], 
                 ["String1", "String2", "String3"], 
                 [10, 20, 30]]
// this array ends up being a 2d array with 3 columns and 3 rows
console.log("inner array at [0] and last index of that array: ",twoDArray[0][2])// console logging the boolean on the first inner array in the last index
console.log("String2 from the the second inner array: ", twoDArray[1][1]) // notice how the indexing still follows the "starts at 0" rule
console.log("Logging the number 10 from the 3rd inner array", twoDArray[2][0])

// here is an example that console.logs in a for loop the `1th` index from each inner array

for (let i = 0; i < twoDArray.length; i++) {
    console.log(twoDArray[i][1])
    
}



// Objects are really important! We can do all sorts of useful things with them. Here's a bit of preview of how objects are created and how to get values out of them

console.log("=====OBJECTS=====")
// Objects are made up of key value pairs 
// key's (sometimes called properties) are in front of the : and values are after
// keys are separated by a ,
let solarSystemObj = {
    planets: planetsArr, // the planets key is using the planets array as a value
    starName: "Sol",
    galaxyName: "Milky Way",
    numberOfMoons: 146,
    largestPlanet: planetsArr[4],       // able to specify singular element from array as a value as well
    smallestPlanet: planetsArr[0],
    favoriteNonPlanet: "Pluto",
    earthObj: { // you can have 'nested objects' inside of other objects here we have earthObj INSIDE of solarSystemObj
        populated: true,
        population: "7.8 Billion",
        earthDiameter: "12,742 km",
        numberOfMoons: 1
    }
}

// finding values of properties in objects
// the most common way to reach values stored inside of objects is to reference the name of the variable the object is in followed by a `.` then specifying the key of the value you want
console.log("Array of planets inside SolarSystemObj planets: ", solarSystemObj.planets) // array of planets in the 

console.log("3rd planet in SolarSystemObj Planets array: ", solarSystemObj.planets[2]) // don't forget that indexes start at 0 and not 1! Our 3rd planet would be at the 2nd index!

console.log("Galaxy name inside SolarSystemObj: ", solarSystemObj.galaxyName) // the galaxy name from solarSystemObj

console.log("Is earth populated: ", solarSystemObj.earthObj.populated) // notice how I had to specify solarSystemObj.earthObj first! then we have access to all the key's inside of earthObj

console.log("The earth has "+ solarSystemObj.earthObj.numberOfMoons + " moon(s)!")


console.log("======================================================")

let cars = ["fiat", "BMW", "Ford", "Kia", "Jaguar"]


for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car)
}




console.log("======================================================")



let scores = [22, 54, 76, 92, 43, 33];

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    console.log(score)
    
}