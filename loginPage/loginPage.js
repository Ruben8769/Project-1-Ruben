function loginForm(event){
    event.preventDefault()

    const myMail = document.getElementById('email').value
    const myPassword = document.getElementById('password').value

    console.log(myMail)
    console.log(myPassword)
}

document.getElementById('loginNow')
document.addEventListener('submit', loginForm)