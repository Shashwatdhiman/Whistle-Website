import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import callBtn from "../assets/call-btn.png";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="navbar">
            <div className="navbar-top">
                <img src={logo} alt="logo" className="logo" />

                <button className="call-btn">
                    <img src={callBtn} alt="call" />
                </button>
            </div>
            {open && <div className="offer-bar">
                Starting at <span className="old-price">Rs 69,999</span>
                Rs 47,999. Hurry! Offer ends soon.
                <span className="close-btn" onClick={() => setOpen(false)}>×</span>
            </div>}
        </div>
    )
}

export default Navbar
