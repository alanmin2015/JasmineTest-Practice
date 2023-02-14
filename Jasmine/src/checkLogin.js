// if the username input does not match a known username;
//or the password input does not match a known password;
//or a valid username is input with an invalid password;
//or an invalid username is input with a valid password;
//the function will return "Invalid Username or Password."
//if password and username match, return"Welcome back""
//if the username is empty, the function will return "No username entered"
//if the passowrd in an empty string, the function will return "No password entered"
function checkLogin(name, pwd) {
  "use strict";
  const myUsername = "Alanmin1996";
  const myPassword = "7900e800521e34b3c39b6eda11aa9eba";

  if (name === "") {
    var returnMessage = "<p>No username entered.</p>";
  }

  if (pwd === "") {
    var returnMessage = "<p>No password entered.<p>";
  }

  if (name != "" && pwd != "") {
    if (name != myUsername || CryptoJS.MD5(pwd) != myPassword) {
      var returnMessage = "<p>Invalid Username or Password.";
    } else {
      var returnMessage = "<p>Welcome Back!</p>";
    }
  }
  return returnMessage;
}
