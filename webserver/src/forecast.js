const request = require('postman-request');

const getWeather = (longitude,latitude,location,callback) => {
    console.log(longitude,latitude);
    const url = `http://api.weatherstack.com/current?access_key=a1f0dc5671ae33859bdee1bf36f58dc5&query=${longitude},${latitude}`;
    request({url,json:true},(error,{body}) => {
        if(error){
            callback("Unable to connect to weather services",undefined);
        }else if(body.error){
            callback(body.error.info,undefined);
            console.log("body error")
        }else{
            const currentData = body.current;
            console.log("data ")
            callback(undefined, {temperature: currentData.temperature,feelslike : currentData.feelslike, weatherDescription: currentData.weather_descriptions[0],location:location})
        }
    })
}

module.exports = getWeather
