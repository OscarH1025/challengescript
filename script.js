
// Assignment code heres
var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";
//textArea display the password on screen//

var textArea = document.getElementById("password")

function characterTypes () {
var passwordCapital = confirm ("would you like to include uppercase letters");
var passwordLowercase = confirm ("would you like to include lowercase letters?");
var passwordNumeric = confirm ("would like to include numbers?");
var passwordCapital === true || passwordLowercase === true || passwordSpecial === true) {
  if (passwordCapital === true) {
    passString += capital
  }

  //if lowercase letters are picked, its added to the variable 'passString'
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
