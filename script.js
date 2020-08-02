let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 9);
};
const compareGuesses = (human, computer, target) => {
  
  const dif_with_h = Math.abs(human - target);
  const dif_with_c = Math.abs(computer-target);
   if (dif_with_h > dif_with_c){
    return false;
  } else if(dif_with_h < dif_with_c){
    return true;
  } else {
    return true;
  }
};
let updateScore = winner => {
  winner = winner.toLowerCase();
  if(winner === 'human') {
    humanScore += 1 ;
  } else {
    computerScore += 1 ;
  }
}; 
let advanceRound = () => {
 currentRoundNumber += 1;
};
 
