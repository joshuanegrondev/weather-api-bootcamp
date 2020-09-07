// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit




// api = b71b0f05b39e547e088041be16cc96a6
document.getElementById('click').addEventListener("click", getTemp);
function getTemp(){
  console.log('made it in getTemp');

  const city = document.querySelector('input').value.toString();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43e89931db46aeed7212f52d54cee99e`) ////WHAT'S GOING TO MAKE THE API RUN? Is it o

    .then(response => response.json())
    .then(data => {
      console.log(data.main.temp)
      let fahrenheit= Math.round((data.main.temp - 273.15)*9/5+32)+ "°" + "F"

      document.querySelector('.reveal').innerHTML = fahrenheit; //how are we going to put fahrenheit in the DOM?
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("there are no results for your search")
  })
}
