
// -----------Responsive Menu-----------------------------------
const togglemenu = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

togglemenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu--show');
});

window.addEventListener('scroll', () => {
    menu.classList.add('menu--show');

});
// -----------End Responsive Menu-----------------------------------


//------------Validation Form----------------------------------------
const _form = document.getElementById('form');
const _name = document.getElementById('name');
const _email = document.getElementById('email');
const _message = document.getElementById('message');
const _button = document.getElementById('button');

const objValidator = {
    _name: false,
    _email: false,
    _message: false
}

_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
});

_name.addEventListener('change', (event)=>{
    removeError(_name);
    if(event.target.value.trim().length > 0){
        objValidator._name = true;
    }else{
        setError(_name, "Email field is required");
        objValidator._name = false;
    }
});

_email.addEventListener('change', (event)=>{
    removeError(_email);
    const emailValue = _email.value.trim();
  

    if(event.target.value.trim().length > 0){
        if(!validateEmail(emailValue)){
            setError(_email, "Provide a valid email address");
            objValidator._email = false;
        }else{
            objValidator._email = true;
        }
        
    }else{
        setError(_email, "Email field is required");
        objValidator._email = false;   
    }
});

_message.addEventListener('change', (event)=>{
    removeError(_message);
    if(event.target.value.trim().length > 0){
        objValidator._message = true;
    }else{
        setError(_message, "Email field is required");
        objValidator._message = false;
    }
});

const removeError = (element) => {
    const formGroup = element.parentElement;
    const errorSpan = formGroup.querySelector('.error-hint');
    errorSpan.innerText = null;
};

const setError = (element, message) => {
    
    const formGroup = element.parentElement;
    const errorSpan = formGroup.querySelector('.error-hint');
    errorSpan.innerText = message;
};


function validateForm(){
    const formValues = Object.values(_form);
    const state = formValues.findIndex(value => value == false);
    if(state == -1){
        _form.submit();
    }else{
        alert("Invalid form")
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };