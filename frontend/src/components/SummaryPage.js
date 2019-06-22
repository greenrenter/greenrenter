import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

class SummaryPage extends Component {

    state = {
        test: 'wow'
    }

    componentDidMount() {
        // fetch data from db
        console.log('fetching data from DB...');
    }



    render() {
        return (
            <div>
                <Navbar/>
                {this.state.test}
            </div>
        );
    }
}

export default SummaryPage;