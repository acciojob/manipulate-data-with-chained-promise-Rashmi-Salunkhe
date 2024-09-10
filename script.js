//your JS code here. If required.
// Function to return a promise with an array after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1, 2, 3, 4];
            resolve(numbers);
        }, 3000); // Resolves after 3 seconds
    });
}

// Function to filter odd numbers
function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('output').innerText = `Filtered evens: ${evenNumbers}`;
            resolve(evenNumbers);
        }, 1000); // Resolves after 1 second
    });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById('output').innerText = `Multiplied by 2: ${multipliedNumbers}`;
            resolve(multipliedNumbers);
        }, 1000); // Resolves after 1 second
    });
}

// Chain the promises together
getNumbers()
    .then((numbers) => {
        // First, filter out the odd numbers
        return filterOddNumbers(numbers);
    })
    .then((evenNumbers) => {
        // Then, multiply the remaining even numbers by 2
        return multiplyEvenNumbers(evenNumbers);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
