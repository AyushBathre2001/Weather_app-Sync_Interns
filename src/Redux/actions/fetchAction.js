export const fetchWeather =(city)=>{
    return{
        type:"FETCH_WEATHER",
        payload:city
    }
}

