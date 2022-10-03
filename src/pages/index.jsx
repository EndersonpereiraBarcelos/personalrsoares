import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Duvidas from "./duvidas";
import Planos from "./planos";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function home() {
  return (
    <div>
      <Head>
        <title>personalr.soares</title>
        <h3>Logo do site forma de banner</h3>
        {/*
        colocar a foto do banner juntamento no top não desformatando
        */}
      </Head>
      <main>
        <h2>
          Obtenha treinos com resultados reais e conquiste o físico sonhado
        </h2>
        <p>
          {/* foto com aluno ou a só*/}
          Há 3 anos acompanho a evolução dos alunos relacionados a constancia
          treinos, estetica corporal, emagrecimento, ganho de massa magra e
          qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves
          de treinos focados, potencializando seus resultados com treinos
          especificos e garantir sua constancia facilitando sua vida.
        </p>
        <button>contrate agora</button>
      </main>
      <footer>
        {/* Uma foto a só*/}
        <h1>Sobre mim</h1>
        <p>
          Olá, Sou Ricardo soares, Professor de educação física/Personal
          trainer... Atuo 3 anos com treinamento de musculação de diversas
          maneiras ajudando pessoas a elevar o nível no que compete a saúde,
          funcionalidade e estética corporal. Especialista no trabalho de
          Emagrecimento e Hipertrofia
        </p>
        <button>Contrate Plano</button>
      </footer>

      <Duvidas />
      <Planos />
    </div>
  );
}
