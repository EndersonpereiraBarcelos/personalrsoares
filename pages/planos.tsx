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
  text-align: justify;
  text-align: center;
  font-size: 1rem;
  
  
`;

export default function planos() {
  return (
    <div>
      <Wrapper>
        <h1>Escolha Seu Plano</h1>
        <h3>Selecione um plano abaixo e aproveite agora a oprtunidade</h3>

        <h4> Plano Start Mensal</h4>
        <p>
          Nesse plano o aluno terá direito a um mês de acompanhamento, uma
          prescrição de treino individualizada, suporte via whats app e o treino
          enviado pelo app Ptrainer com mais de 300 vídeos de exercícios
          disponíveis.
        </p>
        <button>Entre agora</button>
        <h4>Plano Trimestral</h4>
        <p>
          Nesse plano o aluno terá direito a 3 meses de acompanhamento, 1
          prescrição de treino individualizada a cada mês, suporte via whats app
          e o treino enviado pelo app Ptrainer com mais de 300 vídeos de
          exercícios disponíveis. Bônus: Um treino pra ser feito em qualquer
          lugar + 1 link de desconto no primeiro mês por 4,99 na academia
          digital Free Fitness (A qual sou sócio-afiliado)
        </p>
        <button>Entre agora</button>

        <h4>Plano HealthTeam</h4>
        <p>
          Nesse plano o aluno terá direito a 6 meses de acompanhamento, 1
          prescrição de treino individualizada a cada mês, suporte via whats app
          e o treino enviado pelo app Ptrainer com mais de 300 vídeos de
          exercícios disponíveis. Bônus: Um treino pra ser feito em qualquer
          lugar + 1 link de desconto no primeiro mês por 4,99, na academia
          digital Free Fitness (A qual sou sócio-afiliado).
        </p>
        <button>Entre agora</button>
      </Wrapper>

      <div>
        <Wrapper2>
          <h2>Principais Duvidas</h2>
          <p>--------------------------------------------------</p>
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
        </Wrapper2>
      </div>
    </div>
  );
}
