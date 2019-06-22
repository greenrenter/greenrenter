import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .info {
        h3 {
            text-align: center;
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
                        BARCHART COMPONENT, call function to return a BARCHART
                    </div>
                    <div className="piechart">
                        PIECHART COMPONENT, call function to return a piechart component
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