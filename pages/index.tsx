import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import FotoPrincipal from "../components/fotoPrincipal";
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
          <FotoPrincipal />
          <h1>
            Obtenha treinos com resultados reais e conquiste o físico sonhado
          </h1>
          <p>
            {/* foto com aluno ou a só*/}
            Há 3 anos acompanho a evolução dos alunos relacionados a constancia
            treinos, estetica corporal, emagrecimento, ganho de massa magra e
            qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves
            de treinos focados, potencializando seus resultados com treinos
            especificos e garantir sua constancia facilitando sua vida.
          </p>
          <Button />
        </AjusteTxt>
      </Wrapper>
      <Wrapper2>
        <FotoPrincipal />
        <h1>Sobre mim</h1>
        <p>
          Olá, Sou Ricardo soares, Professor de educação física/Personal
          trainer... Atuo 3 anos com treinamento de musculação de diversas
          maneiras ajudando pessoas a elevar o nível no que compete a saúde,
          funcionalidade e estética corporal. Especialista no trabalho de
          Emagrecimento e Hipertrofia
        </p>

        <Button />
      </Wrapper2>
      <Duvidas />
      <Planos />
    </div>
  );
}
