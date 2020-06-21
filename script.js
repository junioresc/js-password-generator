// Assignment code here
var generateBtn = document.querySelector("#generate");
// Strings that will hold the specific characters in groups
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// We'll use this to store the user requested characters
let values = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Asks the user which types of characters they want in their password
function characterPicker() {
  let lcYes = window.confirm("Do you want to include lowercase letters?");
  if (lcYes) {
    values += lowerCase;
  }
  let ucYes = window.confirm("Do you want to include uppercase letters?");
  if (ucYes) {
    values += upperCase;
  }
  let numericYes = window.confirm("Do you want to include numbers?");
  if (numericYes) {
    values += numbers;
  }
  let scYes = window.confirm("Do you want to include special characters?");
  if (scYes) {
    values += specialChar;
  }
  // Restarts the character prompts so that user must choose at least one character
  if (values === "" || values === null) {
    window.alert("You need to pick at least one character type!")
    characterPicker();
  }
  console.log(values);
}

// Asks the user how long their password wants to be and then generates it
function generatePassword() {
  let passwordLength = prompt("How long do you want the password to be?");

  function isNumeric(number) {
    return (number - 0) == number && ('' + number).trim().length > 0;
  }

  passwordLength = parseInt(passwordLength);

  // Edge cases to prevent the user from breaking the code
  if (isNumeric(passwordLength) === false) {
    window.alert("You need to pick a number!");
    generatePassword();
  } else if (passwordLength < 8) {
    window.alert("You need to pick a number greater than 8.");
    generatePassword();
  } else if (passwordLength > 128) {
    window.alert("You need to pick a number smaller than 128.");
    generatePassword();
  }

  characterPicker();

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);