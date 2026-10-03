let container = document.getElementById("container");
let percents = Array.from({length: 100}, (_, i) => 100 / (i+1));
console.log(percents);
let chooseAmountBtn = document.getElementById("new-squares-amount-btn");
chooseAmountBtn.addEventListener("click", e => {
    e.target.remove();
    let chosenAmount = Number(prompt("What will be the width of squares?"));
    let amountOfSquares = chosenAmount * chosenAmount;
    for (let i = 0; i < amountOfSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "black";
        });
        for (let i = 0; i < 101; i++) {
        if (chosenAmount === i) {
            square.style.flex = `0 0 ${percents[i - 1]}%`;
            square.style.height = `${percents[i - 1]}%`;
        }
    }
    };
})








