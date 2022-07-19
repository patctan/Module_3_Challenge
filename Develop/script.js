// Assignment code here

//Get a random item from an array.
function getRandomLower(lowercaseList) {
  return lowercaseList[Math.floor(Math.random()*lowercaseList.length)];
};

function getRandomUpper(uppercaseList) {
  return uppercaseList[Math.floor(Math.random()*uppercaseList.length)];
};

function getRandomNumber(numberList) {
  return numberList[Math.floor(Math.random()*numberList.length)];
};

function getRandomSpecialChar(specialCharList) {
  return specialCharList[Math.floor(Math.random()*specialCharList.length)];
};

function getPossibleCharacters(possibleCharacters) {
  return possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]
};

function generatePassword() {
  console.log("Test");

  //Asks user to input desired character length.
  var howLong = prompt("How many characters do you want in your password?\nPick a number between 8 and 128");

  //Turns user input into an integer.
  var passwordLength = parseInt(howLong);

  //Stops further questions if initial input is invalid.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return;
  }

  //Registers if user wants lowercase, uppercase, numbers, and/or special characters in their password.

  var lowercase = confirm("Do you want your password to have lowercase characters?");

  var uppercase = confirm("Do you want your password to have uppercase characters?");

  var numbers = confirm("Do you want your password to have numbers?");

  var specialChar = confirm("Do you want you password to have special characters?");

  //Makes user start again if they don't choose to have lowercase, uppercase, numbers, or special characters in their password.
  if (lowercase == false && uppercase == false && numbers == false && specialChar == false) {
    alert("Please confirm at least one option.");
    return;
  }


  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var specialCharList = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "`"]

  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  var possibleCharacters = []// an array of possible characters based on user choices use concat method to tie arrays
  var neededCharacters = []// an array of must characters in result
  var generatedPasswordArr = []// password as array that will be used

  //Adds lowercase array if user wants lowercase letters.
    if (lowercase == true ) {
      possibleCharacters = lowercaseList.concat(possibleCharacters);
      neededCharacters.push(getRandomLower(lowercaseList))
     };
   
     //Adds uppcase array if user wants uppercase letters.
     if (uppercase == true) {
      possibleCharacters = uppercaseList.concat(possibleCharacters);
      neededCharacters.push(getRandomUpper(uppercaseList))

     };
   
     //Adds number array if user wants numbers.
     if (numbers == true) {
      possibleCharacters = numberList.concat(possibleCharacters);
      neededCharacters.push(getRandomNumber(numberList))
       
     };
   
     //Adds special character array if user wants special characters.
     if (specialChar == true) {
      possibleCharacters = specialCharList.concat(possibleCharacters);
      neededCharacters.push(getRandomSpecialChar(specialCharList))

     };

  //Generates a password in array form based on user input.
  for (var i = 0; i < passwordLength; i++) {
    var possibleCharacter = getPossibleCharacters(possibleCharacters);

    generatedPasswordArr.push(possibleCharacter);
  }

    // Makes sure at least one of each of the needed character from the needed character array is in the generated password
    for (var i = 0; i < neededCharacters.length; i++) {
      generatedPasswordArr[i] = neededCharacters[i];
    }

    console.log(generatedPasswordArr);
    
    //returns the new generated password array as a string without commas
    return generatedPasswordArr.join("");



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
