import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "../components/button";
import Compras from "../components/compras";

const Wrapper = styled.section`
  padding: 2.1em;

  background: papayawhip;
`;
const Wrapper2 = styled.section`
  padding: 2.1em;
  background: peachpuff;
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
        <Compras />
      </Wrapper2>

      <Wrapper>
        <Duvidas>
          <h2>Principais Duvidas</h2>
          <p>
            -----------------------------------------------------------------
          </p>
          <h4>Quanto tempo para envio do meu treino?</h4>
          <p>
            Em até 5 dias uteis apos compra aprovada e o formulario preenchido.
          </p>
          <h4>Como acesso os treinos</h4>
          <p>Atráves do Mfit Personal</p>
          <h4>Como tiro dúvidas do meu treino</h4>
          <p>
            Terá contato comigo Diariamente em horario comercial no Whatsapp
            para qualquer dúvida no treino.
          </p>
        </Duvidas>
      </Wrapper>
    </div>
  );
}
