
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
 //if uppercase letter are selected, its added to the variable "passString"
  if (passwordCapital === true) {
    passString += capital
  }

  //if lowercase letters are selected, its added to the variable 'passString'
if (passwordLowercase === true) {
  passString += lower

  //if special characters are selected, its added to the variable "passString"
  if (passwordSpecial === true) {
    passString += special

  }
}

// This statement else if none of the variable were selected and goes back to the beginning of characterTyes function/
else {
  alert("Please choose at least one character type.")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var text = '';

  // Function questions allows for the prompt to loop back if a value less than 8 or greater than 128 was chosen
  function questions() {
    var passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 characters to 128 characters.");
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes()

   for (let i = 0; i < passwordLength; i++)
      
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
