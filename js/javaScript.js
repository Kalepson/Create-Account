const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const formRegistration = document.querySelector("#form")
const formConnecting = document.querySelector(".form")
const nomeLogin = formRegistration.querySelector(".nome-login");
const emailLogin = formRegistration.querySelector(".email-login");
const passwordLogin = formRegistration.querySelector(".password-login");
const emailConnecting = document.querySelector(".email-connecting");
const passwordConnecting = document.querySelector(".password-connecting");
const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const btnIn = document.querySelector(".sign-In")
const btnUp = document.querySelector(".sign-Up")


const active = () => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.classList.toggle('active')
        })
    })
}
active()


const errorName = document.querySelector(".errorName")
nomeLogin.addEventListener("input", (e) => {
    if (nomeLogin.value === "") {
        errorName.textContent = "This field should not be empty"
    } else if (nomeLogin.value.length < 4 || nomeLogin.value.length > 12) {
        errorName.textContent = "Minimum 4 characters max 12"
        nomeLogin.className = "invalid"
    } else {
        nomeLogin.className = "valid"
        errorName.textContent = ""
    }
})


const errorEmail = document.querySelector(".errorEmail")
emailLogin.addEventListener('input', () => {
    if (emailLogin.value === "") {
        errorEmail.textContent = "This field should not be empty"
    } else if (!validEmail.test(emailLogin.value)) {
        errorEmail.textContent = "Please provide a valid email address"
        emailLogin.className = "invalid"
    } else {
        emailLogin.className = "valid"
        errorEmail.textContent = ""
    }
})


const errorPassword = document.querySelector(".errorPassword")
passwordLogin.addEventListener('input', () => {
    if (passwordLogin.value === null || passwordLogin.value === "") {
        errorPassword.textContent = "This field should not be empty"
    } else if (passwordLogin.value.length < 6) {
        errorPassword.textContent = "Password must be at least 6 characters"
        passwordLogin.className = "invalid"
    } else {
        passwordLogin.className = "valid"
        errorPassword.textContent = ""
    }
})


const btnUpDisabled = () => {
    btnUp.classList.toggle("disabled")
  formRegistration.addEventListener("input", () => {
        if (nomeLogin.value === "") {
            btnUp.setAttribute("disabled", "disabled")
        } else if (nomeLogin.value.length < 4 || nomeLogin.value.length > 12) {
            btnUp.setAttribute("disabled", "disabled")
        } else if (emailLogin.value === "") {
            btnUp.setAttribute("disabled", "disabled")
        } else if (!validEmail.test(emailLogin.value)) {
            btnUp.setAttribute("disabled", "disabled")
        } else if (passwordLogin.value === "") {
            btnUp.setAttribute("disabled", "disabled")
        } else if (passwordLogin.value.length < 6) {
            btnUp.setAttribute("disabled", "disabled")
        } else {
            btnUp.removeAttribute("disabled")
            btnUp.classList.remove("disabled")
        }
    })
}
btnUpDisabled()


const error_Email = document.querySelector(".error-Email")
emailConnecting.addEventListener('input', () => {
    // const errorEmail = document.querySelector(".error-Email")
    if (emailConnecting.value === null || emailConnecting.value === "") {
        error_Email.textContent = "This field should not be empty"
    } else if (!validEmail.test(emailConnecting.value)) {
        error_Email.textContent = "Please provide a valid email address"
        emailConnecting.className = "invalid"
    } else {
        emailConnecting.className = "valid"
        error_Email.textContent = ""
    }
})


const error_Password = document.querySelector(".error-Password")
passwordConnecting.addEventListener('input', () => {
    if (passwordConnecting.value === "") {
        error_Password.textContent = "This field should not be empty"
    } else if (passwordConnecting.value.length < 6) {
        error_Password.textContent = "Password must be at least 6 characters"
        passwordConnecting.className = "invalid"
    } else {
        passwordConnecting.className = "valid"
        error_Password.textContent = "";
    }
})


let userArray = []
formRegistration.addEventListener('submit', (e) => {
    const addUser = () => {
        let user = {
            id: Date.now(),
            nome: nomeLogin.value,
            email: emailLogin.value,
            password: passwordLogin.value,
        }
        if (emailLogin.value === '' || nomeLogin.value === '' || passwordLogin.value === '') {
            alert("The fields must not be empty")
        } else if (nomeLogin.value.length < 4 || nomeLogin.value.length > 12 || !validEmail.test(emailLogin.value) || passwordLogin.value.length < 6) {
            alert("Fields must be completed correctly")
        } else {
            userArray.push(user)
            document.forms[0].reset()
            nomeLogin.classList.remove("valid")
            emailLogin.classList.remove("valid")
            passwordLogin.classList.remove("valid")
            alert("you have successfully registered")
            btnUp.setAttribute("disabled", "disabled")
            btnUp.classList.toggle("disabled")
        }
        console.log('contacte', {userArray})
    }
    addUser()
})


btnIn.classList.toggle("disabled")
formConnecting.addEventListener("input", () => {
    if (emailConnecting.value === "" && !validEmail.test(emailConnecting.value)) {
        btnIn.setAttribute("disabled", "disabled")
    } else if (passwordConnecting.value === "" && passwordConnecting.value.length < 6) {
        btnIn.setAttribute("disabled", "disabled")
    } else {
        btnIn.removeAttribute("disabled")
        btnIn.classList.remove("disabled")
    }
})


formConnecting.addEventListener("submit", () => {
    userArray.filter((user) => {
        if (passwordConnecting.value === user.password && emailConnecting.value === user.email) {
            alert("this account is connected")
            btnIn.setAttribute("disabled", "disabled")
            btnIn.classList.toggle("disabled")
        } else if (passwordConnecting.value === '' || emailConnecting.value === '') {
            alert("This field should not be empty")
        } else {
            alert("this account is not registered")
        }
    })
})

