import axios from 'axios';

const instance = new axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: 'your_api_key_here'
      }
})

export default instance;
