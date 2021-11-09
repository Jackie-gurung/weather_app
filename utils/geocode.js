const request = require('postman-request');

const geocode = (address,callback) => {
    const urlGeocoding = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiamFteWFuZ2dlbGVrIiwiYSI6ImNrdnBhdHIzNTN1dmIyd251eWx1Mmwza2EifQ.YCDb028gAckhAgHZqWDTtQ&limit=1`;
    request({url:urlGeocoding, json:true},(error,response) => {
        if(error){
            callback("Unable to get geocoding services",undefined)
        }else if(response.body.features.length === 0){
            callback("Enter correct address",undefined)
        }else{
            const longitude = response.body.features[0].center[0];
            const latitude = response.body.features[0].center[1];
            const location = response.body.features[0].place_name;
            console.log(location);
            callback(undefined, {longitude,latitude,location});
        }
    })
}

module.exports = geocode