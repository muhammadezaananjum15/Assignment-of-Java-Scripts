const winningNumber = 15;
let guessNumber = 0;
let guessCount = null;


while (winningNumber !== guessNumber) {
    guessNumber = +prompt("Guess the number between 1 to 20")
    if (winningNumber !== guessNumber){
    guessCount++
    alert(guessCount + " attempts used.....Try again !!!!")
  if (guessCount === 3 ){
    alert("Game Over! You have used all your attempts... The correct number was " + winningNumber);
    break;
  }  
  }
    if( guessNumber > winningNumber)
{
    alert("Your guess is too high try again")
}
else if( guessNumber < winningNumber) 
{
    alert("Your guess is too low try again")
}
else if( guessNumber === winningNumber) 
{
    alert("Congratulations! You guessed the number correctly.")
  
}
}
