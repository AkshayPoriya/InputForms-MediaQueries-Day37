var salary = document.querySelector('#salary');
var output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

var text = document.querySelector('#text');
var textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Name is Incorrect";
    }
});

var email = document.querySelector('#email');
var emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-zA-Z0-9]+([.+-]{1}[A-Za-z0-9]+)*[@][a-zA-Z0-9]+([.]{1}([a-zA-Z]{2}|[a-zA-Z]{3,})){1,2}$');
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email-id is Incorrect";
    }
});

var tel = document.querySelector('#tel');
var telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = RegExp('^[1-9][0-9][ ][1-9][0-9]{9}$');
    if (telRegex.test(tel.value)) {
        telError.textContent = "";
    } else {
        telError.textContent = "Mobile Number is Incorrect";
    }
});

var pwd = document.querySelector('#pwd');
var pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let pwdRegex = RegExp('^[A-Za-z0-9@#$%_]{8,20}$');
    let pwdWrong = RegExp('^(?=.*[^A-Za-z0-9@#$%_]).*$');
    if(pwdWrong.test(pwd.value)){
        pwdError.textContent = "Invalid Character Included!"
    }else if (pwdRegex.test(pwd.value)) {
        pwdError.textContent = "";
    } else {
        pwdError.textContent = "Password is not strong-enough";
    }
});