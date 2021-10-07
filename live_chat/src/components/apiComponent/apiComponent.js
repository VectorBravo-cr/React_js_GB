import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {getCityWather} from "../../actions/apiAction";

const WeatherApi = ({city = 'yekaterinburg'}) => {
    const [weatherList, setWeatherList] = useState([])


    useEffect(()=>{
        getCityWather(city)
        setWeatherList()
    },[])
    return(
        <label> weather today in Yekaterinburg : {}</label>
    )
}

export default WeatherApi;