/*const sum = (a,b, callback) =>{
    const result = a + b;
    callback(result);
};
sum (3,4, (result) => {
    console.log("The sum is:", result);
});*/

// const { error } = require("console");

/*const greet = (name, callback) =>{
    console.log(`Hello, ${name}!`);
    callback();
}

greet("Michiel", () =>{
    console.log("Have a wonderful day!")
})*/


/*const delayedMessage = (message, delay, callback) => {
    setTimeout( ()=>{
        console.log(message);
        callback()
    }, delay);
};

delayedMessage("This Message appears after 2 seconds", 2000, () => {
    console.log("The delay is over");
});*/


/*let numbers = [1, 2, 3, 4, 5];

const processArray =(arr, callback) =>{
    // logic is here
    arr.forEach((number) => {
        callback(number);
        
    });
};

processArray(numbers, (number) =>{
    console.log(number*2);
    //logice
})*/

/*const calculator = (a,b, callback) =>{
    //logice here
    return callback(a, b);
}

let sum = calculator(5,3, (a,b) =>{
    return a+b;
});

let product = calculator(5,3, (a,b) =>{
    return a * b;
});

console.log("Sum:", sum)
console.log("Prodcut:",  product);*/

/*const myPromise = new Promise ((resolve, reject) => {
    //logic
    let success = true;

    if(success){
        resolve ("operation was succesful!")
    }
    else{
        reject ("Operation failed!")
    }
})

myPromise
.then((message) =>{
    //logic
    console.log(message);
})
.catch((error) => {
    //logic
    console.log("error:" + error)
});*/

const fetchAdviceById = (id) => {
    //logic
    fetch(`https://api.adviceslip.com/advice/${id}`).then((response) => {
        //console.log(response)
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${id}): ${advice}`)
    })
    .catch((error) => {
        console.log("Error fetching advice:", error)
    })
   
};

fetchAdviceById(1)