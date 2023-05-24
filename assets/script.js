let city = document.getElementById("city");
let searchBtn = document.getElementById("searchBtn");
let displayCity = document.getElementById("displayCity");
let date = document.getElementById("date");
let icon = document.querySelector(".icon");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let historyItem = document.getElementById("historyItem");
let today = new Date().toLocaleDateString();

searchBtn.addEventListener("click", searchFunc);

function searchFunc(){
date.innerHTML=today;
if (searchBtn){
    fetchData(city.value)
    setCity();
    city.value = "";
}
}

function fetchData(value){
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q="+value+"&appid=1c062c0db0b1eb5a3f1e15c0c0f7cc64")
    .then((res)=>res.json())
    .then((forecast)=>{
        displayCity.innerHTML=forecast.city.name;
        temp.innerHTML=`${Math.round((((forecast.list[0].main.temp)-273.15)*1.8)+32)}&#176;F`;
        humidity.innerHTML=`${forecast.list[0].main.humidity} %`;
        description.innerHTML=forecast.list[0].weather[0].main;
        wind.innerHTML=`${forecast.list[0].wind.speed} mph`;

    if(description.innerHTML=="Clouds"){
        icon.src="./assets/images/cloud-solid.svg"
    } else if (description.innerHTML=="Clear"){
        icon.src="./assets/images/sun-solid.svg"
    } else if (description.innerHTML=="Rain"){
        icon.src="./assets/images/cloud-rain-solid.svg"
    } else if (description.innerHTML=="Snow"){
        icon.src="./assets/images/snowflake-regular.svg"
    }
    
    setFiveDay(forecast);
    })
    setStorage();
}

function setStorage(){
    localStorage.setItem("city", city.value);
    setCity();
}

function setCity(){
    historyItem.classList.add("archievedItems");
    historyItem.innerHTML=localStorage.getItem("city");
}


// fetch ("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=1c062c0db0b1eb5a3f1e15c0c0f7cc64")
//     .then((res)=>res.json()).then(console.log)