const firstName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const contactForm = document.getElementById("contactForm");
const answerYes = document.querySelector("#yes");
const phone = document.getElementById("phone");
const chooseAnswer = document.querySelector(".chooseAnswer");


const users = [];

const sendForm = () => {
   const newUser = {
       firstName: firstName.value,
       email: email.value,
       message: message.value,
   }
   users.push(newUser)
   
}



const showField = () => {
    if(answerYes.checked) {
        phone.style.display = "block";
    }else {
        phone.style.display = "none";
    }
}





contactForm.addEventListener("submit", e => {
    e.preventDefault();
    sendForm()
})

chooseAnswer.addEventListener("change", showField);






