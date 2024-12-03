//  const cityForm = document.querySelector('form')

//  const updateCity = async (city) => {
    
//    const cityDets = await getCity(city)
//    const weather = await getWeather(cityDets.Key)

//    return {
//       cityDets,
//       weather                  //for these 2 objects we used OBJECT SHORTHAND NOTATION on them i.e when the property and value are the SAME
//    }
//  };

   

 
//  cityForm.addEventListener('submit', (e) => {
//     //prevent default action 
//     e.preventDefault();

//       //get city value
//       const city = cityForm.city.value.trim()
//       cityForm.reset();

//       //update the ui with new new city
//        updateCity(city)
//         .then(data => console.log(data))
//         .catch(err =>console.log(err) );
//  })