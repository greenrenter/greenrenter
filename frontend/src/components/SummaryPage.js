import React, { Component } from 'react';
import styled from 'styled-components';

import "../assets/styles/main.css";
import logo from "../assets/images/logo.png";
import barchart from "../assets/images/bar-chart.png";
import PieChart from '../components/charts/PieChart';
import { Logo } from "./Logo";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: [page-start] 10% [content-start] auto [content-end] 10% [page-end];
  animation: fadeIn 0.6s;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  max-width: 90vw;
  padding: 15px;
  grid-column-start: content-start;
  grid-column-end: content-end;
  animation: fadeIn 0.3s;
  background: #40c1560d;

    .info {
        line-height: 50px;
        h3 {
            text-align: center;
            padding-bottom: 20px;
        }
    }

    .energy-supplier {
        line-height: 50px;

        select {
            min-height: 40px;
            min-width: 257px;
            font-size: 18px;
            text-align: center;
        }
    }

    .externalInfo {
        line-height: 50px;
        padding: 20px;
    }
    
    .barchart {
        img {
            width: 415px;
            height: auto;
        }
    }
`;

const LineBreaker = styled.div`
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 100px;
    margin-right: 100px;
    border-style: inset;
    border-width: 1px;
    color: grey;
     
`;

class SummaryPage extends Component {


    state = {
        email: ''
    }


    componentDidMount() {
        // fetch data from db
        console.log('fetching data from DB...');
    }

    sendEmail = (e) => {
        // TODO add sending email to external service
        e.preventDefault();
        console.log(`email sent to ${this.state.email}...`);
    }

    render() {
        console.log(this.state.email);
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
                <Logo>
                    <img id="logo-img" src={logo} alt="logo" />
                    <h1 id="logo">GreenRenter</h1>
                </Logo>
                <Content>
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
                        <img src={barchart} alt="bar-chart" />
                    </div>
                    <div className="piechart">
                        <PieChart data={data} />
                    </div>
                    <div className="energy-supplier Field-container" >
                        <h3>Affordable energy suppliers</h3>
                        <label>Here are some affordable energy suppliers options: </label>
                        <br />
                        <select>
                            <option value="">Red Energy</option>
                            <option value="">AGL</option>
                            <option value="">Supplier</option>
                        </select>
                        <p>
                            Your estimated annual energy bill is : <strong>$912.45</strong>
                        </p>
                    </div>
                    <LineBreaker />
                    <div className="email">
                        <h3>Email my profile</h3>
                        <input className="email-input" type="email" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <button className="email-btn" onClick={this.sendEmail}> Send Email </button>
                        <br />
                        <br />
                        <label>
                            <input type="checkbox" />
                            Subscribe to our monthly newsletter to find out more about <br />sustainable living.
                        </label>
                    </div>
                    <div className="externalInfo">
                        <p>Find out more about sustainable living: </p>
                        <a href="https://www.greenrenters.org/">
                            <p>
                                What does energy efficient mean to you, your house and your energy bills
                            </p>
                        </a>
                    </div>
                </Content>
            </Wrapper>
        );
    }
}

export default SummaryPage;