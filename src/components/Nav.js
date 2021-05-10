import React from 'react'
import logo from '../assests/osint-logo.png';

import { motion } from 'framer-motion';

const Nav = ({ ypos }) => {
    return (
        <div className="nav">
            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">
                    <motion.div className="nav-item nav-logo"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: ypos >= 200 ? 0 : 20, opacity: ypos >= 200 ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img src={logo} />
                    </motion.div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white">  <i class="fas fa-bars"></i>   </span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarContent">
                        <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Publications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Announcements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
