const prompt = require('prompt-sync')();
function calculateArea() {
    function getPositiveNumber(promptMessage) {
        let value;
        do {
            value = parseFloat(prompt(promptMessage));
            if (isNaN(value) || value <= 0) {
                console.log("Invalid input. Please enter a positive number.");
            }
        } while (isNaN(value) || value <= 0);
        return value;
    }

    const width = getPositiveNumber("Enter the width of the rectangle (positive number):");
    const height = getPositiveNumber("Enter the height of the rectangle (positive number):");

    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`);
    return area;
}

// Call the function
calculateArea();
calculateArea();
