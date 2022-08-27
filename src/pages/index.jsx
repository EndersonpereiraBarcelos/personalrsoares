import React from "react";

import Navbar from "../components/Navbar";
import Principal from "../components/Principal";
import Sobre from "../components/Sobre";
import Passo from "../components/Passopasso";
import Resultados from "../components/Resultados";
import Clientes from "../components/Clientes";
import Planos from "../components/Planos";
import Duvidas from "../components/Duvidas";
import Image from "next/dist/client/image";

export default function Index() {
  return (
    <div>
      <title>Personal.rsoares</title>

      <Navbar />
      <Principal />
      <Sobre />
      <Passo />
      <Resultados />
      <Clientes />
      <Planos />
      <Duvidas />
    </div>
  );
}
