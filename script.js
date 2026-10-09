let body = document.querySelector("body");
let container = document.getElementById("container");
let borderOfContainer = document.getElementById("border-of-container");
let percents = Array.from({length: 100}, (_, i) => 100 / (i+1));
let chooseAmountBtn = document.getElementById("new-squares-amount-btn");

chooseAmountBtn.addEventListener("click", e => {
    let chosenAmount = Number(prompt("What will be the width of squares? (Choose between 1 and 100)"));
    let amountOfSquares = chosenAmount * chosenAmount;
    if (chosenAmount > 100) {
        let alertMessage = alert("You have to choose between 1 and 100");
        body.removeChild(container);
    } else {
    borderOfContainer.appendChild(container);
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
})








