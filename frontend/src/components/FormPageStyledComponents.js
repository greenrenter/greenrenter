import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: [page-start] 10% [content-start] auto [content-end] 10% [page-end];
  animation: fadeIn 0.6s;
  text-align: center;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 90vw;
  padding: 15px;
  grid-column-start: content-start;
  grid-column-end: content-end;
  animation: fadeIn 0.3s;
  background: #40c1560d;
`;

export const StatusBar = styled.div`
  margin: 50px 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .tick-wrapper {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin-right: 3px;
    border: none;
    background-color: #95d976;
    display: inline-flex;
    align-items: center;
  }

  #tick {
    margin: auto;
    color: white;
  }

  .circle {
    border-radius: 50%;
    background-color: white;
    border: 3px #4c534c solid;
    width: 27px;
    height: 27px;
    margin-right: 4px;
  }

  .dot {
    border-radius: 50%;
    background-color: #4c534c;
    width: 6px;
    height: 6px;
    margin-right: 4px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0;
  span {
    text-decoration: underline;
  }
`;

export const FormWrapper = styled.div`
  padding: 15px;
`;

export const Appliance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 10%;
  .appliance-name {
    min-width: 250px;
    text-align: left;
  }
  .button-tool {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }
  .button-tool:hover {
    opacity: 1;
  }
  .star {
    margin-right: 7px;
    transition-duration: 0.1s;
    transition-delay: 0.1s;
  }
  .star:hover {
    transform: scale(0.8, 0.8);
  }
`;
