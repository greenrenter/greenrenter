import styled from "styled-components";

// Contains listing of common styled components

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: [page-start] 10% [content-start] auto [content-end] 10% [page-end];
  animation: fadeIn 0.6s;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 90vw;
  padding: 15px;
  grid-column-start: content-start;
  grid-column-end: content-end;
  animation: fadeIn 0.3s;
`;

export const Logo = styled.div`
  height: 100%;
  max-width: 90vw;
  padding: 15px;
  display: flex;
  flex-direction: row;
  grid-column-start: content-start;
  grid-column-end: content-end;
  align-items: center;
  justify-content: center;
`;
