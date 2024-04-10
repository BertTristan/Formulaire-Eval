
let myForm = document.getElementById('Form')



myForm.addEventListener('submit', function(verif){
    let lastName = document.getElementById('input_type_lname');
    let Mail = document.getElementById('input_type_email');
    let passWord = document.getElementById('input_type_password');
    let passWord_verif = document.getElementById('input_type_password_verif');

    let myError = document.getElementById('error_name');
    myError.innerHTML = '';
    myError = document.getElementById('error_mail');
    myError.innerHTML = '';
    myError = document.getElementById('error_password');
    myError.innerHTML = '';
    myError = document.getElementById('error_password_verif');
    myError.innerHTML = '';


    if (lastName.value == ''){
        myError = document.getElementById('error_name');
        myError.innerHTML = "Le champs est requis."
        verif.preventDefault();
    }
    if (Mail.value == ''){
        myError = document.getElementById('error_mail');
        myError.innerHTML = "Le champs est requis."
        verif.preventDefault();
    }
    if (passWord.value == ''){
        myError = document.getElementById('error_password');
        myError.innerHTML = "Le champs est requis."
        verif.preventDefault();
    }
    if (passWord_verif.value == ''){
        myError = document.getElementById('error_password_verif');
        myError.innerHTML = "Le champs est requis."
        verif.preventDefault();
    } else if (passWord_verif.value != passWord.value){
        myError = document.getElementById('error_password_verif');
        myError.innerHTML = "Les deux mots de passe ne correspondent pas"
        verif.preventDefault();
    }
})


function delete_error(){
    let myError = document.getElementById('error_name');
    myError.innerHTML = '';
    myError = document.getElementById('error_mail');
    myError.innerHTML = '';
    myError = document.getElementById('error_password');
    myError.innerHTML = '';
    myError = document.getElementById('error_password_verif');
    myError.innerHTML = '';
}

function showPassword(){
    let ID = document.getElementById('input_type_password');
    ID.setAttribute('type','text');
    }
function dontshowPassword(){
    let ID = document.getElementById('input_type_password');
    ID.setAttribute('type','password');
}

function showPasswordVerif(){
    let ID = document.getElementById('input_type_password_verif');
    ID.setAttribute('type','text');
    }
function dontshowPasswordVerif(){
    let ID = document.getElementById('input_type_password_verif');
    ID.setAttribute('type','password');
}