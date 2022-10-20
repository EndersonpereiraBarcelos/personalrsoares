import Image from "next/image";
import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Button from "./button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Sobre mim</h1>
          <p>
          Olá, sou Ricardo Sales Soares, professor de educação física na área de bacharel, atuo há mais de 5 anos com treinamento de musculação e outros, ajudo pessoas quaisquer a conquistarem seus objetivos através do treinamento, isso inclui, saúde e bem estar, estética e atletas para competições, sou especialista no trabalho de emagrecimento e hipertrofia. 

          </p>
          <Button />
        </Col>
        <Col>
          <Image src={Foto1} height={360} width={300} />
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
