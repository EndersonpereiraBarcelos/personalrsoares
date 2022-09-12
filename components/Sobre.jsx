import Image from "next/image";
import Patriocinio from "../public/img/Patriocinio.png";
import styles from "../styles/Sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.sobreall}>
      <Image src={Patriocinio} alt="Patriocinio" placeholder="blur" />
      <h1>Sobre mim</h1>
      <p>
        Olá, Sou Ricardo soares, Professor de educação física/Personal
        trainer... Atuo 3 anos com treinamento de musculação de diversas
        maneiras ajudando pessoas a elevar o nível no que compete a saúde,
        funcionalidade e estética corporal. Especialista no trabalho de
        Emagrecimento e Hipertrofia
      </p>
      <button className={styles.buttoncompra}>Contrate Plano</button>
    </div>
  );
}
