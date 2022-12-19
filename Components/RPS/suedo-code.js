// RPS


// RPS

// Player vs Computer

    // how do I play RPS


    // Way to keep track of wins losses and ties
        // make variables for wins losses and ties
    
    // For keeping track of the user's choice 0 = p 1 = r 2 = s
        // I could use a prompt() and store this in a variable 
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

    // How would I get the computers choice
        // How can I get the computer choice in a string
        // The computer has to pick from "rock", "paper" or "scissors"
        
        // let choices = ["p", "r", "s"]
        // choices[0]
        // choices[1]
        // choices[2]
        // Math.random()

    // How do I get thi





    // My Code

    // Keeping track of the score
        // How many games will be played? eg, best of 5
            // We can store the number of rounds in an array: Let rounds = [1, 2, 3, 4, 5]
            // Score will be calculated based on the most number of wins from the 5 rounds


    

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

    //console.log(Math.floor(Math.random() * 3))


    // user input

    let wins = 0 ;
    let losses= 0 ;
    let ties = 0 ;
    
    let choices = ["r", "p", "s"];
    
    for (let i = 0; i < 10; i++) {
          
        let randomNumber = Math.floor(Math.random()*choices.length);    
        let computerInput = choices[randomNumber];
        let userInput = prompt("(r)ock, (p)aper, or (s)cissors?");
    
    
        if(userInput === computerInput) {
            ties++;
            alert("you tied");
        } else if(userInput === "s" && computerInput === "p" || userInput === "p" && computerInput === "r" || userInput === "r" && computerInput === "s") {
            wins++;
            alert("you win");
        } else {
            losses++;
            alert("you lose");
        }
    
        // console.log("You chose " + userInput, "The computer chose " + computerInput)
    
        
    }

    console.log(`
        wins${wins}
        losses${losses}
        ties${ties}
        `)
    