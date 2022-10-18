import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "./button";

function OrderingExample() {
  return (
    <Container>
      <Row>
        <Col xs>
          {" "}
          <h4> Plano Start Mensal</h4>
          <p>
            Nesse plano o aluno terá direito a um mês de acompanhamento, uma
            prescrição de treino individualizada, suporte via whats app e o
            treino enviado pelo app Ptrainer com mais de 300 vídeos de
            exercícios disponíveis.
          </p>
          <Button />
        </Col>
        <Col xs={{ order: 12 }}>
          <h4>Plano Trimestral</h4>
          <p>
            Nesse plano o aluno terá direito a 3 meses de acompanhamento, 1
            prescrição de treino individualizada a cada mês, suporte via whats
            app e o treino enviado pelo app Ptrainer com mais de 300 vídeos de
            exercícios disponíveis. Bônus: Um treino pra ser feito em qualquer
            lugar + 1 link de desconto no primeiro mês por 4,99 na academia
            digital Free Fitness (A qual sou sócio-afiliado)
          </p>
          <Button />
        </Col>
        <Col xs={{ order: 1 }}>
          <h4>Plano HealthTeam</h4>
          <p>
            Nesse plano o aluno terá direito a 6 meses de acompanhamento, 1
            prescrição de treino individualizada a cada mês, suporte via whats
            app e o treino enviado pelo app Ptrainer com mais de 300 vídeos de
            exercícios disponíveis. Bônus: Um treino pra ser feito em qualquer
            lugar + 1 link de desconto no primeiro mês por 4,99, na academia
            digital Free Fitness (A qual sou sócio-afiliado).
          </p>
          <Button />
        </Col>
      </Row>
    </Container>
  );
}

export default OrderingExample;
