const axios = require('axios').default;

const apiKey = '85103c8f94a6ecfeecbea9fe994b8592';

const getWeather = (city) => new Promise((resolve, reject) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
    .then(res => {
        resolve(res.data.main);
    })
    .catch(err => reject(err));
});

module.exports = getWeather;
