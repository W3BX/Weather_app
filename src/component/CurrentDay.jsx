import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';
const CurrentDay = ({ currentDayData }) => {
    return (
        <div className='container rounded weather_current shadow-lg my-4'> 
            <div className='row p-2 border  weather_current_row'>
                <div className='col-10'>
                    <h1 className='temp_text'>{currentDayData.name}, {currentDayData.main.temp_max}<span>&#8451;</span> <sub className='sub'>{currentDayData.weather[0].main}</sub></h1>
                    <h4>{moment.unix(currentDayData.dt).format('MMMM Do, YYYY')}</h4>
                    <h6>{moment.unix(currentDayData.dt).format('dddd')}</h6>
                </div>
                <div className='col-2 icons'>
                    <img src={`https://openweathermap.org/img/wn/${currentDayData.weather[0].icon}.png`} crossOrigin="anonomyus" height={50} width={50} />
                </div>
                <div className='col-5 py-1'><h5>pressure</h5>{currentDayData.main.pressure} hpa </div>
                <div className='col-2 text-center'>
                </div>
                <div className='col-5 py-1'>
                    <span className='float-end'><h5>Humidity</h5> {currentDayData.main.humidity} %
                    </span>
                </div>
                <div className='col-6 py-1 d-flex'>
                    <span className='sunrise_icon'>&#9728;</span>
                    <span> Sunrise <br /> {moment.unix(currentDayData.sys.sunrise).format('h:mm a')}
                    </span>
                </div>
                <div className='col-6 py-1 d-flex sunset'>
                    <span className='sunset_icon'>&#9925;</span>
                    <span> Sunset <br />  {moment.unix(currentDayData.sys.sunset).format('h:mm a')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CurrentDay