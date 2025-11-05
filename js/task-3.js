const inputEl = document.querySelector("#name-input");
const spunEl = document.querySelector("#name-output");

inputEl.addEventListener('input', () => {
   const msg = inputEl.value;
    
    if (msg === "") {
        spunEl.textContent = "Anonymous"
    } else {
        spunEl.textContent = msg;  
    }
  
})