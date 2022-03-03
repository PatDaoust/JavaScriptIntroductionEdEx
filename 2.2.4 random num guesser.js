//Try to write a small program that asks you to guess a number. 
//It will choose randomly a number, and will ask you to enter a value in an input field. 
//Then it will display "too small" or "too big", until you find the number.

//Hint: use the Math.random and Math.round methods
//such as in let randomNumber = Math.round(Math.random() * 10); to get a random value between 0 and 10.

function randomNumberGuesser(){
    //choose random num
    let randNum = Math.round(Math.random() * 10);
    //create loop
    let keepGuessing = true;
    while (keepGuessing == true) {
        //ask for input
        let guess = parseInt(prompt("please guess a number between 1 and 10"));
        //compare input vs random
        if (guess === randNum) {
            keepGuessing = false;
            console.log("Congrats, you guessed correctly!")
        }
        else if (guess > randNum){
            console.log("your guess is too big")
        }
        else if (guess < randNum){
            console.log("your guess is too small")
        }
    }   
}

randomNumberGuesser();