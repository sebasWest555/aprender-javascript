let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

let getUser = () => {
    let myuser = localStorage.getItem("user");
    if (myuser) {
        let identity = JSON.parse(myuser);

        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide");
        asideData.classList.remove("aside__data--hide");
    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //recoger los valores de formulario
    let name = inputName.value;
    let email = inputEmail.value;
    let Password = inputPassword.value;

    //comprobar que todo esta relleno
    let user = {};

    if (name && email && Password) {


        //guardar los datos en un objeto
        user = { name, email, Password };

        //guardar en el localstorage
        localStorage.setItem("user", JSON.stringify(user));

        //vaciar el formulario
        loginForm.reset();

        //mostrar el usuario
        getUser();

    }
})

//mostrar el usuario
getUser();

//logout
btnLogout.addEventListener("click", () => {

    localStorage.clear();
    loginForm.classList.remove("aside__login--hide");
    asideData.classList.add("aside__data--hide");

})