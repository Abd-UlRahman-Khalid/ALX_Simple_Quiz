// function checkAnswer() {
//   if(userAnswer==4){
//         console.log("Correct! Well done.");
//   }
//   else {
//     console.log("That's incorrect. Try again!")
//   }
// }

document.getElementById("submit-answer").addEventListener("click", function () {
  isChoice1 = document.getElementById("choice1").checked;
  if (isChoice1) {
    document.getElementById("feedback").innerHTML = "Correct! Well done.";
  } else {
    document.getElementById("feedback").innerHTML =
      "That's incorrect. Try again!";
  }
});
