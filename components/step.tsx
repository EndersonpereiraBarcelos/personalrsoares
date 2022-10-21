import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function ResponsiveExample() {
  return (
    <Container fluid>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col sm>
          <h3>Compra</h3>
          <p>
            Na contratação de um dos planos você será redirecionado a uma página de compra dos planos da mfit Personal. Após efetuar o pagamento for aprovado você receberá um e-mail com login e senha da plataforma precisará instalar o aplicativo ou acessar via navegador. preencha formulario disponivel e receberá uma mensagem de boas vindas
          </p>
        </Col>
        <Col sm>
          <h3>Planejamento</h3>
          <p>
            Após o preenchimento do formulário o Plano de treino será montado por mim em até 5 dias úteis após o pagamento

          </p>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col sm>
          <h3>Entrega</h3>
          <p>
            O treino estará disponível na plataforma mfit personal, poderá acessar com login e senha já criado
          </p>
        </Col>
        <Col sm></Col>
        <Col sm>
          <h3>Suporte</h3>
          <p>
            Toda dúvida que surgir você pode contar comigo através do suporte via whatsapp.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveExample;
