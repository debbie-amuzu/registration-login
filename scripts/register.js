// Get form element by id
const registerForm = document.querySelector("#register");
// console.log(registerForm);
// Handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // how to collect form data
  const formData = new FormData(registerForm);
  // console.log(
  //   formData.get('username'), 
  //   formData.get('email'), 
  //   formData.get('password')
  // );

  //send data to backend

  //Display success message to the user
const messageH1 = document.querySelector('#message');
messageH1.textContent = 'Account registered successfully';
});

/*this is the same us addEventListener
registerForm.onsubmit = function (event) {
    event.preventDefault();
  console.log(event);
};*/

// Declare variable age
const age = 71;

// define square age function
function squareAge(age) {
  return age ** 2;
}
const squaredAge = squareAge(21);
console.log(squaredAge);
