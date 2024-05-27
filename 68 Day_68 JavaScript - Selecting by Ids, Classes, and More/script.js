// .getElementByClass method is used when we want to select all elements with the same class.
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[1].style.backgroundColor = "rgb(60, 60, 60)";
boxes[1].style.color = "white";
boxes[2].style.backgroundColor = "rgb(60, 60, 60)";
boxes[2].style.color = "white";
boxes[3].style.backgroundColor = "rgb(60, 60, 60)";
boxes[3].style.color = "white";

// .getElementById method is used when we want to selects only one element.
document.getElementById("cyan").style.color = "cyan";

// .querySelector method selects only first matching element.
document.querySelector(".box").style.backgroundColor = "cyan";

// If we want to change all elements with matching class or id we use .querySelectorAll method.
console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").style.backgroundColor = "cyan"; // It throughs an error, Because it gives array of elements and array don't have any style property.
// So, if we want to select all elements through .querySelectorAll method we use .forEach loop.
document.querySelectorAll(".box").forEach(element => {
    element.style.border = "4px solid gray";
});

// .getElementsByTagName method is used when we want to selects elements by tags.
divs = document.getElementsByTagName("div");
divs[5].style.backgroundColor = "cyan";

// .matches checks class or id in an element.
console.log(divs[5].matches(".box"));
console.log(divs[5].matches("#cyan"));

// .closest checks class or id in elements closest parents or it selves.
console.log(divs[5].closest(".container"));
console.log(divs[5].closest(".box"));
console.log(divs[5].closest("html"));
console.log(divs[5].closest("#cyan"));

// .contains checks element is present in parent element or a element checks itself.
console.log(document.querySelector(".container").contains(divs[0]));
console.log(document.querySelector(".container").contains(divs[5]));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
console.log(document.querySelector(".container").contains(document.querySelector("body")));