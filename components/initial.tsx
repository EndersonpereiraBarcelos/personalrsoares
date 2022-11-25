// import Image from "next/image";
// import Foto1 from "../public/personalrsoares/ftinitial.JPG";
// import Button from "./button";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function ContainerExample() {
//   return (
//     <Container>
//       <Row>
//         <Col fluid="xxl">
//           {" "}
//           <Image src={Foto1} height={360} width={300} />{" "}
//         </Col>
//         <Col fluid="xxl">
//           {" "}
//           <h1>
//             {" "}
//             Conquiste uma saúde digna e uma estética como sempre quis, através
//             de um treino feito especificamente para você{" "}
//           </h1>
//           <p>
//             {/* foto com aluno ou a só*/}
//             Ao longo do meu percurso como profissional da educação física-
//             personal trainer, vi muitas pessoas desistirem dos seus objetivos e
//             saúde por não terem um treino específico e feito para elas , e
//             sempre utilizarem treinos genéricos de academia. Aqui treinando
//             comigo lhe darei 100% de garantia, da otimização do seu tempo, saúde
//             , estética e qualidade de vida , acessando resultados que jamais
//             imaginaria.
//           </p>
//           <Button />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerExample;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import Foto1 from "../public/personalrsoares/ftinitial.JPG";
import Button from "./button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fffff3' : '#434343',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item> <Image src={Foto1} height={360} width={300} /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><h1>
             
             Conquiste uma saúde digna e uma estética como sempre quis, através
             de um treino feito especificamente para você{" "}
           </h1>
           <p>
             {/* foto com aluno ou a só*/}
             Ao longo do meu percurso como profissional da educação física-
             personal trainer, vi muitas pessoas desistirem dos seus objetivos e
             saúde por não terem um treino específico e feito para elas , e
             sempre utilizarem treinos genéricos de academia. Aqui treinando
             comigo lhe darei 100% de garantia, da otimização do seu tempo, saúde
             , estética e qualidade de vida , acessando resultados que jamais
             imaginaria.
           </p>
           <Button /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
