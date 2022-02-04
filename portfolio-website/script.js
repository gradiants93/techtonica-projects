let button = document.getElementById("submit");
let nameField = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let nameText = "";
let emailText = "";
let subjectText = "";
let messageText = "";

nameField.addEventListener("input", (e) => {
    nameText = e.target.value;
});
email.addEventListener("input", (e) => {
    emailText = e.target.value;
});
subject.addEventListener("input", (e) => {
    subjectText = e.target.value;
});
message.addEventListener("input", (e) => {
    messageText = e.target.value;
});



button.addEventListener("click", (e) => {
    // e.preventDefault();
    console.log(nameText, emailText, subjectText, messageText);
    return false;
  }
);