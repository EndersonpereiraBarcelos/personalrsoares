import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#0d1f0a",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <h3>Compra</h3>
            <p>
              Na contratação de um dos planos você será redirecionado a uma
              página de compra dos planos da mfit Personal. Após efetuar o
              pagamento for aprovado você receberá um e-mail com login e senha
              da plataforma precisará instalar o aplicativo ou acessar via
              navegador. preencha formulario disponivel e receberá uma mensagem
              de boas vindas
            </p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>Planejamento</h3>
            <p>
              Após o preenchimento do formulário o Plano de treino será montado
              por mim em até 5 dias úteis após o pagamento
            </p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>Entrega</h3>
            <p>
              O treino estará disponível na plataforma mfit personal, poderá
              acessar com login e senha já criado
            </p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>Suporte</h3>
            <p>
              {" "}
              Toda dúvida que surgir você pode contar comigo através do suporte
              via whatsapp.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// export default function RowAndColumnSpacing() {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={6}>
//           <Item>
//             <h3>Compra</h3>
//             <p>
//               Na contratação de um dos planos você será redirecionado a uma
//               página de compra dos planos da mfit Personal. Após efetuar o
//               pagamento for aprovado você receberá um e-mail com login e senha
//               da plataforma precisará instalar o aplicativo ou acessar via
//               navegador. preencha formulario disponivel e receberá uma mensagem
//               de boas vindas
//             </p>
//           </Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>
//             <h3>Planejamento</h3>
//             <p>
//               Após o preenchimento do formulário o Plano de treino será montado
//               por mim em até 5 dias úteis após o pagamento
//             </p>
//           </Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>
//             <h3>Entrega</h3>
//             <p>
//               O treino estará disponível na plataforma mfit personal, poderá
//               acessar com login e senha já criado
//             </p>
//           </Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>
//             <h3>Suporte</h3>
//             <p>
//               Toda dúvida que surgir você pode contar comigo através do suporte
//               via whatsapp.
//             </p>
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
