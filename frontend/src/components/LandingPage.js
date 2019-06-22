import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    h1 {
        color: red;
    }
`;

class LandingPage extends Component {
    render() {
        return (
            <Wrapper>
                <h1>Landing Page</h1>
                <Link to="/forms">
                    Forms Page
                </Link>
            </Wrapper>
        );
    }
}

export default LandingPage;