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
          {" "}
          <Image src={Foto1} height={360} width={300} />
        </Col>
        <Col>
          <h1>
            Obtenha treinos com resultados reais e conquiste o físico sonhado
          </h1>
          <p>
            {/* foto com aluno ou a só*/}
            Há 3 anos acompanho a evolução dos alunos relacionados a constancia
            treinos, estetica corporal, emagrecimento, ganho de massa magra e
            qualidade de vida e saúdea. Te ensino a otimizar o seu tempo atráves
            de treinos focados, potencializando seus resultados com treinos
            especificos e garantir sua constancia facilitando sua vida.
          </p>
          <Button/>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
