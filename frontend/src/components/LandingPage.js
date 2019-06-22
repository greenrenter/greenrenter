import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <Link to="/forms">
                    Forms Page
                </Link>
            </div>
        );
    }
}

export default LandingPage;