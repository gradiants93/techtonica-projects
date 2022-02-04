let bodyTag = document.querySelector("body");
let button = document.getElementById("submit");
let nameField = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
// function takes two prompt user for two colors then checks if they are valid CSS colors. If not, pops an alert telling what was sent. If works, changes text and background colors.
let nameText = "";
let emailText = "";
let subjectText = "";
let messageText = "";

// newBkgrd.addEventListener("input", e => {
//   const inputValue = e.target.value;
//   }
// );
// newFont.addEventListener
nameField.addEventListener("blur", (e) => {
    nameText = e.target.value;
});
email.addEventListener("blur", (e) => {
    emailText = e.target.value;
});
subject.addEventListener("blur", (e) => {
    subjectText = e.target.value;
});
message.addEventListener("blur", (e) => {
    messageText = e.target.value;
});



button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(nameText, emailText, subjectText, messageText);
  }
);