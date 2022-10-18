import Image from "next/image";
import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Button from "./button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Sobre mim</h1>
          <p>
            Olá, Sou Ricardo soares, Professor de educação física/Personal
            trainer... Atuo 3 anos com treinamento de musculação de diversas
            maneiras ajudando pessoas a elevar o nível no que compete a saúde,
            funcionalidade e estética corporal. Especialista no trabalho de
            Emagrecimento e Hipertrofia
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
