// Generate password function
function generatePassword() {
  //Initial length prompt
  var questionLength = Number(
    prompt("How many characters would you like in your password?")
  );
  // lol
  var lengthChosen = [questionLength];
  // Length conditions
  if (questionLength < 8 || questionLength > 128) {
    return alert("Must be between 8-128 characters in length");
  } else if (lengthChosen.includes(69)) {
    console.log("😎");
  }
  // Character addition prompts
  var questionCapital = prompt("Would you like capital letters? (yes/no)");
  var questionSpecial = prompt("Would you like special characters? (yes/no)");
  var questionNumbers = prompt("Would you like numbers? (yes/no)");
  //If all prompts have valid responses, run the makePassword function
  if (
    questionCapital !== null &&
    questionSpecial !== null &&
    questionNumbers !== null
  ) {
    function makePassword() {
      //Character Variables
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var nums = "0123456789";
      var specialChar = "!@#$%^&*";
      // Variables defined with ternary operators to determine true and false values
      var upper = questionCapital === "yes" ? upperCase : "";
      var specialCase = questionSpecial === "yes" ? specialChar : "";
      var numberCase = questionNumbers === "yes" ? nums : "";
      // String concatenation to produce an empty string determined by the users choices
      var chars = lowerCase.concat(upper, specialCase, numberCase);
      var characters = "".concat(chars);
      var result = "";
      //Loop interprets what value was chosen for length and produces said value with characters chosen by the user
      for (var i = 0; i < questionLength; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      //Result is console logged
      console.log(result);
      //Return password string to the html
      return (document.getElementById("password").innerHTML = result);
    }
    //Calls function
    makePassword();
    // Catch all if any values are invalid
  } else return alert("Please try again!");
}
