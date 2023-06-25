import aluno01 from "../public/antesdepois/aluno01.png"
import aluno02 from "../public/antesdepois/aluno02.png"
import aluno03 from "../public/antesdepois/aluno03.png"
import aluno04 from "../public/antesdepois/aluno04.png"
import aluno05 from "../public/antesdepois/aluno05.png"
import aluno06 from "../public/antesdepois/aluno06.png"
import professor from "../public/antesdepois/professor.png"
import Image from "next/image";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0d1f0a',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><Image src={aluno02} width={300} alt="foto" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Image src={aluno03} width={300} alt="foto" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Image src={aluno04} width={300} alt="foto" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Image src={professor} width={300} alt="foto" /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

