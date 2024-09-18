const loginForm = document.querySelector('#login');
// console.log(loginForm);
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const messageH1 = document.querySelector('#message');
    messageH1.textContent ='successfully logged in';
}) 


/////// write a full name function

function fullName (firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myName = fullName('Deborah', 'Amuzu');
console.log(myName)
