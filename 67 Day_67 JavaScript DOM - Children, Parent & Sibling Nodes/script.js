// Accessing Nodes And Elements In JavaScript Through DOM - Children, Parent & Sibling:

console.log("All elements in Body");
console.log(document.body); // All elements in Body.


// Child Nodes of body:
console.log("Child Nodes of body");
console.log(document.body.childNodes); // All nodes and elements in Body.
console.log(document.body.childNodes[0]); // New line is counted as #text node.
console.log(document.body.childNodes[1]); // div.container element.
console.log(document.body.childNodes[2]); // New line is counted as #text node.
console.log(document.body.childNodes[3]); // script element.


// Child Nodes and Elements of div.container:
console.log("Child nodes and elements of div.container");
console.log(document.body.childNodes[1].childNodes); // All Nodes and elements in div.container.
let cont = document.body.childNodes[1]; // div.container element.
console.log(cont.firstChild); // Containers first child is #text node.
console.log(cont.lastChild); // Containers last child is #text node.

// But if we want to access only elements.
console.log(cont.firstElementChild); // Container's first element child is Box1.
console.log(cont.lastElementChild); // Container's last element child is Box5.

// We can change its css proprties.
cont.firstElementChild.style.color = "white"; // Change first element child's style.
cont.firstElementChild.style.backgroundColor = "black"; // Change last element child's style.


// Element Child of body:
cont = document.body.firstElementChild; // div.container element.
console.log("First element child of body");
console.log(cont); // div.container element.
console.log("Child nodes and elements of div.container");
console.log(cont.childNodes); // All nodes and elements in div.container.
console.log("Child elements of div.container");
console.log(cont.children); // All elements in div.container.


// Parent Element of div.box:
console.log("Parent element of .box element");
console.log(cont.firstElementChild.parentElement); // div.container element.


// Sibling Elements of Box3:
console.log("Sibling Elements");
console.log(cont.children[2].previousElementSibling); // Previous element of Box3 is Box2.
console.log(cont.children[2]); // Box3.
console.log(cont.children[2].nextElementSibling); // Next element of Box3 is Box2.


// Take the Table:
console.log("Table Element");
console.log(document.body.children[1]); // Table element.
console.log(document.body.children[1].rows); // Table element rows.