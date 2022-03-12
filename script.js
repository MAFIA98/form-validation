const form = document.getElementById('form');
const password1E = document.getElementById('password1');
const password2E = document.getElementById('password2');
const messageContainer =document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;
function FormValidate(){
    //using constraint API
    isValid = form.checkValidity();
    //style error full message
    if(!isValid){
        message.textContent = 'please fill out all field !';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    //check if password match
    if(password1E.value === password2E.value){
       passwordMatch = true;
       password1E.style.borderColor = 'green';
       password2E.style.borderCcolor = 'green';
    }else{
        passwordMatch = false;
        message.textContent = 'make sure your password match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1E.style.borderColor = 'red';
        password2E.style.borderCcolor = 'red';
        return;
    }
    if(isValid && passwordMatch){
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
    }
}
function storeFormData() {
    const user = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
      password: form.password.value,
    };
    // Do something with user data
    console.log(user);
  }
  
function proccessFormData(event) {
    event.preventDefault();
    FormValidate();

    if(isValid && passwordMatch){
        storeFormData();
    }

}
form.addEventListener('submit',proccessFormData);