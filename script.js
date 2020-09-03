// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
// Create arrays to be used to construct the password
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"];
  var chosen = [];


// Prompts that come up after you click generate password


  var passwordLength = parseInt(prompt("How many characters do you want in your password? \nPassword cannot be less than 8 characters or more than 128 characters.")); {
    while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      passwordLength = parseInt(prompt("How many characters do you want in your password? \nPassword cannot be less than 8 characters or more than 128 characters."));
    }
  }

  var selectSpecial = confirm("Click OK to confirm Special Characters.");

  var selectLowerCase = confirm("Click OK to confirm Lower Case Characters.");

  var selectUpperCase = confirm("Click OK to confirm Upper Case Characters.");

  var selectNumbers = confirm("Click OK to confirm Numbers.");
  
  // Adds user selected data to the empty 'chosen' array
  if (selectLowerCase) {
    chosen = chosen.concat(lowers);
  }
  if (selectUpperCase) {
    chosen = chosen.concat(uppers);
  }
  if (selectSpecial) {
    chosen = chosen.concat(special);
  }
  if (selectNumbers) {
    chosen = chosen.concat(numbers);
  }

  // empty string variable for the for loop
  var pass = "";

  // loop for random characters
  for (var i = 0; i < passwordLength; i++) {
    var randomGeneratedPass = chosen[Math.floor(Math.random() * chosen.length)];

    pass += randomGeneratedPass;

  }

  return pass
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);