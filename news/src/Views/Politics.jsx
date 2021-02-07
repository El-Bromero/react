import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleNews from '../Components/ArticleNews';

function Politics({apiKey}) {

    const [politicsNews, setPoliticsNews] = useState([]);

    const POLITICS_URL = `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`;

    useEffect(() => {
        axios.get(POLITICS_URL)
        .then(response => setPoliticsNews(response.data.articles))
        .catch((error) => console.log(error));

    },[]);

    return (
        <div>
            <h1>Political News goes here: </h1>
            {politicsNews.map(news => <ArticleNews news={news}/>)}
        </div>
    )
}

export default Politics;