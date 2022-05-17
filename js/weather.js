const API_KEY = "b44684465af49eebcb5d6868c2f7051f";

async function onGeoOk(position) {
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
      if (weatherIcon == "01d" || weatherIcon == "02d") {
        // 햇빛
        chosenImage = "0.jpg";
      } else if (weatherIcon == "01n" || weatherIcon == "02n") {
        // 밤
        chosenImage = "1.jpg";
      } else if (
        weatherIcon == "03d" ||
        weatherIcon == "03n" ||
        weatherIcon == "04d" ||
        weatherIcon == "04n"
      ) {
        // 구름
        chosenImage = "2.jpg";
      } else if (weatherIcon == "13d" || weatherIcon == "13n") {
        // 눈
        chosenImage = "3.jpg";
      } else if (weatherIcon == "50d" || weatherIcon == "50n") {
        // 안개
        chosenImage = "4.jpg";
      } else {
        // 비
        chosenImage = "5.jpg";
      }
      var chosenImage;
      const bgImage = document.createElement("img");
      bgImage.src = `img/${chosenImage}`;
      document.body.appendChild(bgImage);
      bgImage.id = "bgImage";
    });
}

function onGeoError() {
  alert("Can't find you,. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// import export로 weather의 변수를 가져오려 했으나 오류발생 임시로 두 파일을 합쳐서 실행
