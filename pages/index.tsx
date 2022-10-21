import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Initial from "../components/initial";
import Aboutme from "../components/aboutme";
import Companylogo from "../components/companylogo";
import Doubt from "./doubt";
import Plans from "./plans";

const Wrapper = styled.section`
  padding: 0.9em;
  background-color: papayawhip;
  align-items: center;
  vertical-align: text-top;

  h1 {
    text-align: left;
    font-size: 1.2rem;
    vertical-align: text-top;
    word-wrap: normal;
  }
  p {
    text-align: justify;
    font-size: 1.1rem;
  }
`;
const Wrapper2 = styled.section`
  padding: 0.9em;
  background: peachpuff;
`;

const Adjustment = styled.div`
  justify-content: right;
  display: inline-block;
`;

export default function Home() {
  return (
    <div>
      <Companylogo />
      <Wrapper>
        <Adjustment>
          <Initial />
        </Adjustment>
      </Wrapper>
      <Wrapper2>
        <Aboutme />
      </Wrapper2>
      <Doubt />
      <Plans />
    </div>
  );
}
