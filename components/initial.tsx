import Image from "next/image";
import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Button from "./button";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col sm={5}> <Image src={Foto1} height={360} width={300} /> </Col>
        <Col> <h1> Conquiste uma saúde digna e uma estética como sempre quis, através de um treino feito especificamente para você </h1>
          <p>
            {/* foto com aluno ou a só*/}
            Ao longo do meu percurso como profissional da educação física- personal trainer, vi muitas pessoas desistirem dos seus objetivos e saúde por não terem um treino específico e feito para elas , e sempre utilizarem treinos genéricos de academia. Aqui treinando comigo lhe darei 100% de garantia, da otimização do seu tempo, saúde , estética e qualidade de vida , acessando resultados que jamais imaginaria.
          </p>
          <Button />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;