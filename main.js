/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the remove value button, remove the number from the list.
    document.querySelector('#remove-value')
        .addEventListener('click', removeValueFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the subtract button, subtract the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
    // When the user clicks the exponentiate button, exponentiate each item by the value.
    document.querySelector('#exponentiate')
        .addEventListener('click', exponentiateAll);

    document.querySelectorAll('.calc-button').forEach((button) => {
        button.addEventListener('click', calculatorButton);
    });
}

/*
# ========================================================
# = List Management
# ========================================================
*/

function calculatorButton(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    let currentInput = document.querySelector('#list-number').value;

    let id = event.target.id;

    switch (id) {
        case 'calc-1':
            document.querySelector('#list-number').value += '1';
            break;
        case 'calc-2':
            document.querySelector('#list-number').value += '2';
            break;
        case 'calc-3':
            document.querySelector('#list-number').value += '3';
            break;
        case 'calc-4':
            document.querySelector('#list-number').value += '4';
            break;
        case 'calc-5':
            document.querySelector('#list-number').value += '5';
            break;
        case 'calc-6':
            document.querySelector('#list-number').value += '6';
            break;
        case 'calc-7':
            document.querySelector('#list-number').value += '7';
            break;
        case 'calc-8':
            document.querySelector('#list-number').value += '8';
            break;
        case 'calc-9':
            document.querySelector('#list-number').value += '9';
            break;
        case 'calc-0':
            document.querySelector('#list-number').value += '0';
            break;
        case 'calc-dec':
            document.querySelector('#list-number').value += '.';
            break;
        case 'calc-neg':
            if (currentInput !== ''){
                document.querySelector('#list-number').value = -parseFloat(document.querySelector('#list-number').value);
            }
            break;
    }
}

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    let number = document.querySelector('#list-number').value;

    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.

    let numb = parseFloat(number);

    numbers.push(numb);

    // Update our html.
    addToUL(numb);
    document.querySelector('#list-number').value='';
}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let index = document.querySelector('#list-number').value;

    // Remove the number at that index from the list.

    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    numbers.splice(index,1);

    // Update our html.
    updateUL();
    document.querySelector('#list-number').value='';

}

function removeValueFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let valueToRemove = parseFloat(document.querySelector('#list-number').value);

    // Remove the number from the list.

    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */
    
    let index = -1;
    
    for (let i = 0; i < numbers.length; i++){
        if (valueToRemove === numbers[i]){
            index = i;
        }
    }
    
    if (index !== -1){
        let firstHalf = numbers.slice(0, index);
        let secondHalf = numbers.slice(index+1, numbers.length);
        numbers = firstHalf.concat(secondHalf);
    }

    // Update our html.
    updateUL();
    document.querySelector('#list-number').value='';

}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    numbers = [];

    // Update our html.
    clearUL();
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToAdd = document.querySelector('#numberForMath').value;

    // Add value to everything on the list.
    // for (let i = 0; i < numbers.length; i++){
    //     numbers[i] += numberToAdd;
    // }
    if (numberToAdd !== ''){
        mathLoop(parseFloat(numberToAdd), 'add');
    }

    // Update our html.
    updateUL();
    document.querySelector('#numberForMath').value='';
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToSubtract = document.querySelector('#numberForMath').value;
    
    // subtract value to everything on the list.
    // for (let i = 0; i < numbers.length; i++){
    //     numbers[i] -= numberToSubtract;
    // }
    if (numberToSubtract !== ''){
        mathLoop(parseFloat(numberToSubtract), 'subtract');
    }

    // Update our html.
    updateUL();
    document.querySelector('#numberForMath').value='';
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    let numberToMultiply = document.querySelector('#numberForMath').value;
    
    // multiply value to everything on the list.
    // for (let i = 0; i < numbers.length; i++){
    //     numbers[i] *= numberToMultiply;
    // }
    if(numberToMultiply !== ''){
        mathLoop(parseFloat(numberToMultiply), 'multiply');

    }

    
    // Update our html.
    updateUL();
    document.querySelector('#numberForMath').value='';
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = document.querySelector('#numberForMath').value;

    // Divide value from everything on the list.
    // for (let i = 0; i < numbers.length; i++){
    //     numbers[i] /= numberToDivide;
    // }
    if(numberToDivide !== ''){
        mathLoop(parseFloat(numberToDivide), 'divide');

    }


    // Update our html.
    updateUL();
    document.querySelector('#numberForMath').value='';
}

function exponentiateAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberExponentiate = document.querySelector('#numberForMath').value;

    //Exponentiate each item on the list by the value.
    // for (let i = 0; i < numbers.length; i++){
    //     numbers[i] **= numberExponentiate;
    // }
    if(numberExponentiate !== ''){
        mathLoop(parseFloat(numberExponentiate), 'exponentiate');
    }

    // Update our html.
    updateUL();
    document.querySelector('#numberForMath').value='';
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const UL = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    UL.appendChild(newLI);
}

function clearInput(){
    const inputLine = document.querySelector('#list-number').value;
    inputLine = '';
}

function mathLoop(numberToOperate, oper){
    for (let i = 0; i < numbers.length; i++){
        switch (oper) {
            case 'add':
                numbers[i] += numberToOperate;
                break;
            case 'subtract':
                numbers[i] -= numberToOperate;
                break; 
            case 'multiply':
                numbers[i] *= numberToOperate;
                break;
            case 'divide':
                numbers[i] /= numberToOperate;
                break;
            case 'exponentiate':
                numbers[i] **= numberToOperate;
                break;
            default:
                numbers[i] += numberToOperate;
        }
    }
}