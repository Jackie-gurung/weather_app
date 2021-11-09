const request = require('postman-request');

const geocode = require('./utils/geocode');
const getWeather = require('./utils/forecast');

const args = process.argv[2];

if(args){
    geocode(`${args}`, (error,  data) => {

        if(error) { 
            console.log(error)  
        }else{
            getWeather(data,(error, weatherData) => {
                if(error){
                console.log("Error", error);
                }
                console.log("Data", weatherData);
            })
        } 
    })
}else{
    console.log("Please provide address : like node app kathmandu /'new york' ")
}

  





