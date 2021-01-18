// Character Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChar = "!@#$%^&*";

function generatePassword() {
  var questionLength = Number(
    prompt("How many characters would you like in your password?")
  );

  var lengthChosen = [questionLength];

  if (questionLength < 8 || questionLength > 128) {
    return alert("Must be between 8-128 characters in length");
  } else if (lengthChosen.includes(69)) {
    console.log("😎");
  }

  var questionCapital = prompt("Would you like capital letters? (yes/no)");
  var questionSpecial = prompt("Would you like special characters? (yes/no)");
  var questionNumbers = prompt("Would you like numbers? (yes/no)");

  if (
    questionCapital !== null &&
    questionSpecial !== null &&
    questionNumbers !== null
  ) {
    function makePassword() {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var nums = "0123456789";
      var specialChar = "!@#$%^&*";

      var upper = questionCapital === "yes" ? upperCase : "";
      var specialCase = questionSpecial === "yes" ? specialChar : "";
      var numberCase = questionNumbers === "yes" ? nums : "";

      var chars = lowerCase.concat(upper, specialCase, numberCase);
      var characters = "".concat(chars);
      var result = "";

      for (var i = 0; i < questionLength; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      console.log(result);
      return (document.getElementById("password").innerHTML = result);
    }
    makePassword();
  } else return alert("Please try again!");
}
