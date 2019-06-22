import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../assets/styles/main.css";
import logo from '../assets/images/Logo.svg';
import backgroundImage from '../assets/images/landing-page-background.jpg';


const Wrapper = styled.div`
    /*  Require UX Input to review*/ 
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;   
    background-position:  top right; */

    .header {
        display: flex;
        justify-content: space-between;
        /* grid-template-rows: 10vh; */
        padding-bottom:10px;
        align-items: center;
        padding: 10px;
    }

    .content {
        font-size: 25px;
        color: white;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 25vh 25vh 25vh;
        justify-items: center;
        align-items: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;   
        background-position:  top right;

        .findmore-btn {
            background-color: #4CAF50;
            border: none;
            cursor: pointer;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1rem;
            border-radius: 5px;
        }
    }

    .footer {
        /* display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20vh;        
        align-items: baseline; */
        display: flex;
        align-items: baseline;

    }


`;

class LandingPage extends Component {
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <img src={logo} alt="logo" width="100" height="100" />
                    <h1>Green Renters</h1>
                </div>
                <div className="content">
                    <h2>HOW GREEN ARE YOU?</h2>
                    <h2>Take 5 min of your time!</h2>
                    <Link to="/forms">
                        <button className="findmore-btn">
                            Find Out More
                        </button>
                    </Link>
                </div>
                <div className="footer">
                    <p>Disclaimer: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Consequatur voluptatum quaerat, perferendis suscipit praesentium blanditiis iusto!
                            Culpa nobis rerum molestiae a magnam laboriosam. Consequatur nemo eos culpa. Ratione, esse harum.
                            Consequatur voluptatum quaerat, perferendis suscipit praesentium blanditiis iusto!
                            Culpa nobis rerum molestiae a magnam laboriosam. Consequatur nemo eos culpa. Ratione, esse harum.
                    </p>
                </div>
            </Wrapper>
        );
    }
}

export default LandingPage;
