let form = document.querySelector("#form");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailVal = email.value;
    //check if it's a valid email
    if (!validateEmail(emailVal) || emailVal === "") {
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        form.classList.remove('error');
        form.classList.add('success');
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}