const apiKey = '709f8b48971c0dcff6f8628c692e638b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search Button');
const weatherIcon = document.querySelector('.weather img');


async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=709f8b48971c0dcff6f8628c692e638b&units=metric`);
    var data = await response.json();
    console.log(data);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }
    function update(){
        document.querySelector('.weather h2').innerHTML = data.name;
        document.querySelector('.weather h1').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        weatherIcon.src = `images/${capitalizeFirstLetter(data.weather[0].main)}.png`;
    }
    setTimeout(update(),10000);
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
        checkWeather(searchBox.value);
    }
})