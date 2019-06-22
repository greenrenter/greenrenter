import React, { Component } from 'react';
import styled from 'styled-components';

import PieChart from '../components/charts/PieChart';

const Wrapper = styled.div`
    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .info {
        line-height: 50px;
        h3 {
            text-align: center;
            padding-bottom: 20px;
        }
    }
`;

class SummaryPage extends Component {


    state = {
        test: 'wow'
    }


    componentDidMount() {
        // fetch data from db
        console.log('fetching data from DB...');
    }

    render() {
        // this data needs to come from the database
        const data = [
            {
                name: 'Dryer',
                y: 16.67
            },
            {
                name: 'TV',
                y: 16.67
            },
            {
                name: 'Fridge',
                y: 16.67
            },
            {
                name: 'Washer',
                y: 16.67
            },
            {
                name: 'Dishwasher',
                y: 16.67
            },
            {
                name: 'AC',
                y: 16.67
            },
        ]
        return (
            <Wrapper>
                <div className="flex">
                    <div className="info">
                        <h3>Your Energy Profile</h3>
                        <p>
                            Thank you for providing the information
                        </p>
                        <p>
                            The Energy Consumption of your household is :
                        </p>
                    </div>
                    <div className="barchart">
                        
                    </div>
                    <div className="piechart">
                        <PieChart data={data} />
                    </div>
                    <div className="energy-supplier" >
                        Energy Supplier call function to return it
                    </div>
                    <div className="email">
                        Email preferences component
                    </div>
                    <div className="externalInfo">
                        <p>Find out more about sustainable living: </p>
                        <a href="www.google.com">
                            <p>
                                What does energy efficient mean to you, your house and your energy bills
                            </p>
                        </a>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default SummaryPage;