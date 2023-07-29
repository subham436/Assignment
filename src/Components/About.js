import React from "react";
// import { SiAcer } from 'react-icons/si';
import "./Styles/About.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {GearFill} from "react-bootstrap-icons";
import {CollectionFill} from "react-bootstrap-icons";
import {Sunglasses} from "react-bootstrap-icons";



export default function About() {
    return(
        <div>
            <div className="container-2">
            
            <div className="container2-2">
            <img src="images/play-button.jfif" alt="GIF" className="play-button" />
                
            </div>
            <div className="container2-1">
                
                <p className="big2">We Have Many Years Experience In Consultant Business </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className="explore-btn">Explore Now</button>
                
                
            </div>
        </div>
        <div className="logos-container">
                <div>
                <GearFill/>
                <span><strong>Construct</strong>ion</span>
                </div>
                <div>
                <CollectionFill/>
                <span><strong>DUMMY</strong>LOGO</span>
                </div><div>
                <Sunglasses/>
                <span><strong>Random</strong>Logo</span>
                </div><div>
                <GearFill/>
                <span><strong>Random</strong>Brand</span>
                </div>
        </div>
      </div>

    );
};