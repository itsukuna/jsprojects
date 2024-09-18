let nums = [];
let currentNum = "";

const container = document.querySelector(".root");

const heading = document.createElement("h1")
heading.textContent = "Calculator"
heading.add
container.appendChild(heading)

const calculator = document.createElement("div");
calculator.classList.add("calculator");
container.appendChild(calculator);

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "0";
calculator.appendChild(display);

// number key
function createKey(value) {
    const button = document.createElement("button");
    button.textContent = value;

    button.addEventListener("click", function () {
        currentNum += value;
        display.textContent = currentNum;
    });
    return button;
}

// operator
function operatorKey(operator) {
    const key = document.createElement("button");
    key.textContent = operator;
    key.addEventListener("click", function () {
        if (currentNum !== "") {
            nums.push(currentNum);
            if (operator == "x") {
                nums.push("*");
            } else {
                nums.push(operator);
            }

            currentNum = "";
            display.textContent = operator;
        }
    });
    return key;
}

// clear key
const clear = document.createElement("button");
clear.textContent = "C";
clear.classList.add("clear");
clear.addEventListener("click", function () {
    (display.textContent = "0"), (currentNum = "");
    nums = [];
});
calculator.appendChild(clear);

//first row operators
operators = ["/", "x", "-"];
operators.forEach((operator) => {
    const key = operatorKey(operator);
    calculator.appendChild(key);
});

for (i = 7; i <= 9; i++) {
    const numkey = createKey(i);
    calculator.appendChild(numkey);
}

const addKey = operatorKey("+");
addKey.classList.add("big-v-button");
calculator.appendChild(addKey);

for (i = 4; i <= 6; i++) {
    const numkey = createKey(i);
    calculator.appendChild(numkey);
}

for (i = 1; i <= 3; i++) {
    const numkey = createKey(i);
    calculator.appendChild(numkey);
}

// Equals
const equalKey = document.createElement("button");
equalKey.textContent = "=";
equalKey.addEventListener("click", function () {
    if (currentNum !== "") {
        nums.push(currentNum);
    }
    const expression = nums.join(" ");
    const result = eval(expression); //or handle manually

    display.textContent = result;

    nums = [];
    currentNum = "";
});
equalKey.classList.add("equal");
calculator.appendChild(equalKey);

const zeroKey = createKey(0);
zeroKey.classList.add("big-h-button");
calculator.appendChild(zeroKey);

const dot = createKey(".");
calculator.appendChild(dot);
