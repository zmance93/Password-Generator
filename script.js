// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz".split('');
  var specialCharacters = "!@#$%&(*)".split('');
  var numbers = "0123456789".split('');
  
  
  for(var i = 0; i<9; i++) {

  var random = Math.random() * letters.length;
  var floored = Math.floor(random);
  console.log(letters[floored]);

  }
  
  var random = Math.random() * numbers.length;
  var floored = Math.floor(random);
  console.log(numbers[floored]);

  
  var random = Math.random() * specialCharacters.length;
  var floored = Math.floor(random);
  console.log(specialCharacters[floored]);
  
 
  return;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
