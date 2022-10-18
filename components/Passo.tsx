import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveExample() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
        <h3>Compra</h3>
        <p>
          Na contratação de uns dos planos você sera redirecionado, a uma pagina
          de compra dos planos da mfit Personal. Após afetuar o pagamentoe for
          aprovado você recebera um e-mail com login e senha da platforma
          precisara instalar o aplicativo ou acessar via navegador. preencha
          formulario disponivel e recebera uma mensagem de boas vindas
        </p>
        </Col>
        <Col xs={6} md={4}>
        <h3>Planejamento</h3>
        <p>
          Após o preechimento do formulario o Plano de treino sera montado por
          mim em até 5 dias uteis após o pagamento
        </p>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
        <h3>Entrega</h3>
        <p>
          O treino estara disponivel na plataforma mfit personal, podera acessar
          com login e senha já criado
        </p>
        </Col>
        <Col xs={6} md={4}>
          
        </Col>
        <Col xs={6} md={4}>
        <h3>Suporte</h3>
        <p>
          Toda dúvida que surgir você pode contar comigo através do suporte via
          whatsapp.
        </p>
        </Col>
      </Row>

    </Container>
  );
}

export default ResponsiveExample;