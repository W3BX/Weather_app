import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { currentDay, foreCast } from "../slice/geolocation"
import CurrentDay from '../component/CurrentDay';
import ForecastDay from '../component/ForecastDay';
import SearchBar from '../component/SearchBar';
import Loader from '../component/Loader';
const Home = () => {

  const dispatch = useDispatch()

  const currentDayData = useSelector(state => state.demo.currentDay)
  const Forecastdata = useSelector(state => state.demo.foreCast)
  const [selectedCity, setselectedCity] = useState('')
  const [loading, setloading] = useState({ searchbar: true, foreCast: true, currentDay: true })

  const WeatherApiCall = async (parm) => {

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${parm.lat}&lon=${parm.long}&units=metric&appid=${'3e29abad8256e04654e974cd409b7674'}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {
          dispatch(currentDay(data))
          setloading(prev => ({ ...prev, currentDay: false }))
        }
      })

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${parm.lat}&lon=${parm.long}&units=metric&appid=${'3e29abad8256e04654e974cd409b7674'}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod == 200) {
                const dailyForecast = [];
                data.list.forEach(forecast => {
                  if (forecast.dt_txt.includes('00:00:00')) {
                    dailyForecast.push(forecast)
                  }
                })
                dispatch(foreCast(dailyForecast))
                setselectedCity('')
                setloading(prev => ({ ...prev, foreCast: false, searchbar: false }))
              }
        })
   }

  const fetchGeoLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function success(position) {
          WeatherApiCall({ lat: position.coords.latitude, long: position.coords.longitude })
        },
        function error(error_message) {
          alert('Cannot fecth your current location. Please enable location')
        }
      )
    } else {
      alert('geolocation is not enabled on this browser')
    }

  }

  useEffect(() => {
    fetchGeoLocation();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setloading({ searchbar: true, foreCast: true, currentDay: true })
      WeatherApiCall(selectedCity)
    }
  }, [selectedCity]);

  return (
    <Fragment>
      <div className='container weather_div  my-4'>
        {!loading.searchbar ? <SearchBar setselectedCity={setselectedCity} /> : <Loader search={true} />}
        {!loading.foreCast && Forecastdata.length > 0 ? <ForecastDay Forecastdata={Forecastdata} /> : <Loader forecast={true} />}
        {!loading.currentDay && currentDayData ? <CurrentDay currentDayData={currentDayData} /> : <Loader currentDay={true} />}
      </div>
    </Fragment>
  )
}

export default Home