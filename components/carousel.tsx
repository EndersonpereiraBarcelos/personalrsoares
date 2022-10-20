import patriocinio from "../public/personalrsoares/Patriocinio.png"
import resultado from "../public/personalrsoares/Resultados.png"
import CTO from "../public/personalrsoares/ConsultoriaOnline.png"
import Image from "next/image";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        <Col ><Image src={patriocinio} /> </Col>
        <Col xs={4}><Image src={resultado} /></Col>
        <Col><Image src={CTO} /></Col>
      </Row>
      <Row>
        <Col><Image src={CTO} /></Col>
        <Col xs><Image src={resultado} /></Col>
        <Col><Image src={patriocinio} /></Col>
      </Row>

    </Container>
  );
}

export default AutoLayoutSizingExample;
