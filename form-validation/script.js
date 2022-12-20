// //recuperer un element a manipuler
// // const myform = document.getElementById('form')
// // const myform = document.getElementsByTagName('form')
// // const myform = ddocument.getElementByClassName('form-control')
// const myform = document.querySelector('h2') //h2: balise .h2: class #h2: id
// // console.log(myform)
// console.log(myform)


// //recuperer un element a manipuler
// const username = document.querySelector('username')//mm chose
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ''){
        setErrorFor(username, 'remplisser la case')
    }else{
        setSuccessFor(username)
    }

    if (emailValue === ''){
        setErrorFor(email, 'remplisser la case')
    }else if (!isEmail(emailValue)){
        setErrorFor(email,'remplisser la case')
    }else{
        setSuccessFor(email)
    }

    if (passwordValue === ''){
        setErrorFor(password,'remplisser la case')
    }else{
        setSuccessFor(password)
    }

    if (password2Value === ''){
        setErrorFor(password2,'remplisser la case')
    }else if (passwordValue !== password2Value){
        setErrorFor(password2,"password not correct")
    }else{
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.classNAme = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.classNAme = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}