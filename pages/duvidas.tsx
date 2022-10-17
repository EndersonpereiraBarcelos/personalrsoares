import React from "react";
import Image from "next/image";
import styled from "styled-components";

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

        <h3>Compra</h3>
        <p>
          Na contratação de uns dos planos você sera redirecionado, a uma pagina
          de compra dos planos da mfit Personal. Após afetuar o pagamentoe for
          aprovado você recebera um e-mail com login e senha da platforma
          precisara instalar o aplicativo ou acessar via navegador. preencha
          formulario disponivel e recebera uma mensagem de boas vindas
        </p>
        <h3>Planejamento</h3>
        <p>
          Após o preechimento do formulario o Plano de treino sera montado por
          mim em até 5 dias uteis após o pagamento
        </p>
        <h3>Entrega</h3>
        <p>
          O treino estara disponivel na plataforma mfit personal, podera acessar
          com login e senha já criado
        </p>
        <h3>Suporte</h3>
        <p>
          Toda dúvida que surgir você pode contar comigo através do suporte via
          whatsapp.
        </p>
      </Wrapper>
      <Wrapper2>
        <h1>Veja resultados de alguns dos meus alunos </h1>

        <FotoPrincipal />
        <FotoPrincipal />
        <FotoPrincipal />
        <FotoPrincipal />

        <h4>
          Nossos Planos vão trazer flexibilidade e ao mesmo tempo resultados
          para sua saúde.
        </h4>
      </Wrapper2>
      <Wrapper>
        <h1>Nossos Clientes </h1>
        <FotoPrincipal />
        <FotoPrincipal />
        <FotoPrincipal />
        <FotoPrincipal />
        <p>carrosel com foto do cliente e experiencia dele(a) 4 clie</p>
      </Wrapper>
    </div>
  );
}
