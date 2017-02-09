var axios = require('axios');

const API_KEY = 'b7443c4982d199fe737507dbd7d07920';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+API_KEY+'&units=imperial';

// b7443c4982d199fe737507dbd7d07920

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            debugger;
            if(res.data.cod && res.data.message){
                throw res.data.message;
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw res.data.message;
        });
    }
};
