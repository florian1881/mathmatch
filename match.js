let number1;
let allNumbers1 = [];

let number2;
let allNumbers2 = [];

let counter = 0;
let siblingNumber;

///////////////////////////////////array sort modification////////////////////////////////////////

function compare(x, y) {
    return x[0] - y[0];
}

/////////////////////////////////////////////grid/////////////////////////////////////////////////

function initialiseGrid() {
    for (let index = 0; index < 10; index++) {
        for (let index2 = 0; index2 < 10; index2++) {
            var node = document.createElement("div");
            var textnode;
            if (index === 0) {
                index2 === 0 ? textnode = document.createTextNode(``) : textnode = document.createTextNode(`${index2}`);
            } else {
                var textnode = document.createTextNode(`${index}${index2}`);
            }
            node.className = "text-2xl bg-gray-200 border-2 border-gray-700";

            if (index === 0) {
                node.id = index2;
            } else {
                node.id = `${index}${index2}`;
            }



            node.appendChild(textnode);
            document.getElementById("table").appendChild(node);
        }

    }
    var node = document.createElement("div");
    var textnode = document.createTextNode(`</div>`);
    node.appendChild(textnode);
}

function updateGrid(number, color) {

    var elt = document.getElementById(number);
    if (elt.className == "text-2xl bg-blue-200 border-2 border-gray-700" ||
        elt.className == "text-2xl bg-green-200 border-2 border-gray-700" ||
        (elt.className == "text-2xl bg-yellow-200 border-2 border-gray-700" && (color == "blue" || color == "green"))) {

        elt.className = `text-2xl bg-yellow-200 border-2 border-gray-700`;
        return;
    }
    elt.className = `text-2xl bg-${color}-200 border-2 border-gray-700`;
    return;
}

function resetGrid() {
    for (let index = 0; index < 100; index++) {
        let element = document.getElementById(index);
        element.className = 'text-2xl bg-gray-200 border-2 border-gray-700';
    }
}
//////////////////////////////////////////end grid////////////////////////////////////////////////


////////////////////////////////////////reset value///////////////////////////////////////////////
function resetValues() {
    number1 = undefined;
    allNumbers1 = [];

    number2 = undefined;
    allNumbers2 = [];

    counter = 0;
    resetGrid();
}

function randomGenerator(max) {

    let number = Math.floor((Math.random() * max) + 1);
    return number
}

function count() {

    counter++;
    let elt = document.getElementById('count');
    elt.innerHTML = `Les valeurs se sont synchronisées après ${counter} itération(s)`;

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

/////////////////////////////////////////main function/////////////////////////////////////////////


function matchNumber() {

    resetValues();

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
    }

    // while condition has to cover the number1 one and two 
    while (number2 != number1 || number1 == undefined || number2 == undefined);
}

/////////////////////////////////////////init/////////////////////////////////////////////
initialiseGrid();

/////////////////////////////////////event listener/////////////////////////////////////////////
let btnRoll = document.getElementById("btn-roll");
btnRoll.addEventListener("click", matchNumber);

// let i=0;

// function sayHello() {
//     console.log('hello');
//     i++
// }

// do{
//     setTimeout(() => {sayHello()}, 100); 
// }
// while(i!=10)