import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Room Management</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;