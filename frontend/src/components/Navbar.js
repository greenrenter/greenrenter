import React from 'react';
import styled from 'styled-components';

import "../assets/styles/main.css";
import logo from '../assets/images/Logo.svg';

const Wrapper = styled.div`
    .header {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px 35px;
        justify-items: center;
        align-items: center;
        padding: 10px;
    }
`;

const Navbar = () => {
    return (
        <Wrapper>
            <div className='header'>
                    <img src={logo} alt="logo" width="50" height="50" />
                    <h1>Green Renters</h1>
                </div>
        </Wrapper>
    );
};

export default Navbar;