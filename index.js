const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[ data-searchForm]");
const loadingForm = document.querySelector(".loading-container");
const userInfoContainr = document.querySelector(".user-info-container");


// intial variables need
let currentTab = userTab;
const API_KEY = "6b7105f0fee98da8d8f4896860a2cd11";
currentTab.classList.add("current-tab");
// document.addEventListener("DOMContentLoaded", () => {
getfromSessionStorage();
// });

// ek kaame pending hai ???,.....

function switchtab(clickedTab){
    if(currentTab != clickedTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");

            userInfoContainr.classList.remove("active");
        }else{
            // main pehle search vale tab pe tha
            searchForm.classList.remove("active");
            userInfoContainr.classList.remove("active");
            // automatic weather display krvana padega using the checking in local storage using these function 
            // document.addEventListener("DOMContentLoaded", () => {
                getfromSessionStorage();
            // });
            
        }
    }
}

userTab.addEventListener("click",() => {
    switchtab(userTab);
})

searchTab.addEventListener("click",() => {
    switchtab(searchTab);
})

// check if co-ordinates are already present in session storage 
function getfromSessionStorage() {  
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");

        userInfoContainr.classList.remove("active");
        searchForm.classList.remove("active");
        loadingForm.classList.remove("active");
    }else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

    async function fetchUserWeatherInfo(coordinates) {
        const {lat, lng} = coordinates;
        // make grant container invisible
        grantAccessContainer.classList.remove("active");
        loadingForm.classList.add("active");

        // API CALL 
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
            const data = await response.json();

            loadingForm.classList.remove("active");
            userInfoContainr.classList.add("active");
            renderWeatherInfo(data);
        }catch(error){
            loadingForm.classList.remove("active");
            console.error(error);
        }
    }

function renderWeatherInfo(weatherInfo){
    // firstly,we have to fetch the element 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDecription]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weather object 
    cityName.innerText = weatherInfo?.name;
    countryIcon.src =  `https://flagcdn.com/w40/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src =   `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °c` ;
    windSpeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("No geolocation support");
        // show an alert for no geolocation support
    }
}

function showPosition(position) {
   const userCoordinates = {
        lat : position.coords.latitude,
        lng : position.coords.longitude 
   }

   sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
   fetchUserWeatherInfo(userCoordinates);
}  

function showError(error) {
    console.error("Error fetching location:", error.message);
    alert("Unable to fetch your location. Please try again.");
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getLocation());


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value.trim();    ;
    if(cityName == ""){
        return;
    }
    fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city){
        loadingForm.classList.add("active");
        userInfoContainr.classList.remove("active");
        grantAccessButton.classList.remove("active");
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingForm.classList.remove("active");
        userInfoContainr.classList.add("active");
        renderWeatherInfo(data);
    }catch(error){
        console.log(error);
    }
}

