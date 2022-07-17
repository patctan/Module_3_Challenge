// Assignment code here

  // 1)Prompt for password criteria
  // a) length 8-128 characters, Prompt method
  // b) lowercase, uppercase, numbers, special characters, Confirm method
  // 2) Validate input
  // 3) Generate password based on criteria
  // 4) Display Generated password

function generatePassword() {
  console.log("Test");

  var HowLong = prompt("How many characters do you want in your password?\nPick a number between 8 and 128");

  var PasswordLength = parseInt(HowLong);

  if (isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return;
  }

  var Lowercase = confirm("Do you want your password to have lowercase characters?");

  var Uppercase = confirm("Do you want your password to have uppercase characters?");

  var Numbers = confirm("Do you want your password to have numbers?");

  var SpecialChar = confirm("Do you want you password to have special characters?");


  var LowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var NumberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var SpecialCharList = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "`"]

  var UppercaseList = []

  for (var i=0; i < LowercaseList.length; i++ ) {
    UppercaseList = LowercaseList[i].toUpperCase;
  }

  var UsersChoices = []

  if (Lowercase == true) {
    UsersChoices.push(LowercaseList);
  }

  if (Uppercase == true) {
    UsersChoices.push(UppercaseList);
  }

  if (Numbers == true) {
    UsersChoices.push(NumberList);
  }

  if (SpecialChar == true) {
    UsersChoices.push(SpecialCharList);
  }
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
