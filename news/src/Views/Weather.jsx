import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleNews from '../Components/ArticleNews';

function Weather({apiKey}) {

    const [weatherNews, setWeatherNews] = useState([]);

    const WEATHER_URL = `https://newsapi.org/v2/everything?q=weather&apiKey=${apiKey}`;

    useEffect(() => {
        axios.get(WEATHER_URL)
        .then(response => setWeatherNews(response.data.articles))
        .catch((error) => console.log(error));

    },[]);

    return (
        <div>
            <h1>Weather News goes here: </h1>
            {weatherNews.map(news => <ArticleNews news={news}/>)}
        </div>
    )
}

export default Weather;