import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2.1em;

  background: papayawhip;
`;
const Wrapper2 = styled.section`
  padding: 2.1em;
  background: peachpuff;
`;

export default function duvidas() {
  return (
    <div>
      <Wrapper>
        <h1>Passo a Passo</h1>
        <ul>
          <li>Compra</li>
          <p>
            Na contratação de uns dos planos você sera redirecionado, a uma
            pagina de compra dos planos da mfit Personal. Após afetuar o
            pagamentoe for aprovado você recebera um e-mail com login e senha da
            platforma, precisara instalar o aplicativo ou acessar via navegador.
            preencha formulario disponivel e recebera uma mensagem de boas
            vindas
          </p>
          <li>Planejamento</li>
          <p>
            Após o preechimento do formulario o Plano de treino sera montado por
            mim em até 5 dias uteis após o pagamento
          </p>
          <li>Entrega</li>
          <p>
            O treino estara disponivel na plataforma mfit personal, podera
            acessar com login e senha já criado
          </p>
          <li>Suporte</li>
          <p>
            Toda dúvida que surgir você pode contar comigo através do suporte
            via whatsapp.
          </p>
        </ul>
      </Wrapper>
      <div>
        <Wrapper2>
          <h1>Veja resultados de alguns dos meus alunos </h1>
          <h1>Colocar imagens do alunos </h1>
          <h4>
            Nossos Planos vão trazer flexibilidade e ao mesmo tempo resultados
            para sua saúde.
          </h4>
        </Wrapper2>
        <div>
          <Wrapper>
            <h1>Nossos Clientes </h1>
            <p>carrosel com foto do cliente e experiencia dele(a) 4 clie</p>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
