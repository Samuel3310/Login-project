const login = document.querySelector(".login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const invalid = document.querySelector(".invalid");
  const names = login.username.value;
  const password = login.password.value;

  let getUser = JSON.parse(localStorage.getItem(names));



  if (getUser.name !== names && getUser.password !== password) {
    invalid.textContent = "Error Username and Password";
  } else {
      sessionStorage.setItem("user", JSON.stringify(getUser));
      window.location.href = "./dashboard/index.html";
    
  }
});
