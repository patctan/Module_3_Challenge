// Assignment code here

let Question = prompt("Would you like your password to have a length criteria? Type Yes or No.");
if (Question != null) {
  if (Question.toLowerCase == "yes") {
    var lengthcrit = true;
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
