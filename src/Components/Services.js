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
                    <PiggyBankFill className="large-icon"/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Financial Consulting</h2>
                    <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="box">
                <div class="logo-container">
                    <MegaphoneFill className="large-icon"/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Content Marketing</h2>
                    <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
            </div>
            <div class="box">
                <div class="logo-container">
                    <Bank className="large-icon"/>
                    {/* <div class="logo"></div> */}
                </div>
                <div class="content">
                    <h2>Finance Advice</h2>
                    <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
            </div>
            </div>
            <button className="services-btn">All Services</button>

        </div>

    );
};