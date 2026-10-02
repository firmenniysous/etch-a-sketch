let container = document.getElementById("container");
let percents = [100, 50, 33.33, 25, 20, 16.66, 14.28, 12.5, 11.11, 10];
let chosenAmount = Number(prompt("What will be the width of squares?"));

let amountOfSquares = chosenAmount * chosenAmount;
let square;
for (let i = 0; i < amountOfSquares; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseenter", e => {
    e.target.style.backgroundColor = "black";
    });
    for (let i = 0; i < 11; i++) {
    if (chosenAmount === i) {
        square.style.flex = `0 0 ${percents[i - 1]}%`;
        square.style.height = `${percents[i - 1]}%`;
    }
}
};






