// Assignment code here


function generatePassword() {
  console.log("Test");

  var HowLong = prompt("How many characters do you want in your password?\nPick a number between 8 and 128")

  var PasswordLength = parseInt(HowLong)

  if (isNaN(PasswordLength) || PasswordLength <=8 || PasswordLength >=128) {
    alert("Invalid input. Please enter a number between 8 and 128.")
    return
  }
}

//var lowercase = confirm("Do you want your password to have lowercase characters?");

//var uppercase = confirm("Do you want your password to have uppercase characters?");

//var numbers = confirm("Do you want your password to have numbers?");

//var SpecialChar = confirm("Do you want you password to have special characters?");





  // 1)Prompt for password criteria
  // a) length 8-128 characters, Prompt method
  // b) lowercase, uppercase, numbers, special characters, Confirm method
  // 2) Validate input
  // 3) Generate password based on criteria
  // 4) Display Generated password
  

  



  


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
