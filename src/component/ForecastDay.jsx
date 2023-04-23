import React, { Fragment } from 'react'
import moment from 'moment';

const ForecastDay = ({ Forecastdata }) => {
  return (
    <div className='container rounded shadow-lg forecast_div my-4 py-2'>
      <div className='row text-center'>
        {Forecastdata.map((value, index) => {
          return (
            <div className='col' key={index}>
              {
                <Fragment>
                <h6>{moment.unix(value.dt).format('ddd')}</h6>
                <h6>{value.main.temp_max}<span>&#176;</span></h6>
                <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`} crossOrigin="anonomyus" height={50} width={50} />
                <h6 className='text-capitalize fs-6'>{value.weather[0].description}</h6>
                </Fragment>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ForecastDay