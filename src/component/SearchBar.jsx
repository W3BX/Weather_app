import React, { useState, useRef } from 'react'
import cityList from "../city_list.json"

const SearchBar = ({ setselectedCity }) => {

    const inputref = useRef()
    const [citysearch, setcitysearch] = useState([])
   
    const onSearch = (value) => {
        if (value.length >= 3) {
            cityList.filter((city, index) => city.name.toLowerCase().includes(value.toLowerCase())).map((value, index) => setcitysearch([...citysearch, value]))
        } else if (value.length == 0 || value.length < 3) {
            setcitysearch([])
        }
    }

    const onCitySelect = async (value) => {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value.name)}&limit=1&appid=${'3e29abad8256e04654e974cd409b7674'}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon } = data[0];
            setselectedCity({ lat: lat, long: lon})
        } else {
            throw new Error('Failed to retrieve city coordinates');
        }
        setcitysearch([])
        inputref.current.value = ''
    }

    return (
        <div className='container rounded shadow search_div'>
            <input type="text" ref={inputref}  className="form-control shadow-none" placeholder='Search cities...' onKeyUp={(e) => onSearch(e.target.value)} />
            <span className='searchicon'>&#128269;</span>
            {citysearch.length > 0 && <div className='px-2 searchResult border'>
                {citysearch.map((value, index) => {
                    return <div key={index} className="city" onClick={() => onCitySelect(value)}>{value.name}</div>
                })}
            </div>}
        </div >
    )
}

export default SearchBar