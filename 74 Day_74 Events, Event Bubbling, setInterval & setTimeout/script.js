// Events:

// There is another way of event listening that we all know onclick method, But this is the traditional method.

// List of all events: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn");

// .addEventListener is used to add a event listener.
button.addEventListener("dblclick", () => {
    // dblclick is executed when left button of mouse is double clicked.
    document.querySelector(".box").innerHTML = "<h1>I am changed by you</h1>";
    alert("I was double clicked");
})

button.addEventListener("mouseenter", () => {
    // mouseenter is executed when mouse curser is entered the area of elements or objects.
    alert("I am entered");
})

button.addEventListener("mouseleave", () => {
    // mouseleave is executed when mouse curser is leaved the area of elements or objects.
    alert("I am leaving");
})

document.addEventListener("contextmenu", () => {
    // contextmenu is executed when right button of mouse is clicked.
    alert("Don't hack us by right click please");
})

// .removeEventListener is used to add a event listener.
document.removeEventListener("contextmenu", () => {
    // contextmenu is executed when right button of mouse is clicked.
    alert("Don't hack us by right click please");
})

document.addEventListener("keydown", (e) => {
    // keydown is used to get keys from keyboard.
    console.log(e, e.key, e.keyCode); // keyCode property is deprecated, So it is not recommended to use it.
})