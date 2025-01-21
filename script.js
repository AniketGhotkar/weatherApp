console.log("Heelo jee aniket");
const API_key = "6b7105f0fee98da8d8f4896860a2cd11";

function renderWeatherInfo(data){

        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} c`;

        document.body.appendChild(newPara);
}

async function showWeather() {

    try{
        let  city  = "chandrapur";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        // convert reponse xml into json format
        const data = await response.json();
        console.log("Weather data -> ",data);
        renderWeatherInfo(data);
    }catch(error){
        // handle the error here 
        console.error(error);
    }
}

// showWeather();

async function getDetails(){
       try{
        let lat = 15.3333;
        let lon = 78.0833;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
        const data = await result.json();
        console.log("weather data  -> ",data);
       }catch(error){
            console.error(error);
       }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("No geolocation support");
    }
}


function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude; 
    
    console.log(lat);
    console.log(lng);
}
