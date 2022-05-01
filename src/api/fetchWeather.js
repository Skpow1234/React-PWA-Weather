import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4ff1312e86c6b38b2b4e05fbc1d24a94';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID: API_KEY,
        }
    });
    return data;
}