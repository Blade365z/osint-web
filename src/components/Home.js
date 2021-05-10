import React from 'react'
import Tile from './Tiles'

const Home = () => {
    return (
        <div className="home">
            {/* Our main research directions include Topic Modeling, Event Detection, Sentiment Analysis, Text to Speech Synthesis, and Social Network Analysis. */}

            <div className="container">
                <div className="mt-5 px-2">
                    <h2 style={{ textAlign: 'center' }}>Our research directions include </h2>
                </div>
                <div className="row">
                    <div className="col-sm-4"> <Tile title="Topic Modeling" icon="far fa-comment-alt" /></div>
                    <div className="col-sm-4"><Tile title="Event Detection" icon="far fa-calendar-check" /> </div>
                    <div className="col-sm-4"><Tile title="Sentiment Analysis" icon="far fa-grin" /> </div>
                    <div className="col-sm-4"><Tile title="Text to Speech Synthesis" icon="fas fa-quote-left" /> </div>
                    <div className="col-sm-4"><Tile title="Social Network Analysis" icon="fas fa-project-diagram" /> </div>

                </div>
            </div>
        </div>
    )
}

export default Home;