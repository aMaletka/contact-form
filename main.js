const firstName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const subscribe = document.getElementById("subscribe");
const contactForm = document.getElementById("contactForm");
const answerYes = document.querySelector("#yes");
const answerNo = document.querySelector("#no");
const phone = document.getElementById("phone");
const chooseAnswer = document.querySelector(".chooseAnswer");
const signUp = document.getElementById("signUp");

const users = [];
const emails = [];

const sendForm = () => {
   const newUser = {
       firstName: firstName.value,
       email: email.value,
       message: message.value,
   }
   users.push(newUser)
   firstName.value = "";
   email.value = "";
   message.value = "";
   answerYes.checked = false;
   answerNo.checked = false;
   phone.value = "";
}
const signUpToNewsletter = () => {
    const newSubscriber = {
        emailAddress: subscribe.value
    }
    emails.push(newSubscriber);
    subscribe.value = "";
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
signUp.addEventListener("click", signUpToNewsletter);







