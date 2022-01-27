// checkboxes next to ingredients



//collect list of list elements
document.getElementsByClassName
let listOfLi = document.getElementsByClassName("ingredient-list")[0].children;
// collect text of element
/*function plugInText(input) {
    let text = document.createTextNode();
    text = input.innerHTML;
    let label = document.createElement("label")
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", `${input}checkbox`);
    label.setAttribute("for", `${input}checkbox`);
    label.innerText(text);
    input.appendChild(checkBox);
    input.appendChild(label);
};*/
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
/*listOfChildren.forEach(element => plugInText(element))
console.log(listOfLi, text)
//create checkbox
let checkBox = document.createElement("input")
checkBox.setAttribute("type", "checkbox");
listOfLi.appendChild(checkBox);
console.log(checkBox)
*/

