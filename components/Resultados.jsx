import Image from "next/image";
import AntesDepois from "../public/img/AntesDepois.png";

export default function Resultados() {
  return (
    <div>
      <h1>Veja resultados de alguns dos meus alunos </h1>
      <h4>
        Nossos Planos vão trazer flexibilidade e ao mesmo tempo resultados para
        sua saúde.
      </h4>
      <Image src={AntesDepois} alt="Resultados dos alunos"/>
    </div>
  );
}
