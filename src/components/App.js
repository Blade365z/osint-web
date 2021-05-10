import React, { useEffect, useState } from 'react'
import Nav from './Nav'

import '../styles/app.scss';
import IntroBody from './IntroBody';
import Home from './Home';


const App = () => {
    const [YPosition, SetYPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        SetYPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="main" >
            <Nav ypos={YPosition} />
            <IntroBody ypos={YPosition} />
            <Home />
        </div>
    )
}

export default App;