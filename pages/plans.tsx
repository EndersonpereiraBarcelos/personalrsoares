import React from "react";
import styled from "styled-components";
import Purchaseplans from "../components/purchaseplans";

const Wrapper = styled.section`
  padding: 2.1em;
  background: #979797;;
  color: #ffffff;
`;
const Wrapper2 = styled.section`
  padding: 2.1em;
  background: #979797;;
  color: #ffffff;
  text-align: justify;
  text-align: center;
  font-size: 1rem;
`;

const Duvidas = styled.section`
  text-align: center;
  font-size: 0.7rem;
  word-wrap: normal;

  h4 {
    font-size: 0.8rem;
  }
`;


export default function planos() {
  return (
    <div>
      <Wrapper2>
        <h1>Escolha Seu Plano</h1>
        <h3>Selecione um plano abaixo e aproveite agora a oprtunidade</h3>
        <br />
        <Purchaseplans />
      </Wrapper2>

      <Wrapper>
        <Duvidas>
          <h2>Principais Dúvidas</h2>
          <p>
            -----------------------------------------------------------------
          </p>
          <h4>Quanto tempo para envio do meu treino?</h4>
          <p>
            Em até 5 dias úteis após compra aprovada e o formulário preenchido.
          </p>
          <h4>Como acesso os treinos?</h4>
          <p>Atráves do Mfit Personal</p>
          <h4>Como tiro dúvidas do meu treino?</h4>
          <p>
            Terá contato comigo diariamente em horário comercial no Whatsapp para qualquer dúvida no treino.
          </p>
        </Duvidas>
      </Wrapper>
    </div>
  );
}
