const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');

const active = () => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.classList.toggle('active')
        })
    })
}
active()


const userArray = []
const form = document.querySelector("#form")
const nomeLogin = form.querySelector(".nome-login");
const emailLogin = form.querySelector(".email-login");
const passwordLogin = form.querySelector(".password-login");

const addUser = (e) => {
    e.preventDefault()
    let user = {
        id: Date.now(),
        nome: form.querySelector(".nome-login").value,
        email: form.querySelector(".email-login").value,
        password: form.querySelector(".password-login").value,
    }
    userArray.push(user)
    // document.forms[0].reset()
    console.log('contacte', {userArray})


}


form.addEventListener('submit', (e) => {
    addUser(e)
    validateInput()
})

const validateInput = () => {
    const usernameValue = nomeLogin.value.trim()
    const emailValue = emailLogin.value.trim()
    const passwordValue = passwordLogin.value.trim()


    if (usernameValue === '' || usernameValue.length <= 6 || usernameValue.length >= 12) {
        nomeLogin.classList.toggle("invalid")
    } else {
        nomeLogin.className = "valid"
    }


    function validateEmail(emailValue) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailValue).toLowerCase());
    }

    if (validateEmail(emailValue)) {
        emailLogin.className = "valid"

    } else {
        emailLogin.classList.toggle("invalid")
    }


    if (passwordValue === '' || passwordValue.length <= 6 || passwordValue.length >= 12) {
        passwordLogin.classList.toggle("invalid")
    } else {
        passwordLogin.className = "valid"
    }
}


const btnIn = document.querySelector(".sign-In");
btnIn.addEventListener("click", () => {
    let email = document.querySelector(".email-register").value;
    let password = document.querySelector(".password-register").value;

    userArray.forEach(index => {
        if (email === index.email || password === index.password) {
            alert("this account is connected")
        } else {
            alert("this account is not registered")
        }
    })


})

