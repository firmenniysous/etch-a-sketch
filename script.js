let container = document.getElementById("container");
let chosenAmountOfSquares = 16;
for (let i = 0; i < chosenAmountOfSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseenter", e => {
    e.target.style.backgroundColor = "black";
})
}