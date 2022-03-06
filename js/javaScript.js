const buttons = document.querySelectorAll('.btn');
const signIn = document.querySelector(".sign-In")
const signUp = document.querySelector(".sign-Up")
const container = document.querySelector('.container');
const formCreateAccount = document.querySelector("#form")
const formSignIn = document.querySelector(".form")
const nameCreateAccount = formCreateAccount.querySelector(".nome-login");
const emailCreateAccount = formCreateAccount.querySelector(".email-login");
const passwordCreateAccount = formCreateAccount.querySelector(".password-login");
const errorNameCreateAccount = document.querySelector(".errorName")
const errorEmailCreateAccount = document.querySelector(".errorEmail")
const errorPasswordCreateAccount = document.querySelector(".errorPassword")
const emailSignIn = document.querySelector(".email-connecting");
const passwordSignIn = document.querySelector(".password-connecting");
const errorEmailSignIn = document.querySelector(".error-Email")
const errorPasswordSignIn = document.querySelector(".error-Password")

const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let users = [];

buttons.forEach((btn) => btn.addEventListener('click', () => container.classList.toggle('active')))

const showNameError = (nameValue, errorMessage, minLength, maxLength) => {
    if (nameValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (nameValue.value.length < minLength || nameValue.value.length > maxLength) {
        errorMessage.textContent = `Minimum ${minLength} characters max ${maxLength}`;
        nameValue.className = "invalid"
    } else {
        nameValue.className = "valid"
        errorMessage.textContent = ""
    }
}

const showEmailError = (emailValue, errorMessage) => {
    if (emailValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (!regexEmail.test(emailValue.value)) {
        errorMessage.textContent = "Please provide a valid email address"
        emailValue.className = "invalid"
    } else {
        emailValue.className = "valid"
        errorMessage.textContent = ""
    }
}

const showPasswordError = (passwordValue, errorMessage, minLength, maxLength) => {
    if (passwordValue.value === null || passwordValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (passwordValue.value.length < minLength || passwordValue.value.length > maxLength) {
        errorMessage.textContent = `Password must be minimum ${minLength} characters maximum ${maxLength}`
        passwordValue.className = "invalid"
    } else {
        passwordValue.className = "valid"
        errorMessage.textContent = ""
    }
}

const btnDisabledSignUp = () => {
    formCreateAccount.addEventListener("input", () => {
            if (emailCreateAccount.className === "valid" && passwordCreateAccount.className === "valid" && nameCreateAccount.className === "valid") {
                signUp.disabled = false
                signUp.classList.remove("disabled")
            } else {
                signUp.disabled = true
                signUp.classList.add("disabled")
            }

    })
}

const btnDisabledSignIn = () => {
    formSignIn.addEventListener("input", () => {
            if (emailSignIn.className === "valid" && passwordSignIn.className === "valid") {
                signIn.disabled = false
                signIn.classList.remove("disabled")
            } else {
                signIn.disabled = true
                signIn.classList.add("disabled")
            }
    })
}

const clearForm = (form, btn, email, password, name = null) => {
    form.reset()
    if (name) {
        name.classList.remove("valid")
    }
    email.classList.remove("valid")
    password.classList.remove("valid")
    btn.disabled = true;
    btn.classList.add("disabled")
}

const createUser = () => {
    const newEmail = users.findIndex(user => user.email === emailCreateAccount.value);
    let newUser = {
        id: Date.now(),
        nome: nameCreateAccount.value,
        email: emailCreateAccount.value,
        password: passwordCreateAccount.value,
    }
    if (newEmail !== -1) {
        alert("Email exista")
    } else {
        users.push(newUser)
        alert('CREATED!');
        clearForm(formCreateAccount, signUp, emailCreateAccount, passwordCreateAccount, nameCreateAccount)
    }
}

nameCreateAccount.addEventListener("input", () => showNameError(nameCreateAccount, errorNameCreateAccount, 3, 12))
emailCreateAccount.addEventListener('input', () => showEmailError(emailCreateAccount, errorEmailCreateAccount))
passwordCreateAccount.addEventListener('input', () => showPasswordError(passwordCreateAccount, errorPasswordCreateAccount, 8, 14))
formCreateAccount.addEventListener('submit', () => createUser())
emailSignIn.addEventListener('input', () => showEmailError(emailSignIn, errorEmailSignIn))
passwordSignIn.addEventListener('input', () => showPasswordError(passwordSignIn, errorPasswordSignIn, 8, 14))
btnDisabledSignUp()
btnDisabledSignIn();

formSignIn.addEventListener("submit", () => {
    if (!users.length) {
        alert("this account is not registered")
    }
    users.forEach(item => {
        if (passwordSignIn.value.includes(item.password) && emailSignIn.value.includes(item.email)) {
            alert(`this account is connected Name : ${item.nome}`)
            clearForm(formSignIn, signIn, emailSignIn, passwordSignIn)
        } else {
            alert("this account is not registered")
        }
    })
})


