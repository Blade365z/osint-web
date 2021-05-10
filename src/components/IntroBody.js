import React, { useEffect, useState } from 'react'
import logo from '../assests/osint-logo.png';

const IntroBody = ({ ypos }) => {
    const [opacity, setOpacity] = useState(100);
    useEffect(() => {
        let o = fade();
        setOpacity(o)
    }, [ypos])
    const fade = () => {
        return 1 - ((ypos + 100) / 1000) + (400 - ypos) / 1000;
    }
    return (
        <div>
            <div className="into-logo" style={{ opacity }}>
                <img src={logo} />
                <div className="lab-intro-text">
                    <article>The Open Source Intelligence Group at Indian Institute of Technology, Guwahati is a group consisting of Faculty Members, PhD Scholars, MTech & BTech Students, and Project Engineers, who work together on processing publicly available resources to derive intelligence. </article>
                </div>
            </div>

        </div >
    )
}
export default IntroBody;
