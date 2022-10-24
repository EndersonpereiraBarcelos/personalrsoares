import styled from "styled-components";
import Image from "next/image";
import FotoBanner from "../public/personalrsoares/banner01.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

<Col> <Image src={FotoBanner} /> </Col>
const Ajuste = styled.h3`
  padding: 0;
  margin: 0;
  text-align: center;
  background: #656565;
`;
function ContainerFluidExample() {
  return (
    <Container fluid="xxl">
      <Row>
        <Col> <Image src={FotoBanner} /> </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;