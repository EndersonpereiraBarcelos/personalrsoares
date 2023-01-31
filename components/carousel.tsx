import patriocinio from "../public/personalrsoares/Patriocinio.png"
import resultado from "../public/personalrsoares/Resultados.png"
import CTO from "../public/personalrsoares/ConsultoriaOnline.png"
import Image from "next/image";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col><Image src={patriocinio} /> </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample; */


// function AutoLayoutSizingExample() {
//   return (
//     <Container>
//       <Row>
        
//         <Col xs={4}><Image src={resultado} width={300} alt="foto"/></Col>
//         <Col><Image src={CTO} width={300}alt="foto"/></Col>
//       </Row>
//       <Row>
        
//       </Row>

//     </Container>
//   );
// }

// export default AutoLayoutSizingExample;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0d1f0a',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item> <Image src={resultado} width={300} alt="foto"/> </Item>
        </Grid>
        <Grid xs={8}>
          <Item><Image src={CTO} width={300}alt="foto"/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

