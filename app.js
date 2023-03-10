// ********                  Chapterno 21to25
//          **********        Question no 1

// var firstName = prompt("Enter your first name:"); // prompt for first name
// var lastName = prompt("Enter your last name:"); // prompt for last name

// var fullName = firstName + " " + lastName; // concatenate the first and last names with a space in between

// alert("Hello " + fullName + "!"); // display the greeting message with the full name


//          **********        Question no 2

// var favoritePhone = prompt("What is your favorite mobile phone model?"); // prompt for favorite phone model

// var inputLength = favoritePhone.length; // find the length of the user's input

// document.write("The length of your favorite mobile phone model is: " + inputLength); // display the length of the user's input in the browser


//          **********        Question no 3

// var word = "Pakistani"; // the word to search for the letter "n"
// var index = word.indexOf("n"); // find the index of the letter "n" in the word

// document.write("The index of the letter 'n' in the word 'Pakistani' is: " + index); // display the result in the browser


//          **********        Question no 4

// var word = "Hello World"; // the word to search for the last occurrence of the letter "l"
// var lastIndex = word.lastIndexOf("l"); // find the last index of the letter "l" in the word

// document.write("The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex); // display the result in the browser


//          **********        Question no 5


// var word = "Pakistani"; // the word to find the character at the 3rd index
// var char = word.charAt(3); // find the character at the 3rd index in the word

// document.write("The character at the 3rd index in the word 'Pakistani' is: " + char); // display the result in the browser


//          **********        Question no 6


// var firstName = prompt("Enter your first name:"); // prompt for user's first name
// var lastName = prompt("Enter your last name:"); // prompt for user's last name

// var fullName = firstName.concat(" ", lastName); // merge the user's first and last names into a new variable titled "fullName"

// document.write("Hello, " + fullName + "!"); // greet the user using their full name


//          **********        Question no 7


// var word = "Hyderabad"; // the word to replace the substring in
// var newWord = word.replace("Hyder", "Islam"); // replace the substring "Hyder" with "Islam" in the word

// document.write("The new word after replacement is: " + newWord); // display the result in the browser


//          **********        Question no 8


// var message = "Ali and Sami are best friends. They play cricket and football together."; // the message to replace the substring in
// var newMessage = message.replace(/and/g, "&"); // replace all occurrences of the substring "and" with "&" in the message

// document.write("The new message after replacement is: " + newMessage); // display the result in the browser


//          **********        Question no 9


// var stringNum = "472"; // the string to convert to a number
// var convertedNum = Number(stringNum); // convert the string to a number using the Number() function

// document.write("String value: " + stringNum + "<br>"); // display the original string value
// document.write("Type of string value: " + typeof(stringNum) + "<br><br>"); // display the type of the original string value

// document.write("Number value: " + convertedNum + "<br>"); // display the converted number value
// document.write("Type of number value: " + typeof(convertedNum)); // display the type of the converted number value


//          **********        Question no 10


// var userInput = prompt("Enter some text:"); // take user input
// var uppercaseInput = userInput.toUpperCase(); // convert user input to uppercase letters

// document.write("Original input: " + userInput + "<br>"); // display the original user input
// document.write("Uppercase input: " + uppercaseInput); // display the converted uppercase input

//          **********        Question no 11


// var userInput = prompt("Enter some text:"); // take user input
// var titleCaseInput = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); // convert user input to title case

// document.write("Original input: " + userInput + "<br>"); // display the original user input
// document.write("Title case input: " + titleCaseInput); // display the converted title case input


//          **********        Question no 12

// var num = 35.36; // define the variable num
// var numString = num.toString(); // convert num to a string
// var numWithoutDot = numString.replace(".", ""); // remove the dot from the string

// document.write("Original number: " + num + "<br>"); // display the original number
// document.write("Number without dot: " + numWithoutDot); // display the number without the dot



//          **********        Question no 13

// var  username = prompt("Enter your username:");
// var  isValid = true; // assume the username is valid by default

// for (var  i = 0; i < username.length; i++) {
//   var  charCode = username.charCodeAt(i); // get the ASCII code of the character

//   if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    // isValid = false; // if the character is a special symbol, mark the username as invalid
    // break; // exit the loop early, no need to check the remaining characters
//   }
// }

// if (isValid) {
//   alert("Username is valid!"); // display a message indicating that the username is valid
// } else {
//   alert("Username is not valid! Please enter a valid username."); // prompt the user to enter a valid username
// }



//          **********        Question no 14


// var items = ["cake", "apple pie", "cookie", "chips", "patties"]; // define the array of items
// var  searchTerm = prompt("Enter the item you want to search:").toLowerCase(); // ask the user for the search term, and convert it to lowercase for case-insensitive search
// var  isFound = false; // assume the item is not found by default

// for (let i = 0; i < items.length; i++) {
//   if (items[i].toLowerCase() === searchTerm) {
    // isFound = true; // mark the item as found if the search term matches the current item (case-insensitive)
    // break; // exit the loop early, no need to check the remaining items
//   }
// }




//          **********        Question no 15


// Ask for password input from user
// var password = prompt("Enter a password");

// Check if password meets the requirements
// if (
//   password.length < 6 ||
//   !isNaN(password.charAt(0)) ||
//   !/[a-zA-Z]/.test(password) ||
//   !/\d/.test(password)
// ) {
//   alert("Invalid password! Please enter a valid password");
// } else {
//   alert("Password is valid");
// }

//          **********        Question no 16

// var university = "University of Karachi";
// var array = university.split(" ");
// document.write(array);


//          **********        Question no 17


// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("The last character of your input is: " + lastChar);


//          **********        Question no 18


// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// Convert the string to lowercase to make the search case-insensitive
// str = str.toLowerCase();

// Use a loop to search for the word "the" in the string
// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 3) === "the") {
    // count++;
//   }
// }


