/* const myPromise = new Promise ((resolve, reject) => {
    // logic
    let success = true;

    if(success) {
        resolve("operation was successful!");
    }
    else{
        reject("Operation failed!")
    }
});

const result = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    }  catch(rejection) {
        console.log(rejection)
    }
};

result();
 */




/* myPromise.then((message) =>{
    console.log(message);
})
.catch((rejection) => {
    console.log("reason: " + rejection);
}); */

/* const fetchAdviceById = (id) => {
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
        console.log("Error fetching advice:", error.message)
    })
   
}; */

/* const fetchAdviceById = async (id) => {
    try {
        const response = await fetch (`https://api.adviceslip.com/advice/${id}`)
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${id}): ${advice}`);
    } catch (error) {
        console.log(error)
    }
}

fetchAdviceById(1); */

/* const weatherInAlingsas = async () => {
    try {
      const response = await fetch (
        "https://api.open-meteo.com/v1/forecast?latitude=57.9303&longitude=12.5335&current=temperature_2m&timezone=Europe%2FBerlin"
      );
      const data = await response.json();
      console.log("The temperature is Alingsas is currently " + data.current.temperature_2m + data.current_units.temperature_2m)
    } catch (err) {
        console.log(err)
    }

};

weatherInAlingsas(); */

const apiKey = "d0cdedf311595e6787a701b38eb9b472";
const lat = 57.9303;
const lon = 12.5335;
const units = "metric";

const weatherInAlingsas = async () => {
    try {
      const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
      );
      const data = await response.json();
      console.log(data);
      console.log("The temperature in " + data.name + " is " + data.main.temp + " C");
      /* console.log("The temperature is Alingsas is currently " + data.current.temperature_2m + data.current_units.temperature_2m) */
    } catch (err) {
        console.log(err)
    }

};

weatherInAlingsas();




