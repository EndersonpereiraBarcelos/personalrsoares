import styles from "../styles/PassoPasso.module.css";

export default function Passopasso() {
  return (
    <div >
      <h1>Passo a Passo</h1>
    
      <h3 className={styles.PassoCompra}>Compra</h3>
      <p>
        Na contratação de uns dos planos você sera redirecionado, a uma pagina
        de compra dos planos da mfit Personal. Após afetuar o pagamentoe for
        aprovado você recebera um e-mail com login e senha da platforma,
        precisara instalar o aplicativo ou acessar via navegador. preencha
        formulario disponivel e recebera uma mensagem de boas vindas
      </p>
      <h3 className={styles.PassoPlanejamento}>Planejamento</h3>
      <p>
        Após o preechimento do formulario o Plano de treino sera montado por mim
        em até 5 dias uteis após o pagamento
      </p>

      <h3 className={styles.PassoEntrega}>Entrega</h3>
      <p>
        O treino estara disponivel na plataforma mfit personal, podera acessar
        com login e senha já criado
      </p>

      <h3 className={styles.PassoSuporte}>Suporte</h3>
      <p>
        Toda dúvida que surgir você pode contar comigo através do suporte via
        whatsapp.
      </p>
      </div>
  );
}
