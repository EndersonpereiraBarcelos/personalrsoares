import Image from "next/image";
import Patriocinio from "../public/img/Patriocinio.png";
import styles from "../styles/Principal.module.css";

export default function Principal() {
  return (
    <div className={styles.textoall}>
      <Image
        className={styles.Patriocinio}
        src={Patriocinio}
        alt="Patriocinio"
        placeholder="blur"
      />
      <h1 className={styles.tittle}>
        Obtenha treinos com resultados reais e conquiste o físco sonhado como
        sempre sonhou.
      </h1>

      <p className={styles.subtittle}>
        Há 3 anos acompanho a evolução dos alunos relacionados a constancia
        treinos, estetica corporal, emagrecimento, ganho de massa magra e
        qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves de
        treinos focados, potencializando seus resultados com treinos especificos
        e garantir sua constancia facilitando sua vida.
      </p>
      <button className={styles.buttoncompra}>Contrate Plano</button>
    </div>
  );
}
