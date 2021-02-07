import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleNews from '../Components/ArticleNews';

function Sports({apiKey}) {

    const [sportsNews, setsportsNews] = useState([]);

    const SPORTS_URL = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`;

    useEffect(() => {
        axios.get(SPORTS_URL)
        .then(response => setsportsNews(response.data.articles))
        .catch((error) => console.log(error));

    },[]);


    return (
        <div>
            <h1>The Latest In Sports News: </h1>
            {sportsNews.map(news => <ArticleNews news={news}/>)}
            {/* <Article/>
            <Article/>
            <Article/> */}
        </div>
    )
}

export default Sports;