import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Passo from "../components/Passo";
import FotoPrincipal from "../components/fotoPrincipal";

const Wrapper = styled.section`
  padding: 2.1em;
  vertical-align: baseline;
  background: papayawhip;

  h1 {
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    text-align: justify;
  }
`;
const Wrapper2 = styled.section`
  padding: 1.1em;
  background: peachpuff;
`;

const Subtittle = styled.h3`
  text-align: right;
`;

export default function duvidas() {
  return (
    <div>
      <Wrapper>
        <h1>Passo a Passo</h1>

        <Passo />
      </Wrapper>
      <Wrapper2>
        <h1>Veja resultados de alguns dos meus alunos </h1>
        <FotoPrincipal />
        <h4>
          Nossos Planos vão trazer flexibilidade e ao mesmo tempo resultados
          para sua saúde.
        </h4>
      </Wrapper2>
      <Wrapper>
        <h1>Nossos Clientes </h1>
        <FotoPrincipal />
        <p>carrosel com foto do cliente e experiencia dele(a) 4 clie</p>
      </Wrapper>
    </div>
  );
}
