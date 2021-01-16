// Character Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var nums = "0123456789";

var specialChar = "!@#$%^&*";

// (specialChar, nums, upperCase, lowerCase);

//array[Math.floor(Math.random() * array.length)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, capital, special, numbers) {
  var questionLength = Number(
    prompt("How many characters would you like in your password?")
  );

  var lengthChosen = [questionLength];

  if (questionLength < 8 || questionLength > 128) {
    return alert("Must be between 8-128 characters in length");
  } else if (lengthChosen.includes(69)) {
    console.log("😎");
  }

  var questionNumbers = Boolean(prompt("Would you like numbers? (true/false)"));

  var questionCapital = Boolean(
    prompt("Would you like capital letters? (true/false)")
  );

  var questionSpecial = Boolean(
    prompt("Would you like special characters? (true/false)")
  );

  length = questionLength;
  capital = questionCapital;
  special = questionSpecial;
  numbers = questionNumbers;

  // if length, capital, and special are all not null, continue
  if (length && capital && special && numbers) {
    function makePassword(length) {
      var upper = capital ? upperCase : "";
      var specialCase = special ? specialChar : "";
      var numberCase = numbers ? nums : "";

      var chars = [upper, specialCase, numberCase, lowerCase];
      var characters = "".concat(...chars);
      var result = "";
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      console.log(result);
      return (document.getElementById("password").innerHTML = result);
    }
    makePassword(length);
  } else return alert("👍🏻 Try Again! 🙏🏻");
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
