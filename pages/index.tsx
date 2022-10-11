import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Banner from "../src/components/Banner"
import Duvidas from "./duvidas";
import Planos from "./planos";
import Button from "../src/components/button";


const Wrapper = styled.section`
  padding: 0.9em;
  
  background: papayawhip;
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

  justify-content:right;
  display: inline-block;
  float: right;

`;

export default function Home() {
  return (
    <div>
      <Banner/>

      <Wrapper>

        {/*
        colocar a foto do banner juntamento no top não desformatando
      */}
        <AjusteTxt>
      <Image src={Foto1} height={480} width={400} />
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

      {/* Uma foto a só*/}

      <Wrapper2>
        <Image src={Foto1} height={480} width={400} />
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

      {/*  <Duvidas />
      <Planos /> */}
    </div>
  );
}
