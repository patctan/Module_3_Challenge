// Assignment code here

//Get a random item from an array.
function GetRandomLower(LowercaseList) {
  return LowercaseList[Math.floor(Math.random()*LowercaseList.length)];
};

function GetRandomUpper(UppercaseList) {
  return UppercaseList[Math.floor(Math.random()*UppercaseList.length)];
};

function GetRandomNumber(NumberList) {
  return NumberList[Math.floor(Math.random()*NumberList.length)];
};

function GetRandomSpecialChar(SpecialCharList) {
  return SpecialCharList[Math.floor(Math.random()*SpecialCharList.length)];
};

function getPossibleCharacters(possibleCharacters) {
  return possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]
};

function generatePassword() {
  console.log("Test");

  //Asks user to input desired character length.
  var HowLong = prompt("How many characters do you want in your password?\nPick a number between 8 and 128");

  //Turns user input into an integer.
  var PasswordLength = parseInt(HowLong);

  //Stops further questions if initial input is invalid.
  if (isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return;
  }

  //Registers if user wants lowercase, uppercase, numbers, and/or special characters in their password.

  var Lowercase = confirm("Do you want your password to have lowercase characters?");

  var Uppercase = confirm("Do you want your password to have uppercase characters?");

  var Numbers = confirm("Do you want your password to have numbers?");

  var SpecialChar = confirm("Do you want you password to have special characters?");

  //Makes user start again if they don't choose to have lowercase, uppercase, numbers, or special characters in their password.
  if (Lowercase == false && Uppercase == false && Numbers == false && SpecialChar == false) {
    alert("Please confirm at least one option.");
    return;
  }


  var LowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var NumberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var SpecialCharList = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "`"]

  var UppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  var possibleCharacters = []// an array of possible characters based on user choices use concat method to tie arrays
  var neededCharacters = []// an array of must characters in result
  var generatedPasswordArr = []// password as array that will be used

  //Adds lowercase array if user wants lowercase letters.
    if (Lowercase == true ) {
      possibleCharacters = LowercaseList.concat(possibleCharacters);
      neededCharacters.push(GetRandomLower(LowercaseList))
     };
   
     //Adds uppcase array if user wants uppercase letters.
     if (Uppercase == true) {
      possibleCharacters = UppercaseList.concat(possibleCharacters);
      neededCharacters.push(GetRandomUpper(UppercaseList))

     };
   
     //Adds number array if user wants numbers.
     if (Numbers == true) {
      possibleCharacters = NumberList.concat(possibleCharacters);
      neededCharacters.push(GetRandomNumber(NumberList))
       
     };
   
     //Adds special character array if user wants special characters.
     if (SpecialChar == true) {
      possibleCharacters = SpecialCharList.concat(possibleCharacters);
      neededCharacters.push(GetRandomSpecialChar(SpecialCharList))

     };

  //need a for loop for looping the input number of times iterating through the possible array and pushing to generated password array
  for (var i = 0; i < PasswordLength; i++) {
    var possibleCharacter = getPossibleCharacters(possibleCharacters);

    generatedPasswordArr.push(possibleCharacter);
  }

    // Mix in at least one of each of the needed character from the needed character array in the generated password
    for (var i = 0; i < neededCharacters.length; i++) {
      generatedPasswordArr[i] = neededCharacters[i];
    }

    console.log(generatedPasswordArr);

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
