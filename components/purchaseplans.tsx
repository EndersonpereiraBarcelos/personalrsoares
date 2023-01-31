import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "./button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#0d1f0a",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>
            {" "}
            <h4> Plano Start Mensal</h4>
            <p>
              Nesse plano o aluno terá direito a um mês de acompanhamento, uma
              prescrição de treino individualizada, suporte via whatsapp e o
              treino enviado pelo MFIT Personal com mais de 1000 vídeos de
              exercícios disponíveis.
            </p>
            <Button />
          </Item>
        </Grid>
        <Grid xs>
          <Item>
            {" "}
            <h4>Plano Trimestral</h4>
            <p>
              Nesse plano o aluno terá direito a 3 meses de acompanhamento, 1
              prescrição de treino individualizada a cada mês, suporte via
              whatsapp e o treino enviado pelo MFIT personal com mais de 1000
              vídeos de exercícios disponíveis. Bônus: Um treino pra ser feito
              em qualquer lugar + avaliação física.
            </p>
            <Button />
          </Item>
        </Grid>
        <Grid xs>
          <Item>
            <h4>Plano semestral</h4>
            <p>
              Nesse plano o aluno terá direito a 6 meses de acompanhamento, 1
              prescrição de treino individualizada a cada mês, suporte via
              whatsapp e o treino enviado pelo MFIT personal com mais de 1000
              vídeos de exercícios disponíveis. Bônus: Dois treinos pra ser
              feito em qualquer lugar + avaliação física + plano alimentar.
            </p>
            <Button />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
