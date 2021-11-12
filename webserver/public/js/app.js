console.log("Fontend js file loaded");


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const location = search.value

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) =>{
        response.json().then((data) => {
            if(data.error){ 
                messageOne.textContent = data.error;
            }else{
                messageOne.textContent = `Location : ${data.location}`;
                messageTwo.textContent = `It is ${data.weatherDescription}.Temperature is ${data.temperature} degree celsius but feels like ${data.feelslike} degree celcius `;
                console.log(data )
            }
        })
    })
})