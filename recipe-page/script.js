// checkboxes next to ingredients

//collect list of list elements
document.getElementsByClassName
let listOfLi = document.getElementsByClassName("ingredient-list")[0].children;
// collect text of element

for (element in listOfLi) {
    let text = listOfLi[element].innerHTML;
    let label = document.createElement("label")
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", `${element}checkbox`);
    label.setAttribute("for", `${element}checkbox`);
    label.innerHTML = text;
    listOfLi[element].replaceChild(checkBox, listOfLi[element].childNodes[0])
    listOfLi[element].appendChild(label);
    
}


