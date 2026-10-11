let body = document.querySelector("body");
let container = document.getElementById("container");
let borderOfContainer = document.getElementById("border-of-container");
let percents = Array.from({length: 100}, (_, i) => 100 / (i+1));
let chooseAmountBtn = document.getElementById("new-squares-amount-btn");

chooseAmountBtn.addEventListener("click", e => {
    let chosenAmount = Number(prompt("What will be the width of squares? (Choose between 1 and 100)"));
    let amountOfSquares = chosenAmount * chosenAmount;
    if (chosenAmount > 100 || chosenAmount < 1) {
        let alertMessage = alert("You have to choose between 1 and 100");
    } else {
        container.replaceChildren();
    for (let i = 0; i < amountOfSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        let transparency = 0.1;
        square.addEventListener("mouseenter", e => {
            let a = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let c = Math.floor(Math.random() * 256);
            transparency = transparency + 0.1;
            e.target.style.backgroundColor = `rgba(${a}, ${b}, ${c}, ${transparency})`;
            e.target.style.borderColor = `rgba(${a}, ${b}, ${c}, ${transparency})`
        });
        for (let i = 0; i < 101; i++) {
        if (chosenAmount === i) {
            square.style.flex = `0 0 ${percents[i - 1]}%`;
            square.style.height = `${percents[i - 1]}%`;
        }
    }
    }
    };
    body.appendChild(e.target);
    e.target.style.width = "209px";
    e.target.style.height = "36px";
    e.target.style.fontSize = "14px";
    e.target.textContent = "Choose another amount";
    e.target.style.margin = "8px";
    e.target.style.borderRadius = "3px";
})