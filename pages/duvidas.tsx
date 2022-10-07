import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2.1em;

  vertical-align: baseline;
  background: papayawhip;
`;
const Wrapper2 = styled.section`
  padding: 2.1em;
  background: peachpuff;
`;

const AlignSubText = styled.p`
  font-size: 1.1rem;
  text-align: justify;
`;

const AlignSubText2 = styled.p`
  font-size: 1.1rem;
  text-align: justify;
  text-align: right;
`;
const Tittle = styled.h1`
  text-align: center;
`;
const Subtittle = styled.h3`
  text-align: right;
`;

export default function duvidas() {
  return (
    <div>
      <Wrapper>
        <Tittle>Passo a Passo</Tittle>
        
          <h3>Compra</h3>
          <br/>
          <AlignSubText>
            Na contratação de uns dos planos você sera redirecionado, a uma
            pagina de compra dos planos da mfit Personal. Após afetuar <br /> o
            pagamentoe for aprovado você recebera um e-mail com login e senha da
            platforma precisara instalar o aplicativo ou acessar via navegador.
            preencha formulario disponivel e recebera uma mensagem de boas
            vindas
          </AlignSubText>
          <h3>Planejamento</h3>
          <AlignSubText>
            Após o preechimento do formulario o Plano de treino sera montado por
            mim em até 5 dias uteis após o pagamento
          </AlignSubText>
          <Subtittle>Entrega</Subtittle>
          <AlignSubText2>
            O treino estara disponivel na plataforma mfit personal, podera
            acessar com login e senha já criado
          </AlignSubText2>
          <Subtittle>Suporte</Subtittle>
          <AlignSubText2>
            Toda dúvida que surgir você pode contar comigo através do suporte
            via whatsapp.
          </AlignSubText2>
        
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
