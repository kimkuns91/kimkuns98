const loginBtn = document.querySelector('#login-button');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const greeting = document.querySelector("div#greet");
const toDo = document.querySelector("form#todo-form")
const weather = document.querySelector('div#weather')
const container = document.querySelector("div#container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const logout = document.querySelector('button#logout')


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDo.classList.remove(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);

}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginBtn.classList.add(HIDDEN_CLASSNAME);
    toDo.classList.remove(HIDDEN_CLASSNAME);
    container.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
}

function goLogin(event){
    event.preventDefault();
    loginBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const saved = localStorage.getItem(USERNAME_KEY)

loginBtn.addEventListener("click", goLogin)


if (saved === null){
    // not login
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    // login
    paintGreeting(saved);
}

function logOut(){
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem('todos')
    location.reload();
}

logout.addEventListener("click", logOut)