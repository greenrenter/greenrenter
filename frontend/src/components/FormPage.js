import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormPage extends Component {
    render() {
        return (
            <div>
                <h1>Forms Page</h1>
                <Link to="/summary">
                    Forms Page
                </Link>
            </div>
        );
    }
}

export default FormPage;