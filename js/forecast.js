const key = '7ejJqqHGUi9X8tcZ7OEw8fuTGOWfKv0L'

// get weather information:

// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
//    const query =   `${id}?apikey=${key}` 

//    const response = await fetch(base + query)   
//    const data = await response.json()
    
//    return data[0]
// }



//get city information:
// const getCity = async (city) => {
   
//     const base =  'http://dataservice.accuweather.com/locations/v1/cities/search'

//     const query = `?apikey=${key}&q=${city}`

//     const response  = await fetch(base + query) 
//     const data = await response.json()

//     console.log(data)
    
//    return data[0]
   

// }


// getCity('manchester').then(data => { 
//       return getWeather(data.Key)
//    }).then((data) => {
//       console.log(data) 
//    }).catch(err => console.log(err))


// getWeather("329260")

let weather = {
    apikey: "8c7d79c344ddc3f3a4b3851ad205ee68",
    fetchWeather: function(city) {
                fetch(
                    "https://api.openweathermap.org/data/2.5/weather?q="
                     + city
                     + "&appid=" 
                     + this.apikey 
                ).then((response) => response.json())
                .then((data) => this.displayWeather(data))
            },
    displayWeather: function(bbb) {  //You can still change this "bbb" parameter to "data", I did it just to play around, lol.
          const {name} = bbb
          const {icon, description} =  bbb.weather[0]
          const {temp, humidity} = bbb.main;
          const {speed} =    bbb.wind;
          console.log(name,icon,description,temp,humidity, speed)

          document.querySelector('.name').innerText = "Weather in " + name;
          document.querySelector('.temperature').innerText =  temp + " &degC";
          document.querySelector('.icon').src =  "https://openweathermap.org/img/wn/"  + icon + "@4x.png";
          document.querySelector('.description').innerText =  description;
          document.querySelector('.humidity').innerText = "Humidity:" + humidity + "%";
          document.querySelector('.wind').innerText = "Wind speed: " + speed + "km/h";
          document.querySelector('marquee').innerText = "This is weather " + name + "."

          document.querySelector(".weatherDiv").classList.remove("loading")  //removes the style of  "visibility: hidden;"  given to the class of "loading"
    },
    
    searchWeather: function() {
       this.fetchWeather(document.querySelector(".searchBar").value)
    }
}


document.querySelector("button").addEventListener("click", () => {
    // e.preventDefault
      weather.searchWeather("") ;
})

document.querySelector(".searchBar").addEventListener("keyup", (e) => {
      console.log(e)
      if(e.key == "Enter"){
        weather.searchWeather("")
      }
})

 

weather.fetchWeather("seattle")
// console.log(weather.fetchWeather("toronto"))
//  console.log(document.querySelector(".searchBar").value = 76)
