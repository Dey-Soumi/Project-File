const cityInput =document.querySelector(".city");
const searchButton =document.querySelector(".Search_btn");
const API_KEY="47c87ece2cf180db7119b858d154afc";

const getCityCoordinates=()=>{
    const cityName=cityInput.value.trim();
    if(!cityName) return;
   // console.log(cityName);
   const GEOCODING_API_URL='http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}';
   fetch(GEOCODING_API_URL).then(res=>JSON()).then(data=>{
    console.log(data)
   }).catch(()=>{
   alert("error occupied");
   });
   }


   searchButton.addEventListener("click",getCityCoordinates);

