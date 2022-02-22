const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const formRegistration = document.querySelector("#form")
const formConnecting = document.querySelector(".form")
const nameLogin = formRegistration.querySelector(".nome-login");
const emailLogin = formRegistration.querySelector(".email-login");
const passwordLogin = formRegistration.querySelector(".password-login");
const emailConnecting = document.querySelector(".email-connecting");
const passwordConnecting = document.querySelector(".password-connecting");
const btnIn = document.querySelector(".sign-In")
const btnUp = document.querySelector(".sign-Up")
const overlay = document.querySelector(".pop")
const infoPop = document.querySelector(".infoPop")
const close = document.querySelector(".close")
const errorName = document.querySelector(".errorName")
const errorEmail = document.querySelector(".errorEmail")
const errorPassword = document.querySelector(".errorPassword")
const error_Email = document.querySelector(".error-Email")
const error_Password = document.querySelector(".error-Password")
const field = document.querySelectorAll(".connect")
const logConnect = document.querySelectorAll(".logConnect")


let userArray = [];
const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

close.addEventListener("click", () => overlay.style.display = "none")

const active = () => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => container.classList.toggle('active'))
    })
}
active()


const showNameError = (nameValue, errorMessage) => {
    if (nameValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (nameValue.value.length < 4 || nameValue.value.length > 12) {
        errorMessage.textContent = "Minimum 4 characters max 12"
        nameValue.className = "invalid"
    } else {
        nameValue.className = "valid"
        errorMessage.textContent = ""
    }
}

nameLogin.addEventListener("input", () => showNameError(nameLogin, errorName))

const showEmailError = (emailValue, errorMessage) => {
    if (emailValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (!validEmail.test(emailValue.value)) {
        errorMessage.textContent = "Please provide a valid email address"
        emailValue.className = "invalid"
    } else {
        emailValue.className = "valid"
        errorMessage.textContent = ""
    }
}


emailLogin.addEventListener('input', () => showEmailError(emailLogin, errorEmail))

const showPasswordError = (passwordValue, errorMessage) => {
    if (passwordValue.value === null || passwordValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
    } else if (passwordValue.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters"
        passwordValue.className = "invalid"
    } else {
        passwordValue.className = "valid"
        errorMessage.textContent = ""
    }
}

passwordLogin.addEventListener('input', () => showPasswordError(passwordLogin, errorPassword))

const btnUpDisabled = (form, fields, btn) => {
    form.addEventListener("input", () => {
        fields.forEach(item => {
            console.log(item.classList);
            if (item.classList.contains("valid")) {
                btn.removeAttribute("disabled")
                btn.classList.remove("disabled")
            } else {
                btn.setAttribute("disabled", "disabled")
                btn.classList.add("disabled")
            }
        })
    })
}
btnUpDisabled(formRegistration, field ,btnUp)

emailConnecting.addEventListener('input', () => showEmailError(emailConnecting, error_Email))
passwordConnecting.addEventListener('input', () => showPasswordError(passwordConnecting, error_Password))

const addUser = () => {
    const newEmail = userArray.findIndex(user => user.email === emailLogin.value);
    let user = {
        id: Date.now(),
        nome: nameLogin.value,
        email: emailLogin.value,
        password: passwordLogin.value,
    }

      if (newEmail !== -1) {
        alert("Email exista")
    } else {
        userArray.push(user)
        document.forms[0].reset()
        nameLogin.classList.remove("valid")
        emailLogin.classList.remove("valid")
        passwordLogin.classList.remove("valid")
        overlay.style.display = "flex"
        infoPop.textContent = `this account is connected`
        btnUp.setAttribute("disabled", "disabled")
        btnUp.classList.toggle("disabled")
    }
    console.log('contacte', {userArray})
}

formRegistration.addEventListener('submit', () => addUser())
formConnecting.addEventListener("input", () => btnUpDisabled(formConnecting, logConnect, btnIn))
formConnecting.addEventListener("submit", () => {
    if (!userArray.length ){
        alert("this account is not registered")
        return
    }
    userArray.forEach(item => {
        if (passwordConnecting.value.includes(item.password) && emailConnecting.value.includes(item.email)) {
            overlay.style.display = "flex"
            infoPop.textContent = `this account is connected ${item.nome}`
            console.log(`this account is connected ${item.nome}`)
        } else if (passwordConnecting.value === '' || emailConnecting.value === '') {
            alert("This field should not be empty")
        } else {
            alert("this account is not registered")
        }
    })
})



