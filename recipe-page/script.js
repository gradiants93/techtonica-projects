// no touchie button
let button = document.createElement("button");
button.innerText = "No Touchie";
const bodyNode = document.querySelector("body");
button.onclick = function () {
    bodyNode.style.backgroundColor = "darkred";
    alert(" OW I SAID NO TOUCHIE");
    bodyNode.style.color = "white";
    document.querySelector("h1").style.color = "white";
    let h2s = document.querySelectorAll("h2");
    h2s.forEach(node => node.style.color = "white");
    let ps = document.querySelectorAll("p")
    ps.forEach(nodes => nodes.style.color = "white");
    let labels = document.querySelectorAll("label")
    labels.forEach(nodes => nodes.style.color = "white");
};
let otherSection = document.getElementById("otherrecipes");
otherSection.appendChild(button);
// checkboxes next to ingredients

// collect list of list elements
let ul = document.getElementById("ul-list");
let listOfLi = ul.children;
// collect text of element

for (element in listOfLi) {
    let targetNode = listOfLi[element];
    let text = listOfLi[element].innerHTML;
    let label = document.createElement("label")
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", `${element}checkbox`);
    label.setAttribute("for", `${element}checkbox`);
    label.innerHTML = text;
    console.log(targetNode);
    if (targetNode.childNodes) {
        listOfLi[element].replaceChild(checkBox, targetNode.childNodes[0]);
        listOfLi[element].appendChild(label);
    }
}


