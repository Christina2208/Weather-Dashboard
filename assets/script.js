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
let dateCard1 = document.querySelector(".dateCard1");
let dateCard2 = document.querySelector(".dateCard2");
let dateCard3 = document.querySelector(".dateCard3");
let dateCard4 = document.querySelector(".dateCard4");
let dateCard5 = document.querySelector(".dateCard5");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icon5 = document.querySelector(".icon5");
let descCard1 = document.querySelector(".descCard1");
let descCard2 = document.querySelector(".descCard2");
let descCard3 = document.querySelector(".descCard3");
let descCard4 = document.querySelector(".descCard4");
let descCard5 = document.querySelector(".descCard5");
let tempCard1 = document.querySelector(".tempCard1");
let tempCard2 = document.querySelector(".tempCard2");
let tempCard3 = document.querySelector(".tempCard3");
let tempCard4 = document.querySelector(".tempCard4");
let tempCard5 = document.querySelector(".tempCard5");
let windCard1 = document.querySelector(".windCard1");
let windCard2 = document.querySelector(".windCard2");
let windCard3 = document.querySelector(".windCard3");
let windCard4 = document.querySelector(".windCard4");
let windCard5 = document.querySelector(".windCard5");
let humidityCard1 = document.querySelector(".humidityCard1");
let humidityCard2 = document.querySelector(".humidityCard2");
let humidityCard3 = document.querySelector(".humidityCard3");
let humidityCard4 = document.querySelector(".humidityCard4");
let humidityCard5 = document.querySelector(".humidityCard5");

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

function setFiveDay(forecast){
    //tomorrow index 8
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
dateCard1.innerHTML=tomorrow.toLocaleDateString();
tempCard1.innerHTML=`${Math.round((((forecast.list[8].main.temp)-273.15)*1.8)+32)}&#176;F`;
        humidityCard1.innerHTML=`${forecast.list[8].main.humidity} %`;
        descCard1.innerHTML=forecast.list[8].weather[0].main;
        windCard1.innerHTML=`${forecast.list[8].wind.speed} mph`;

        if(descCard1.innerHTML=="Clouds"){
            icon1.src="./assets/images/cloud-solid.svg"
        } else if (descCard1.innerHTML=="Clear"){
            icon1.src="./assets/images/sun-solid.svg"
        } else if (descCard1.innerHTML=="Rain"){
            icon1.src="./assets/images/cloud-rain-solid.svg"
        } else if (descCard1.innerHTML=="Snow"){
            icon1.src="./assets/images/snowflake-regular.svg"
        }
// second day tomorrow index 16 
let secondDay = new Date();
secondDay.setDate(secondDay.getDate()+2);
dateCard2.innerHTML=secondDay.toLocaleDateString();
tempCard2.innerHTML=`${Math.round((((forecast.list[16].main.temp)-273.15)*1.8)+32)}&#176;F`;
    humidityCard2.innerHTML=`${forecast.list[16].main.humidity} %`;
    descCard2.innerHTML=forecast.list[16].weather[0].main;
    windCard2.innerHTML=`${forecast.list[16].wind.speed} mph`;

    if(descCard2.innerHTML=="Clouds"){
        icon2.src="./assets/images/cloud-solid.svg"
    } else if (descCard2.innerHTML=="Clear"){
        icon2.src="./assets/images/sun-solid.svg"
    } else if (descCard2.innerHTML=="Rain"){
        icon2.src="./assets/images/cloud-rain-solid.svg"
    } else if (descCard2.innerHTML=="Snow"){
        icon2.src="./assets/images/snowflake-regular.svg"
    }
// third day index 24 
let thirdDay = new Date();
thirdDay.setDate(thirdDay.getDate()+3);
dateCard3.innerHTML=thirdDay.toLocaleDateString();
tempCard3.innerHTML=`${Math.round((((forecast.list[24].main.temp)-273.15)*1.8)+32)}&#176;F`;
    humidityCard3.innerHTML=`${forecast.list[24].main.humidity} %`;
    descCard3.innerHTML=forecast.list[24].weather[0].main;
    windCard3.innerHTML=`${forecast.list[24].wind.speed} mph`;

    if(descCard3.innerHTML=="Clouds"){
        icon3.src="./assets/images/cloud-solid.svg"
    } else if (descCard3.innerHTML=="Clear"){
        icon3.src="./assets/images/sun-solid.svg"
    } else if (descCard3.innerHTML=="Rain"){
        icon3.src="./assets/images/cloud-rain-solid.svg"
    } else if (descCard3.innerHTML=="Snow"){
        icon3.src="./assets/images/snowflake-regular.svg"
    }
// fourth day index 32
let fourthDay = new Date();
fourthDay.setDate(thirdDay.getDate()+4);
dateCard4.innerHTML=fourthDay.toLocaleDateString();
tempCard4.innerHTML=`${Math.round((((forecast.list[32].main.temp)-273.15)*1.8)+32)}&#176;F`;
    humidityCard4.innerHTML=`${forecast.list[32].main.humidity} %`;
    descCard4.innerHTML=forecast.list[32].weather[0].main;
    windCard4.innerHTML=`${forecast.list[32].wind.speed} mph`;

    if(descCard4.innerHTML=="Clouds"){
        icon4.src="./assets/images/cloud-solid.svg"
    } else if (descCard4.innerHTML=="Clear"){
        icon4.src="./assets/images/sun-solid.svg"
    } else if (descCard4.innerHTML=="Rain"){
        icon4.src="./assets/images/cloud-rain-solid.svg"
    } else if (descCard4.innerHTML=="Snow"){
        icon4.src="./assets/images/snowflake-regular.svg"
    }
// fifth day index 39
let fifthDay = new Date();
fifthDay.setDate(thirdDay.getDate()+5);
dateCard5.innerHTML=fifthDay.toLocaleDateString();
tempCard5.innerHTML=`${Math.round((((forecast.list[39].main.temp)-273.15)*1.8)+32)}&#176;F`;
    humidityCard5.innerHTML=`${forecast.list[39].main.humidity} %`;
    descCard5.innerHTML=forecast.list[39].weather[0].main;
    windCard5.innerHTML=`${forecast.list[39].wind.speed} mph`;

    if(descCard5.innerHTML=="Clouds"){
        icon5.src="./assets/images/cloud-solid.svg"
    } else if (descCard5.innerHTML=="Clear"){
        icon5.src="./assets/images/sun-solid.svg"
    } else if (descCard5.innerHTML=="Rain"){
        icon5.src="./assets/images/cloud-rain-solid.svg"
    } else if (descCard5.innerHTML=="Snow"){
        icon5.src="./assets/images/snowflake-regular.svg"
    }
}


// fetch ("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=1c062c0db0b1eb5a3f1e15c0c0f7cc64")
//     .then((res)=>res.json()).then(console.log)