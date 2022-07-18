// Assignment code here

  // 1)Prompt for password criteria
  // a) length 8-128 characters, Prompt method
  // b) lowercase, uppercase, numbers, special characters, Confirm method
  // 2) Validate input
  // 3) Generate password based on criteria
  // 4) Display Generated password

//function GetRandomLower(LowercaseList) {
  //return LowercaseList[Math.floor(Math.random()*LowercaseList.length)];
//};

//function GetRandomUpper(UppercaseList) {
  //return UppercaseList[Math.floor(Math.random()*UppercaseList.length)];
//};

//function GetRandomNumber(NumberList) {
  //return NumberList[Math.floor(Math.random()*NumberList.length)];
//};

//function GetRandomSpecialChar(SpecialCharList) {
  //return SpecialCharList[Math.floor(Math.random()*SpecialCharList.length)];
//};

//function GetRandomItem(min, max) {
  //return Math.random()* (max-min) + min;
//};


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

  var UsersChoices = []

  //Adds lowercase array if user wants lowercase letters.
  if (Lowercase == true) {
    UsersChoices.push(LowercaseList);
  }

  //Adds uppcase array if user wants uppercase letters.
  if (Uppercase == true) {
    UsersChoices.push(UppercaseList);
  }

  //Adds number array if user wants numbers.
  if (Numbers == true) {
    UsersChoices.push(NumberList);
  }

  //Adds special character array if user wants special characters.
  if (SpecialChar == true) {
    UsersChoices.push(SpecialCharList);
  }

  console.log(UsersChoices);

  var NewPassword = "";

  for (var i = 0; i < PasswordLength; i++){

    //1) Pick random char from UsersChoices array.
    //2) Keep adding Random chars up to PasswordLength.

    




    //var LowerChoice = GetRandomLower(UsersChoices);
    //var RandomLower = GetRandomLower(LowerChoice);
    
    //var UpperChoice = GetRandomUpper(UsersChoices);
    //var RandomUpper = GetRandomUpper(UpperChoice);

    //var NumberChoice = GetRandomNumber(UsersChoices);
    //var RandomNumber = GetRandomNumber(NumberChoice);

    //var SpecialCharChoice = GetRandomSpecialChar(UsersChoices);
    //var RandomSpecial = GetRandomSpecialChar(SpecialCharChoice);

    //NewPassword +=RandomLower +=RandomUpper +=RandomNumber +=RandomSpecial;

    //var RandomList = GetRandomItem(UsersChoices);
    //var RandomChar = GetRandomItem(RandomList);

    //var PasswordResult = UsersChoices[Math.floor(Math.random)*PasswordLength];

    //console.log(PasswordResult);

    //NewPassword += RandomChar;



  }

  //console.log(NewPassword);
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
