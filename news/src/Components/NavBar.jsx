import React from 'react'

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>Romero News</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/politics">Politics</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;