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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {

  const apiKey = "169da1e42e9146228c0fe2d5d958608d";

  const [newsInfo, setNewsInfo] = useState([]);

  const NEWS_URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
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

          <Route exact path ="/">
            {/* <Headlines/> */}
            {newsInfo.map(info => <Headlines newsInfo={info}/>)}
          </Route>

          <Route path ="/Sports">
            <Sports apiKey={apiKey} />
          </Route>

          <Route path ="/Weather">
            <Weather apiKey={apiKey} />
          </Route>

          <Route path ="/Politics">
            <Politics apiKey={apiKey} />
          </Route>

        </div>
      </header>

      <Button variant="danger" size="lg">
        <a href="#" onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()">
          Click here to go back up!
        </a>
      </Button>

      <Footer/>
    </div>
  );
}

export default App;
