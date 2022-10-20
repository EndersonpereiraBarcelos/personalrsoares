import lorena from "../public/feedack/LorenaA_D.png"
import Image from "next/image";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        <Col ><Image src={lorena}/> </Col>
        <Col xs={4}><Image src={lorena}/></Col>
        <Col><Image src={lorena}/></Col>
      </Row>
      <Row>
        <Col><Image src={lorena}/></Col>
        <Col xs><Image src={lorena}/></Col>
        <Col><Image src={lorena}/></Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;
