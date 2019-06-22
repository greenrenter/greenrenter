import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/Logo.svg";
import mainLogo from "../assets/images/logo-main.png";
import leafImage from "../assets/images/leaf.png";
import leaf2Image from "../assets/images/leaf2.png";
import leaf3Image from "../assets/images/leaf3.png";

import { Logo } from "./Logo";

const LandingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: [page-start] 10% [content-start] auto [content-end] 10% [page-end];
  animation: fadeIn 0.6s;

  #leaf1 {
    top: 50vh;
    left: -100px;
  }
  #leaf2 {
    top: -50%;
    right: -20%;
    transform: translate(-10px, -10px) rotate(-10deg);
  }
  #leaf3 {
    top: -50%;
    right: -20%;
  }
`;

const FindMoreBtn = styled.button`
  align-self: top;
  border: none;
  cursor: pointer;
  color: var(--color-green);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  border: solid var(--color-green) 5px;
  margin: 40px 20px;
`;

const Heading = styled.header`
  align-self: end;
  font-weight: black;
  font-size: 3em;
  margin-bottom: 20px;
`;

const LandingContent = styled.div`
  height: 100%;
  max-width: 90vw;
  padding: 100px 20px 30px 20px;
  grid-column-start: content-start;
  grid-column-end: content-end;
  text-align: center;
`;

const Leaf = styled.img`
  position: fixed;
  z-index: -9999;
  max-width: 1100px;
  animation: fadeIn 2s;
`;

const MainLogo = styled.img``;

class LandingPage extends Component {
  render() {
    return (
      <LandingWrapper>
        <Leaf id="leaf1" src={leafImage} />
        <Leaf id="leaf2" src={leaf2Image} />
        <Leaf id="leaf3" src={leaf3Image} />
        <Logo>
          <img id="logo-img" src={logo} alt="logo" />
          <h1 id="logo">GreenRenter</h1>
        </Logo>
        <LandingContent>
          <MainLogo src={mainLogo} />
          <Heading>
            How <span style={{ color: "#32975d" }}>Green</span> Are You?
          </Heading>
          <p className="label2">
            How much can you save on energy? Find out for <strong>free</strong>.
            It takes <strong>2 steps </strong>
            and only <strong>5 minutes</strong> of your time.
          </p>
          <Link to="/forms">
            <FindMoreBtn>Find Out</FindMoreBtn>
          </Link>
          <p>
            <small>
              Disclaimer: We highly value your privacy and any information
              collected with <br />
              not be shared with any 3rd parties. Figures provided will only be
              an estimation.
            </small>
          </p>
        </LandingContent>
      </LandingWrapper>
    );
  }
}

export default LandingPage;
