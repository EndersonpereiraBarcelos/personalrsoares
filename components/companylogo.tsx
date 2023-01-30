// import styled from "styled-components";
// import Image from "next/image";
// import FotoBanner from "../public/personalrsoares/banner01.png";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Ajuste = styled.h3`
//   padding: 0;
//   margin: 0;
//   text-align: center;
//   background: #656565;
// `;
// function ContainerFluidExample() {
//   return (
//     <Container fluid="xxl">
//       <Row>
//         <Col> <Image src={FotoBanner} /> </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerFluidExample;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import FotoBanner from "../public/personalrsoares/banner01.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid>
          <Item>
            <Image src={FotoBanner}  width={1480} height={200} alt="foto"/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
