// import logo from './tek_logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import Footer from './Components/Footer';

import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

function App() {

  const apiKey = "169da1e42e9146228c0fe2d5d958608d";

  const [newsInfo, setNewsInfo] = useState([]);

  const NEWS_URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    // fetch(NEWS_URL)
    //   .then(raw => raw.json())
    //   .then(res => setNewsInfo(res.response.results));
      // .then(res => console.log(res.response));
    axios.get(NEWS_URL)
      .then(response => setNewsInfo(response.data.articles))
      .catch((error) => console.log(error));

  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
         <br/>
          {/* <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p> */}

          {/* {console.log(newsInfo)} */}
          {/* {newsInfo.map(info => <p>{JSON.stringify(info)}</p>)} */}
          
          {/* Keys {source, author, title, description, url, urlToImage, publishedAt, content} */}
          {/* {newsInfo.map(info => <p>{info.title}</p>)} */}

          <Route exact path ="/">
            {/* <Headlines/> */}
            {newsInfo.map(info => <Headlines newsInfo={info}/>)}
          </Route>

          <Route path ="/Sports">
            <Sports/>
          </Route>

          <Route path ="/Weather">
            <Weather/>
          </Route>

          <Route path ="/Politics">
            <Politics/>
          </Route>

        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
