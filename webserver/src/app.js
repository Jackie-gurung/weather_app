const express = require('express');
const path = require('path')
const app = express ();


// define path for express configuration 
const publicPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template');
const partialsPath = path.join(__dirname,'../template/partials');

// Set up hbr engine and view locations 
app.set('view engine','hbs');
app.set('views' , viewPath);

// Set up  static directory to serve 
app.use(express.static(publicPath))



app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather app',
        name:'Jackie Lhowa'
    })
})

app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About Page',
        name:'Jackie Lhowa'
    })
})

app.get('/help', (req,res) =>{
    res.render('help',{
        message:'call 911 for help'
    })
})

// app.get('/weather', (req,res) => {
//     res.send("Weather page")
// })

app.listen(3000,() => {
    console.log("Port 3000 is running");
})