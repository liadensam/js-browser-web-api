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
  /*get the users input of the name - the value into the local storage, if you try it yourself, you input the name and check dev tools the local storage. There you will see the value you wrote.*/
  localStorage.setItem('name', getName.value);

  //calling function which makes sure that when you enter your name or whatever value you decide to input, it will display in the main title of the page and the subtitle, and will greet you with that name
  nameDisplayCheck();
});

forgetBtn.addEventListener('click', function() {
  /*after you entered your name, the button forget will appear, so you can delete your name or whatever you input from the local storage, when you do it, check yourself the local storage in dev tools and you will see it is not there*/
  localStorage.removeItem('name', getName.value);

  //when you push the forget button, the name will be removed from the local storage and the page will no longer display your name in main title and subtitle
  nameDisplayCheck();
});



function nameDisplayCheck() {
  //this part makes sure than when you enter your name, it will appear on the main title of the page and subtitle too
  if(localStorage.getItem('name')) {
    let name = localStorage.getItem('name');
    h1.textContent = `Welcome ${name}`;
    greeting.textContent = `Welcome to our website, ${name} ♥`;
    
    //whenever you enter your name, it will display the forget button after
    forget.style.display = "block";
    remember.style.display = "none";
  } else {
    //else if there is no input, it stays this, or after you remove your name, when you push the forget button
    h1.textContent = `Welcome to our website`;
    greeting.textContent = `Welcome, we hope you have a beautiful day ♥`;

    forget.style.display = "none";
    remember.style.display = "block";
  }
};


//function toggleGif

function toggleGif() {
  let gif = document.querySelector(".gif");
  let btnGif = document.querySelector(".btnGif");
  let textGif = document.querySelector(".hide p")

  //if the gif is displayed you do not want it to be displayed so you click on the button to hide it
  if (gif.style.display === "none") {
    gif.style.display = "block";
    btnGif.innerHTML = "here";
    textGif.innerHTML = "If you get irritated by the gif click"

  //else if you would like to see it again, you press the button show again
  } else {
    gif.style.display = "none";
    btnGif.innerHTML = "show again";
    textGif.innerHTML = "If you would like to see the gif again, just press"
  }
}

document.body.onload = nameDisplayCheck;



