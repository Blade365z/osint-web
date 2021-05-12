import React from 'react'

const Tile = ({ title, description, icon }) => {
    return (
        <div className="osint-tile m-3 shadow">
            <div className="tile-icon">
                <i className={icon}></i>
            </div>
            <div className="tile-text py-3 ps-4 pe-2 ">
                <h5>{title}</h5>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </article>
            </div>
        </div>
    )
}

export default Tile;