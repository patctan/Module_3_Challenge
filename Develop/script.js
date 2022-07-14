// Assignment code here



//Prompt method
//more prompts Confirm method
var CharLength = prompt("How many characters do you want in your password?\nPick a number between 8 and 128");

var lowercase = confirm("Do you want your password to have lowercase characters?")

var uppercase = confirm("Do you want your password to have uppercase characters?")

var numbers = confirm("Do you want your password to have numbers?")

var SpecialChar = confirm("Do you want you password to have special characters?")



function generatePassword () {
  console.log("Test");

  // 1)Prompt for password criteria
  // a) length 8-128 characters, Prompt method
  // b) lowercase, uppercase, numbers, special characters, Confirm method
  // 2) Validate input
  // 3) Generate password based on criteria
  // 4) Display Generated password
  

  return "hi"
}


  


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
