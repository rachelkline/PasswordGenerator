// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create arrays to be used to construct the password

var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"];
var chosen = [];


// Now, all of the possible characters are logged into the console. We have to prompt the user to choose what characters they want.

var passwordLength = parseInt(prompt("How many characters do you want in your password? \nPassword cannot be less than 8 characters or more than 128 characters."));

// Make the password between 8 and 128 characters

while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
  alert("Please choose a number that is more than 8 and less than 128 characters");
  passwordLength = parseInt(prompt("How many characters do you want in your password? \nPassword cannot be less than 8 characters or more than 128 characters."));
}

//Prompt user to choose types of characters

var selectSpecial = confirm("Click OK to confirm Special Characters.");

var selectLowerCase = confirm("Click OK to confirm Lower Case Characters.");

var selectUpperCase = confirm("Click OK to confirm Upper Case Characters.");

var selectNumbers = confirm("Click OK to confirm Numbers.");

//Possible user choices

if (selectLowerCase) {
  chosen.concat(lowers);
} 
if (selectUpperCase) {
  chosen.concat(uppers);
}
if (selectSpecial) {
  chosen,concat(special);
}
if (selectNumbers) {
  chosen.concat(numbers);
}
for (var i = 0; i = passwordLength.value; i++) {
  pass += chosen[Math.floor(Math.random() * chosen.length)]; 
}
return pass

function generatePassword () {
  generateBtn
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


