import { Container, Row, Col } from "reactstrap";

const SectionServices = () => {
  return (
    <div className="section landing-section">
      <Container>
        {/* <Row>
          <Col className="ml-auto mr-auto" md="12">
            <p style={{ textAlign: "center", color: "black" }}>
              Saber hablar inglés ya no es un lujo, sino una necesidad. Es
              importante seguir practicando el inglés aún después de haber
              terminado un curso de gramática, ya que la única manera de
              dominarlo es usándolo frecuentemente. Más que una clase de inglés
              tradicional, ofrecemos el espacio para que puedas desenvolverte en
              la conversación con maestros expertos en el tema y en un ambiente
              ameno, en el cual podrás mejorar tu pronunciación, estructura y
              vocabulario.
            </p>
            <br />
          </Col>
        </Row> */}
        <Row>
          <Col md="6">
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Saber hablar inglés ya no es un lujo, sino una necesidad. Es
              importante seguir practicando el inglés aún después de haber
              terminado un curso de gramática, ya que la única manera de
              dominarlo es usándolo frecuentemente.
            </p>
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              <br />
              Más que una clase de inglés tradicional, ofrecemos el espacio para
              que puedas desenvolverte en la conversación con maestros expertos
              en el tema y en un ambiente ameno, en el cual podrás mejorar tu
              pronunciación, estructura y vocabulario.
            </p>
          </Col>
          <Col md="6">
            <img
              style={{ height: "auto", width: "100%" }}
              alt="english-importance"
              src={
                require("assets/img/pexels-vlada-karpovich-4050388.jpg").default
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionServices;
