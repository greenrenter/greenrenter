import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../assets/styles/main.css";
import logo from '../assets/images/Logo.svg';
import backgroundImage from '../assets/images/landing-page-background.jpg';


const Wrapper = styled.div`
    height: 100vh;

    .header {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px 35px;
        justify-items: center;
        align-items: center;
        padding: 10px;
    }

    .content {
        /* font-size: 25px; */
        color: white;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20vh 20vh 20vh 25vh;
        justify-items: center;
        align-items: center;
        /* Place holder for background image */
        /* background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;   
        background-position:  top right; */
        background-color: green;

        .label1 {
            align-self: end;
        }

        .findmore-btn {
            align-self: top;
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

        p {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`;

class LandingPage extends Component {
    render() {
        return (
            <Wrapper>
                {/* <div className='header'>
                    <img src={logo} alt="logo" width="50" height="50" />
                    <h1>Green Renters</h1>
                </div> */}
                <div className="content">
                    <h2 className="label1">HOW GREEN ARE YOU?</h2>
                    <h2 className="label2">Take 5 min of your time!</h2>
                    <Link to="/forms" className="findmore-btn">
                        Find Out More
                    </Link>
                    <p>Disclaimer:
                        We highly value your privacy and any information collected with
                        not be shared with any 3rd parties.
                        Figures provided will only be an estimation.
                    </p>
                </div>
            </Wrapper>
        );
    }
}

export default LandingPage;
