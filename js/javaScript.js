const buttons = document.querySelectorAll('.btn');
const signUp = document.querySelector('.sign-Up');
const container = document.querySelector('.container');
const form = document.querySelector("#form")
const field = document.querySelectorAll(".field")
const nomeLogin = form.querySelector(".nome-login");
const emailLogin = form.querySelector(".email-login");
const passwordLogin = form.querySelector(".password-login");
const emailConnecting = document.querySelector(".email-connecting");
const passwordConnecting = document.querySelector(".password-connecting");
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const btnIn = document.querySelector(".sign-In");

const active = () => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.classList.toggle('active')
        })
    })
}
active()


nomeLogin.addEventListener("input", (e) => {
    const errorName = document.querySelector(".errorName")
    if (nomeLogin.value === null || nomeLogin.value === "") {
        errorName.style.display = "inherit"
        errorName.textContent = "This field should not be empty"
    } else if (nomeLogin.value.length <= 4 || nomeLogin.value.length >= 12) {
        errorName.style.display = "inherit"
        nomeLogin.className = "invalid"
    } else {
        nomeLogin.className = "valid"
        errorName.textContent = ""
    }
})

emailLogin.addEventListener('input', () => {
    const errorEmail = document.querySelector(".errorEmail")
    if (emailLogin.value === null || emailLogin.value === "") {
        errorEmail.style.display = "inherit"
        errorEmail.textContent = "This field should not be empty"
    } else if (!filter.test(emailLogin.value)) {
        emailLogin.className = "invalid"
        errorEmail.style.display = "flex"
    } else {
        emailLogin.className = "valid"
        errorEmail.textContent = ""
    }
})

passwordLogin.addEventListener('input', () => {
    const errorPassword = document.querySelector(".errorPassword")
    if (passwordLogin.value === null || passwordLogin.value === "") {
        errorPassword.style.display = "inherit"
        errorPassword.textContent = "This field should not be empty"
    } else if (passwordLogin.value.length < 6) {
        errorPassword.style.display = "flex"
        passwordLogin.className = "invalid"
    } else {
        passwordLogin.className = "valid"
        errorPassword.textContent = ""
        signUp.disabled = false;
    }
})

emailConnecting.addEventListener('input', () => {
    const ConnectingError = document.querySelector(".connectingError")
    if (emailConnecting.value === null || emailConnecting.value === "") {
        ConnectingError.style.display = "inherit"
        ConnectingError.textContent = "This field should not be empty"
    } else if (!filter.test(emailConnecting.value)) {
        ConnectingError.style.display = "flex"
        emailConnecting.className = "invalid"
    } else {
        emailConnecting.className = "valid"
        ConnectingError.textContent = ""
    }
})

passwordConnecting.addEventListener('input', () => {
    const ConnectingErrorPassword = document.querySelector(".connectingErrorPassword")
    if (passwordConnecting.value === null || passwordConnecting.value === "") {
        ConnectingErrorPassword.style.display = "inherit"
        ConnectingErrorPassword.textContent = "This field should not be empty"
    } else if (passwordConnecting.value.length < 6) {
        ConnectingErrorPassword.style.display = "flex"
        passwordConnecting.className = "invalid"
    } else {
        passwordConnecting.className = "valid"
        ConnectingErrorPassword.textContent = "";
    }
    btnIn.disabled = false;
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
        userArray.push(user)
        document.forms[0].reset()
        disabled()
        console.log('contacte', {userArray})
    }
    addUser()
})

btnIn.addEventListener("click", () => {
    userArray.filter((user) => {
        if (passwordConnecting.value === user.password && emailConnecting.value === user.email) {
            alert("this account is connected")
            disabled()
        } else {
            alert("this account is not registered")
        }
    })
})

const disabled = () => {
    nomeLogin.className = "none"
    emailLogin.className = "none"
    passwordLogin.className = "none"
    signUp.disabled = true;

    btnIn.disabled = true;
    emailConnecting.className = "none"
    passwordConnecting.className = "none"
}