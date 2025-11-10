const inputEl = document.querySelector("#name-input");
const spunEl = document.querySelector("#name-output");

inputEl.addEventListener('input', () => {
   const msg = inputEl.value.trim();
    
    if (msg === "") {
        spunEl.textContent = "Anonymous"
    } else {
        spunEl.textContent = msg;  
    }
  
})