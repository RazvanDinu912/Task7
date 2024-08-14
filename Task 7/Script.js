let array = [];

function displayArray() {
    const arrayContainer = document.getElementById('arrayElements');
    arrayContainer.innerHTML = ''; 

    array.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.textContent = `Element ${index + 1}: ${element}`;
        arrayContainer.appendChild(elementDiv);
    });
}

function addElement() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.push(elementInput);
        displayArray();
    } else {
        alert('Please enter a valid element.');
    }
}

function removeElement(type) {
    if (array.length === 0) {
        alert('Array is empty.');
        return;
    }

    switch (type) {
        case 'first':
            array.shift();
            break;
        case 'last':
            array.pop();
            break;
        default:
            alert('Invalid operation.');
    }

    displayArray();
}