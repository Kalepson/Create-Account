const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const form = document.querySelector("#form")
const nomeLogin = form.querySelector(".nome-login");
const emailLogin = form.querySelector(".email-login");
const passwordLogin = form.querySelector(".password-login");
const emailConnecting = document.querySelector(".email-connecting");
const passwordConnecting = document.querySelector(".password-connecting");
const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const btnIn = document.querySelector(".sign-In")

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
    const errorName = document.querySelector(".errorName")
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


emailLogin.addEventListener('input', () => {
    const errorEmail = document.querySelector(".errorEmail")
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


passwordLogin.addEventListener('input', () => {
    const errorPassword = document.querySelector(".errorPassword")
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

emailConnecting.addEventListener('input', () => {
    const errorEmail = document.querySelector(".error-Email")
    if (emailConnecting.value === null || emailConnecting.value === "") {
        errorEmail.textContent = "This field should not be empty"
    } else if (!validEmail.test(emailConnecting.value)) {
        errorEmail.textContent = "Please provide a valid email address"
        emailConnecting.className = "invalid"
    } else {
        emailConnecting.className = "valid"
        errorEmail.textContent = ""
    }
})

passwordConnecting.addEventListener('input', () => {
    const errorPassword = document.querySelector(".error-Password")
    if (passwordConnecting.value === "") {
        errorPassword.textContent = "This field should not be empty"
    } else if (passwordConnecting.value.length < 6) {
        errorPassword.textContent = "Password must be at least 6 characters"
        passwordConnecting.className = "invalid"
    } else {
        passwordConnecting.className = "valid"
        errorPassword.textContent = "";
    }
})


let userArray = []
form.addEventListener('submit', (e) => {
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
        }
        console.log('contacte', {userArray})
    }
    addUser()
})

btnIn.addEventListener("click", () => {
    userArray.filter((user) => {
        if (passwordConnecting.value === user.password && emailConnecting.value === user.email) {
            alert("this account is connected")
        } else if (passwordConnecting.value === '' || emailConnecting.value === '') {
            alert("This field should not be empty")
        } else {
            alert("this account is not registered")
        }
    })
})

