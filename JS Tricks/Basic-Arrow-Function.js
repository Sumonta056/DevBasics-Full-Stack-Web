
const options = (userName, password) => {
  if (userName && password) {
    return "Login Success";
  } else {
    return "Login Failed";
  }
};

console.log(options("John", "12345")); // Output: Login Success
