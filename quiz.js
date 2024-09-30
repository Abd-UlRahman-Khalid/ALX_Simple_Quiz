// function checkAnswer() {
//   if(userAnswer==4){
//         console.log("Correct! Well done.");
//   }
//   else {
//     console.log("That's incorrect. Try again!")
//   }
// }

function checkAnswer() {
  let correctAnswer = "4";
  document.querySelector('[name="quiz"]');
  let userAnswer = document.querySelector('[name="quiz"]:checked').value;
  document.querySelector('[name="quiz"]').checked;
  if (userAnswer == correctAnswer) {
    document.getElementById("feedback").innerHTML = "Correct! Well done.";
  } else {
    document.getElementById("feedback").innerHTML =
      "That's incorrect. Try again!";
  }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
