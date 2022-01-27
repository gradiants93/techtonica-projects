// checkboxes next to ingredients

//collect list of list elements
let listOfLI = document.getElementsByClassName("ingredients-list")
//create checkbox
let checkBox = document.createElement("input")
checkBox.setAttribute("type", "checkbox");
listOfLI.appendChild(checkBox);

