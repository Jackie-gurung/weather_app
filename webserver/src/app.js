const express = require('express');
const path = require('path')
const app = express ();
const hbs = require('hbs');


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

// app.get('/weather', (req,res) => {
//     res.send("Weather page")
// })

app.listen(3000,() => {
    console.log("Port 3000 is running");
})