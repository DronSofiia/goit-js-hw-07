const formEl = document.querySelector(".login-form");


formEl.addEventListener('submit', e => {
    e.preventDefault();


    const formData = new FormData(formEl);
    const userData = Object.fromEntries(formData.entries());

    if (userData.email.trim() === "" || userData.password.trim() === "") {
        alert("All form fields must be filled in");
        return
    }

    console.log({
        email: userData.email.trim(),
        password: userData.password.trim(),
    })

    formEl.reset();
})