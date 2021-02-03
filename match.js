let number1;
let allNumbers1 = [];

let number2;
let allNumbers2 = [];

let counter = 0;
let siblingNumber;


function randomGenerator(max) {
    let number = Math.floor((Math.random() * max) + 1);
    return number
}

function count() {
    counter++;
    let elt= document.getElementById('count');
    elt.innerHTML=`Les valeurs se sont synchronisée(s) après ${counter} itération(s)`;
}

function compare(x, y) {
    return x[0] - y[0];
}

function insertNumber(array) {
    number = randomGenerator(99)
    for (let index = 0; index < array.length; index++) {
        if (array[index][0] == number) {
            array[index][1]++;
            return number;
        }
    }
    array.push([number, 1]);
    return number;
}

function viewResult() {
    let elt = document.getElementById("scriptPlace")
    elt.innerHTML = `
    It take ${counter} time(s)to get both value synchronized</br>
    Here's all value the first number1 have taken <br>
    <p>${allNumbers1}</p></br>
    Here's all value the second number2 have taken <br>
    <p>${allNumbers2}</p></br>
    both number synchronised on ${number1} at the same time
    `
}

function updateGrid(number, color) {

    var elt = document.getElementById(number);

    if (elt.className == "text-2xl bg-blue-200 border-2 border-gray-700" ||
        elt.className == "text-2xl bg-green-200 border-2 border-gray-700" ||
        (elt.className == "text-2xl bg-yellow-200 border-2 border-gray-700"&&(color=="blue"||color=="green"))){

        elt.className = `text-2xl bg-yellow-200 border-2 border-gray-700`;
        return;
    }

    elt.className = `text-2xl bg-${color}-200 border-2 border-gray-700`;

}

//logique
function matchNumber() {
    do {
        number1 = insertNumber(allNumbers1);
        updateGrid(number1, "blue");
        number2 = insertNumber(allNumbers2);
        updateGrid(number2, "green");
        count();

        if (number1 == number2) {
            siblingNumber = number1;
            updateGrid(siblingNumber, "red");
            allNumbers1.sort(compare);
            allNumbers2.sort(compare);

        }
        // while condition has to cover the number1 one and two 
    } while (number2 != number1 || number1 == undefined || number2 == undefined);
}

matchNumber();