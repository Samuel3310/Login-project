(function ($) {
  "use strict";

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
})(jQuery);

const log = console.log;

let submit = document.querySelector(".submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = submit.names.value;
  const email = submit.email.value;
  const address = submit.address.value;
  const password = submit.password.value;

  //   const nameErr = document.querySelector('.name_err');
  //   const emailErr = document.querySelector('.email_err');
  //   const addressErr = document.querySelector('.address_err');
  //   const passwordErr = document.querySelector('.password_err');

  //   if(!passwordErr){

  //   passwordErr.textContent = 'Password required';
  // }
  let getUsers = JSON.parse(localStorage.getItem(username));

  if (getUsers) {
    alert("Username already in use");
  } else {
    const users = {
      name: username,
      email: email,
      password: password,
      address: address,
    };

    let setItem = localStorage.setItem(username, JSON.stringify(users));

    alert("succesfully registered");
    window.location.href = "./index.html";
  }
});
