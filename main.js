const remember = document.querySelector(".remember");
const forget = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const greeting = document.querySelector(".personal-greeting");

form.addEventListener('submit', function(e) {
  e.preventDefault();
});

submitBtn.addEventListener('click', function(){
  localStorage.setItem('name', getName.value);

  nameDisplayCheck();
});

forgetBtn.addEventListener('click', function() {
  localStorage.removeItem('name', getName.value);

  nameDisplayCheck();
});

function nameDisplayCheck() {
  if(localStorage.getItem('name')) {
    let name = localStorage.getItem('name');
    h1.textContent = `Welcome ${name}`;
    greeting.textContent = `Welcome to our website, ${name} ♥`;

    forget.style.display = "block";
    remember.style.display = "none";
  } else {
    h1.textContent = `Welcome to our website`;
    greeting.textContent = `Welcome, we hope you have a beautiful day ♥`;

    forget.style.display = "none";
    remember.style.display = "block";
  }
};

document.body.onload = nameDisplayCheck;



