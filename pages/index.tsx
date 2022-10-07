import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Foto2 from "../public/personalrsoares/banner01.png";

import Duvidas from "./duvidas";
import Planos from "./planos";
import Algo from "../src/components/button";

const Banner = styled.h3`
  padding: 1.5em;
  text-align: center;
  background: peachpuff;
`;
const AlingText = styled.h1`
  text-align: right;
  font-size: 1rem;
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
        <AlingText>
          {/* foto com aluno ou a só*/}
          Há 3 anos acompanho a evolução dos alunos relacionados a constancia
          treinos, estetica corporal, emagrecimento, ganho de massa magra e
          qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves
          de treinos focados, potencializando seus resultados com treinos
          especificos e garantir sua constancia facilitando sua vida.
        </AlingText>

        <button>
          <a
            href="https://www.mfitpersonal.com.br/index?share=MTU4MTAyLzAvOS8w"
            target="next"
          >
            Compre agora
          </a>
        </button>
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
          <button>
            <a
              href="https://www.mfitpersonal.com.br/index?share=MTU4MTAyLzAvOS8w"
              target="next"
            >
              Compre agora
            </a>
          </button>
        </Wrapper2>
      </ContainerSobre>

      <Duvidas />
      <Planos />
    </div>
  );
}
