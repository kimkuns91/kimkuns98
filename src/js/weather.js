const API_KEY = 'e8401c7c53bcf12e37339cec05358c44'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        const weatheType = data.weather[0].main;
        city.innerText = data.name; 
        temp.innerText = data.main.temp + ' ℃';

        weather.appendChild(weather);
    });

}

function onGeoErr(){
    alert("사용자의 위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);