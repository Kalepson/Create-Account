const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const form = document.querySelector("#form")
const field = document.querySelectorAll(".field")
const nomeLogin = form.querySelector(".nome-login");
const emailLogin = form.querySelector(".email-login");
const passwordLogin = form.querySelector(".password-login");
const emailConnecting = document.querySelector(".email-connecting");
const passwordConnecting = document.querySelector(".password-connecting");


const active = () => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.classList.toggle('active')
        })
    })
}
active()

nomeLogin.addEventListener('blur' ,() =>{
    const errorName = document.querySelector(".errorName")
    if (nomeLogin.value === null || nomeLogin.value === ""){
        nomeLogin.className ="invalid"
        errorName.textContent ="Name can't be blank"
        errorName.style.color = "red"
    }else if (nomeLogin.value.length <= 4 || nomeLogin.value.length >=12 ) {
        nomeLogin.className ="invalid"
        errorName.textContent = "Zona trebue sa contina min 4 caractere max 12"
        errorName.style.color = "red"
        errorName.style.fontSize= "15px"

    }else {
        nomeLogin.className ="valid"
        errorName.textContent = ""
    }
})

emailLogin.addEventListener('blur',() =>{

    const errorEmail = document.querySelector(".errorEmail")
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailLogin.value === null || emailLogin.value === ""){
        emailLogin.className ="invalid"
        errorEmail.textContent = "Introduceti E-mail"
        errorEmail.style.color = "red"
    }
    else if (!filter.test(emailLogin.value)){
        emailLogin.className ="invalid"
        errorEmail.textContent = "Please provide a valid email address"
        errorEmail.style.color = "red"
        errorEmail.style.fontSize= "15px"
    }else {
        emailLogin.className ="valid"
        errorEmail.textContent = ""
    }
})

passwordLogin.addEventListener('blur',() =>{

    const errorPassword = document.querySelector(".errorPassword")
    if (passwordLogin.value.length < 6 || passwordLogin.value.includes("@")){
        errorPassword.textContent = "Password must be at least 6 characters long and not include @"
        errorPassword.style.color = "red"
        errorPassword.style.fontSize= "13px"
        passwordLogin.className = "invalid"
    }else {
        passwordLogin.className = "valid"
        errorPassword.textContent = ""
    }
})

emailConnecting.addEventListener('blur',() =>{

    const ConnectingError = document.querySelector(".connectingError")
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailConnecting.value === null || emailConnecting.value === ""){
        ConnectingError.textContent = "Please provide a valid email address"
        ConnectingError.style.color = "red"
        ConnectingError.style.fontSize= "13px"
        emailConnecting.className = "invalid"
    }else if (!filter.test(emailConnecting.value)){
        emailConnecting.className ="invalid"
        ConnectingError.textContent = "Please provide a valid email address"
        ConnectingError.style.color = "red"
        ConnectingError.style.fontSize= "15px"
    }
    else {
        emailConnecting.className = "valid"
        ConnectingError.textContent = ""
    }
})

passwordConnecting.addEventListener('blur',() =>{

    const ConnectingErrorPassword = document.querySelector(".connectingErrorPassword")
    if (passwordConnecting.value.length < 6 || passwordConnecting.value.includes("@")){
        ConnectingErrorPassword.textContent = "Password must be at least 6 characters long and not include @"
        ConnectingErrorPassword.style.color = "red"
        ConnectingErrorPassword.style.fontSize= "13px"
        passwordConnecting.className = "invalid"
    }else {
        passwordConnecting.className = "valid"
        ConnectingErrorPassword.textContent = ""
    }
})

const userArray = []
form.addEventListener('submit', (e) => {
    const addUser = () => {
        let user = {
            id: Date.now(),
            nome: nomeLogin.value,
            email: emailLogin.value,
            password: passwordLogin.value,
        }
        e.preventDefault()
        userArray.push(user)
        // document.forms[0].reset()
        console.log('contacte', {userArray})
    }
    addUser()

})



const btnIn = document.querySelector(".sign-In");
btnIn.addEventListener("click", () => {

    userArray.forEach(index => {
        if (emailConnecting.value.includes(index.email)  || passwordConnecting.value.includes(index.password)) {
            alert("this account is connected")
        } else {
            alert("this account is not registered")
        }
    })


})

