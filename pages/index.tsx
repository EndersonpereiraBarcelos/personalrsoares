import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import FotoPadrao from "../components/fotoFile";
import FotoPadrao2 from "../components/fotoFile2";
import Banner from "../components/banner";
import Duvidas from "./duvidas";
import Planos from "./planos";
import Button from "../components/button";

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

const AjusteTxt = styled.div`
  justify-content: right;
  display: inline-block;
`;

export default function Home() {
  return (
    <div>
      <Banner />
      <Wrapper>
        <AjusteTxt>
          <FotoPadrao />
        </AjusteTxt>
      </Wrapper>
      <Wrapper2>
        <FotoPadrao2 />
        
      </Wrapper2>
      <Duvidas />
      <Planos />
    </div>
  );
}
