let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Fill this field.");
    engine(email, 1, "Fill this field.");
    engine(password, 2, "Fill this field.");
});

//prevents the input text user wrote in the input fields stays if the user accidentally leaves the page - autosave
form.value = localStorage.getItem('form');
    form.oninput = () => {
    localStorage.setItem('form', form.value)
};

let engine = (id, serial, message) => {
    if(id.value.trim() === '') {
      errorMsg[serial].innerHTML = message;
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }

};


/*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(username.value === '') {
    errorMsg[0].innerHTML = "Fill this field.";
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  } else {
    errorMsg[0].innerHTML = "";
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
  }

});
*/