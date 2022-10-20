import LorenaAD from "../public/feedack/LorenaA_D.png"
import Image from "next/image";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container>
      <Row md={4}>
        <Col> <Image src={LorenaAD}/> lorena Bissoli </Col>
        <Col xs={6}><Image src={LorenaAD}/></Col>
        <Col><Image src={LorenaAD}/></Col>
        <Col><Image src={LorenaAD}/></Col>
      </Row>
      <Row md={4}>
        <Col> <Image src={LorenaAD}/> </Col>
        <Col xs={6}><Image src={LorenaAD}/></Col>
        <Col><Image src={LorenaAD}/></Col>
        <Col><Image src={LorenaAD}/></Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;