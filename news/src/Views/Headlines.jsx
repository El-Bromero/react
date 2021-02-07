import React, { useEffect, useState } from 'react';
import Article from '../Components/Article';

function Headlines({ newsInfo }) {
    
    // useEffect(() => {

    //     fetch(webUrl)
    //         .then(raw => raw.json())
    //         .then(res => {
    //             console.log(res);
    //         })
    // }, [])

    const [articles, setArticles] = useState([]);

    
    return (
        <div>
            {/* <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p> */}

            {/* {newsInfo.urlToImage} */}
           <Article title={newsInfo.title} description={newsInfo.description} imageUrl={newsInfo.urlToImage} url={newsInfo.url} />
            <br/>
        
            {/* <Article/>
            <Article/>
            <Article/> */}
        </div>
    )
}

export default Headlines;