import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Foto2 from "../public/personalrsoares/banner01.png";

import Duvidas from "./duvidas";
import Planos from "./planos";
import Button from "../src/components/button";

const Banner = styled.h3`
  padding: 0;
  margin: 0;
  text-align: center;
  background: peachpuff;
`;
const AlingText = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  vertical-align: text-top;
  word-wrap: normal;
`;

const AlingText2 = styled.p`
  text-align: justify;
  font-size: 1.1rem;
`;
const Wrapper = styled.section`
  padding: 0.9em;
  text-align: right;
  background: papayawhip;

  align-items: center;
  vertical-align: text-top;
`;
const Wrapper2 = styled.section`
  padding: 0.9em;
  background: peachpuff;
`;

const ContainerSobre = styled.div`
  display: flex;
  align-items: center;
  vertical-align: text-top;
`;

export default function Home() {
  return (
    <div className="container">
      <Banner>
        <Image src={Foto2} height={2000} />
      </Banner>

      <Wrapper>
        <Image src={Foto1} height={480} width={400} />

        {/*
        colocar a foto do banner juntamento no top não desformatando
        */}

        <AlingText>
          Obtenha treinos com resultados reais e conquiste o físico sonhado
        </AlingText>
        <AlingText2>
          {/* foto com aluno ou a só*/}
          Há 3 anos acompanho a evolução dos alunos relacionados a constancia
          treinos, estetica corporal, emagrecimento, ganho de massa magra e
          qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves
          de treinos focados, potencializando seus resultados com treinos
          especificos e garantir sua constancia facilitando sua vida.
        </AlingText2>
        <Button />
      </Wrapper>
      <title>personalr.soares</title>

      {/* Uma foto a só*/}
      <ContainerSobre>
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
      </ContainerSobre>

      <Duvidas />
      <Planos />
    </div>
  );
}
