import aluno01 from "../public/antesdepois/aluno01.png"
import aluno02 from "../public/antesdepois/aluno02.png"
import aluno03 from "../public/antesdepois/aluno03.png"
import aluno04 from "../public/antesdepois/aluno04.png"
import aluno05 from "../public/antesdepois/aluno05.png"
import aluno06 from "../public/antesdepois/aluno06.png"
import professor from "../public/antesdepois/professor.png"
import Image from "next/image";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        <Col ><Image src={professor}  width={300} alt="foto"/> </Col>
        <Col xs={4}><Image src={aluno01} width={300} alt="foto" /></Col>
        <Col><Image src={aluno02} width={300} alt="foto" /></Col>
      </Row>
      <Row>
        <Col><Image src={aluno03} width={300}  alt="foto"/></Col>
        <Col xs><Image src={aluno04} width={300} alt="foto"/></Col>
        <Col><Image src={aluno05} width={300} alt="foto"/></Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;

