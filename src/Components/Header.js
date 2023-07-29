import React from "react"
import { clockseven } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    return(
        <div className="header-container">
            {/* <FontAwesomeIcon icon="fa-solid fa-clock-seven" rotation={90} style={{color: "#00b3ff",}} /> */}
            <span>We are open 24/7</span>
            <span> abc@bisnes.com</span>

        </div>

    );
};

export default Header;