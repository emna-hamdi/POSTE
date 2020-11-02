const form = document.querySelector("form");
const users = JSON.parse(localStorage.getItem("users")) || [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#inputEmailAddress");
    const password = document.querySelector("#inputPassword");
    const validUser = users.find((user) => user.email === email.value && user.password=== password.value);
 
  console.log(validUser);
    if (!validUser) {
      return alert("wrong email or password");
    }
  else{

    switch (validUser.poste) {
        case 'Admin':
            window.location.href = "forms-layouts.html";
          break;
        case 'recipient':
            window.location.href = "register.html";
          break;
        case 'financial-resource':
        window.location.href = "guichitier.html";
          break;
        default:
          break;
      }
}
    const connectedUser = { id: validUser.id, email: validUser.email, poste:validUser.poste };
    localStorage.setItem("connectedUser", JSON.stringify(connectedUser));
  
  });