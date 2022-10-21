import styled from "styled-components";
import Passo from "../components/step";
import Carousel from "../components/carousel"
import Beforeafter from "../components/beforeafter"

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
        <Carousel />
        <h4>
          Nossos Planos vão trazer flexibilidade e ao mesmo tempo resultados
          para sua saúde.
        </h4>
      </Wrapper2>
      <Wrapper>
        <h1>Antes e depois dos nossos clientes </h1>
        <Beforeafter />
      </Wrapper>
    </div>
  );
}
