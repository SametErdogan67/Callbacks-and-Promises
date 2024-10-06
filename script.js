// Part 1: Create a promise to simulate a coin flip
const flipCoin = () => {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("You win!");
        } else {
            reject("You lose!");
        }
    });
};

// Part 2: Fetch data from the Advice Slip API by ID if provided
const fetchAdviceById = () => {
    const adviceId = document.getElementById("adviceId").value;
    if (!adviceId) {
        displayResult("Please enter a valid Advice ID.");
        return;
    }

    fetch(`https://api.adviceslip.com/advice/${adviceId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.slip) {
                displayResult(`Advice #${adviceId}: ${data.slip.advice}`);
            } else {
                displayResult("No advice found for this ID.");
            }
        })
        .catch((error) => {
            displayResult("Error fetching advice: " + error);
        });
};

// Part 2: Fetch data from the Advice Slip API if you win
const fetchAdvice = () => {
    return fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            displayResult("Advice: " + data.slip.advice);
        })
        .catch((error) => {
            displayResult("Error fetching advice: " + error);
        });
};

// Function to display results in the result area
const displayResult = (message) => {
    document.getElementById("output").textContent = message;
};

// Handling Coin Flip and displaying result on page
const handleCoinFlip = () => {
    flipCoin()
        .then((message) => {
            displayResult(message);
            return fetchAdvice();
        })
        .catch((error) => {
            displayResult(error);
        });
};
