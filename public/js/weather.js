const cityName = document.getElementById('cityName');
const weatherBtn = document.getElementById('weatherBtn');
const weatherResult = document.getElementById('weatherResult');

const temp = document.getElementById('temp');
const place = document.getElementById('place');
const weatherType = document.getElementById('weatherType')

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        weatherResult.innerText = 'Please enter the city name';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=44c14ac6d90b1e35990c6a613bcdd488`;
            const response = await fetch(url);
            const apiResult = await response.json();
            const arrApi = [apiResult];

            temp.innerText = arrApi[0].main.temp;
            place.innerText = cityVal + ', ' + arrApi[0].sys.country;
            weatherType.innerText = arrApi[0].weather[0].main;
        } catch {
            weatherResult.innerText = 'Please check the city name';
        }
    }
}
weatherBtn.addEventListener('click', getInfo);