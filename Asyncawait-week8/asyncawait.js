// Part 1: Create a promise to simulate a coin flip using async/await
const flipCoin = async () => {
    let result = Math.random();
    if (result > 0.5) {
        return "You win!";
    } else {
        throw "You lose!";
    }
};

// Part 2: Fetch data from the Advice Slip API by ID if provided
const fetchAdviceById = async () => {
    const adviceId = document.getElementById("adviceId").value;
    if (!adviceId) {
        displayResult("Please enter a valid Advice ID.");
        return;
    }

    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${adviceId}`);
        const data = await response.json();
        if (data.slip) {
            displayResult(`Advice #${adviceId}: ${data.slip.advice}`);
        } else {
            displayResult("No advice found for this ID.");
        }
    } catch (error) {
        displayResult("Error fetching advice: " + error);
    }
};

// Part 3: Fetch data from the Advice Slip API if you win
const fetchAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        displayResult("Advice: " + data.slip.advice);
    } catch (error) {
        displayResult("Error fetching advice: " + error);
    }
};

// Function to display results in the result area
const displayResult = (message) => {
    document.getElementById("output").textContent = message;
};

// Handling Coin Flip and displaying result on page using async/await
const handleCoinFlip = async () => {
    try {
        const message = await flipCoin();
        displayResult(message);
        await fetchAdvice();
    } catch (error) {
        displayResult(error);
    }
};
