function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    const pwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (name === '' || email === '' || password === '' || message === '') {
        alert('Please fill out all fields');
    } else if (!pwd.test(password)) {
        alert('Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number.');
    } else {
        alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nMessage: ${message}}`);
        document.getElementById('contactForm').reset();
    }
// Get the value of the input field with id="numb"
let x = document.getElementById("numb").value;
// If x is Not a Number or less than one or greater than 10
let text;
if (isNaN(x) || x < 1 || x > 10) {
  text = "Input not valid";
} else {
  text = "Input OK";
}

}

function clearForm() {
    document.getElementById('contactForm').reset();
}
