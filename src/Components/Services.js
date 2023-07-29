import React from "react";
import "./Styles/Services.css"
import {MegaphoneFill} from "react-bootstrap-icons";
import {Bank} from "react-bootstrap-icons";
import {PiggyBankFill} from "react-bootstrap-icons";




export default function Services() {
    return (
        <div className="Services-container">
            <div>
            <p className="big2">Our Services</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum is simply dummy industry. </p>
            </div>
            
            <div className="full-box">
            <div class="box">
                <div class="logo-container">
                    <PiggyBankFill/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Heading</h2>
                    <p>This is a paragraph inside the box.</p>
                </div>
            </div>
            <div class="box">
                <div class="logo-container">
                    <MegaphoneFill/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Heading</h2>
                    <p>This is a paragraph inside the box.</p>
                </div>
            </div>
            <div class="box">
                <div class="logo-container">
                    <Bank/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Heading</h2>
                    <p>This is a paragraph inside the box.</p>
                </div>
            </div>
            </div>

        </div>

    );
};