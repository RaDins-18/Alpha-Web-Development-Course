console.log(document.querySelector(".container").innerHTML); // .innerHTML gives inner html of an elemenet.
console.log(document.querySelector(".container").innerText); // .innertext gives inner text of an elemenet.
console.log(document.querySelector(".container").outerHTML); // .outerHTML gives element itself and its inner html.
console.log(document.querySelector(".box").innerHTML); // .innerHTML gives inner html of an elemenet.
console.log(document.querySelector(".box").textContent); // .textContent gives text content of an element.

console.log(document.querySelector(".box").tagName); // .tagName gives only element's tag name.
console.log(document.querySelector(".box").nodeName); // .nodeName gives tag name of an element and node also.

console.log(document.querySelector(".container").hidden); // .hidden tells that element is hidden or visible (true or false) respectively.
// document.querySelector(".container").hidden = true; // It hides .container element.
console.log(document.querySelector(".container").hidden); // .hidden tells that element is hidden or visible (true or false) respectively.

console.log(document.querySelector(".container").hasAttribute("style")); // .hasAttribute tells that element has an attribute or not (true or false) respectively.
console.log(document.querySelector(".container").hasAttribute("id")); // .hasAttribute tells that element has an attribute or not (true or false) respectively.

document.querySelector(".container").setAttribute("style", "flex-direction: column;"); // It set or customize an elemet's attribute.

console.log(document.querySelector(".container").attributes); // .attributes give all attributes of an element.

console.log(document.querySelector(".container").dataset); // .dataset tells key data of an elements.


// Inserting:
let div = document.createElement("div");
div.innerHTML = "Hey I am a new <b>Box</b>";
div.setAttribute("class", "new-box");
let cont = document.querySelector(".container");
// cont.prepend(div); // .prepend insert element at start of an element.
cont.append(div); // .append insert element at end of an element.
// cont.before(div); // .before insert element at before the element.
// cont.after(div); // .after insert element at after the element.

cont.insertAdjacentHTML("afterbegin", "<b class='bold'>I am Henry Cavill.</b>"); // .insertAdjacentHTML("afterbegin", "html") insert html in the element at start.
// cont.insertAdjacentHTML("afterend", "<b>I am under the water.</b>"); // .insertAdjacentHTML("afterend", "html") insert html after the element.
// cont.insertAdjacentHTML("beforebegin", "<b>I am under the water.</b>"); // .insertAdjacentHTML("beforebegin", "html") insert html before the element.
// cont.insertAdjacentHTML("beforeend", "<b>I am under the water.</b>"); // .insertAdjacentHTML("beforeend", "html") insert html in the element at end.


// Removing:
document.querySelector(".bold").remove(); // Through .remove we can remove any element.

console.log(document.querySelector(".container").classList); // .classList give list of classes.
console.log(document.querySelector(".container").className); // .className give names of classes.

document.querySelector(".container").classList.add("b-black"); // Through .add we can add a class in an element.
// document.querySelector(".container").classList.remove("b-black"); // Through .add we can add a class in an element.
console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.toggle("blue-bg"); // Through .toggle we can add or remove a class in an element, If class is already present in the element it add the class otherwise it remove the class.
document.querySelector(".container").classList.toggle("blue-bg");