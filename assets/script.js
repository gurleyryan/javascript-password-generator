// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function generates the random password
function generatePassword() {

  // This code sets the finalPassword variable baseline to an empty string
  var finalPassword = "";
  // This code prompts the user as to how long their password should be and converts the entered string into an integer
  var askLength = parseInt(prompt("How long do you want your password to be? (Between 8 and 128 characters.)"));

  // This code checks whether the user input is a number between 8 and 128 characters, and notifies the user if not.
  if (askLength < 8 || askLength > 128 || isNaN(askLength) === true) {
    while (askLength < 8 || askLength > 128 || isNaN(askLength) === true) {
      alert("Input is not a valid number.");
      askLength = parseInt(prompt("How long do you want your password to be? (Between 8 and 128 characters.)"));
    }
  }

  // This code prompts the user as to whether they want lowercase letters, uppercase letters, numbers, and special characters in their password
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numeric = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters?");

  // This code generates random lowercase letters, uppercase letters, numbers, and special characters
  for (let i = 0; i <= askLength; i++) {
    if (lowerCase && finalPassword.length !== askLength) {
      var letters = "abcdefghijklmnopqrstuvwxyz";
      lowercase();
    }

    if (upperCase && finalPassword.length !== askLength) {
      var letters = "abcdefghijklmnopqrstuvwxyz";
      uppercase();
    }

    if (numeric && finalPassword.length !== askLength) {
      var numbers = "1234567890";
      number();
    }

    if (specialChar && finalPassword.length !== askLength) {
      var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      specials();
    }
  }

  function lowercase() {
    var randomNum = Math.floor(Math.random() * letters.length);
    var randomL = letters[randomNum];
    finalPassword = finalPassword + randomL;
  }

  function uppercase() {
    var randomNum = Math.floor(Math.random() * letters.length);
    var randomU = letters[randomNum].toUpperCase();
    finalPassword = finalPassword + randomU;
  }

  function number() {
    var randomNum = Math.floor(Math.random() * numbers.length);
    var randomN = numbers[randomNum];
    finalPassword = finalPassword + randomN;
  }

  function specials() {
    var randomNum = Math.floor(Math.random() * special.length);
    var randomS = special[randomNum];
    finalPassword = finalPassword + randomS;
  }

  // This code returns the final generated password at the end of the function
  return finalPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
