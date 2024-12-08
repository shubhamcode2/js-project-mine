const InputCity = document.querySelector("#cityName");
const btn = document.querySelector("#SearchBtn");



let time = new Date;
document.querySelector("#SearchBtn").addEventListener('click', ()=>{
    let city = document.querySelector("#cityName").value;
    
    async function checkWether() {
    const apiKey = "cae3d8f202f07148ea84fc972ccc74e5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data);

    document.querySelector("#city").innerHTML = "Result for City : " + data.name;

    document.querySelector("#temp").innerHTML = "Temprature : " + Math.floor(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = "humidity : " + data.main.humidity + "%";

    document.querySelector("#samay").innerHTML = time;

}
checkWether()
})

//gpt
// const InputCity = document.querySelector("#cityName");
// const btn = document.querySelector("#SearchBtn");

// btn.addEventListener('click', async () => {
//     const city = InputCity.value;
//     const apiKey = "cae3d8f202f07148ea84fc972ccc74e5";
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) throw new Error("City not found");
        
//         const data = await response.json();
//         const time = new Date().toLocaleString(); // Formats the time

//         document.querySelector("#city").innerHTML = `Result for City: ${data.name}`;
//         document.querySelector("#temp").innerHTML = `Temperature: ${Math.floor(data.main.temp)}°C`;
//         document.querySelector("#humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
//         document.querySelector("#samay").innerHTML = `Date & Time: ${time}`;
        
//     } catch (error) {
//         console.error(error);
//         document.querySelector("#city").innerHTML = "Error: " + error.message;
//     }
// });
