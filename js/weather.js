const API_KEY = "b44684465af49eebcb5d6868c2f7051f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector(
        "#weather span:first-child"
      ).nextElementSibling; // = document.querySelector("#weather span:last-child");
      const icon = document.querySelector(".icon");
      const weatherIcon = data.weather[0].icon; // 아래링크로 이모티콘을 가져오기 위한 json 내 icon 코드 가져오기
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = `${data.name}`;
      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
      ); // setAttribute를 통해 icon의 src 속성값을 변경, 다음의 링크는 icon이미지를 불러오는 api링크
    });
}

function onGeoError() {
  alert("Can't find you,. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
