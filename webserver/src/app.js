const express = require('express');
const path = require('path')
const app = express ();
const hbs = require('hbs');

const geocode = require('./geocode');
const getWeather = require('./forecast');


// define path for express configuration 
const publicPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');

// Set up hbr engine and view locations 
app.set('view engine','hbs');
app.set('views' , viewPath);
hbs.registerPartials(partialsPath);

// Set up  static directory to serve 
app.use(express.static(publicPath))


app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather',
        name:'Jackie Lhowa'
    })
})

app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About Us',
        name:'Jackie Lhowa'
    })
})

app.get('/help', (req,res) =>{
    res.render('help',{
        message:'call 911 for help',
        title: 'Help',
        name:'Jackie Lhowa'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error:"address not provided"
        })
    }

    geocode(`${req.query.address}`, (error,  {longitude,latitude,location} = {}) => {

        if(error) { 
            return res.send({
                error: "unable to geocode"
            })
        }else{
            getWeather(longitude,latitude,location,(error, weatherData) => {
                if(error){
                    return res.send({
                        error: error
                    })
                }
                res.send({
                    temperature : weatherData.temperature,
                    feelslike: weatherData.feelslike,
                    weatherDescription : weatherData.weatherDescription,
                    location : weatherData.location
                })
            })
        } 
    })
    
})

app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error:'Pro vide search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title: '404',
        name:'Jackie Lhowa', 
        errorMsg : "Help article not found"
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '404',
        name:'Jackie Lhowa',
        errorMsg : "404 | PAGE NOT FOUND"
    })
})

app.listen(3000,() => {
    console.log("Port 3000 is running");
})