import { Container, Row, Col } from "reactstrap";
const SectionX = () => {
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="12">
          <h2 className="title text-center">¿Por qué elegirnos?</h2>
          <br />
        </Col>
      </Row>
      <Row>
        <Col md="3">
          <div className="info">
            <div className="icon icon-info">
              <i className="nc-icon nc-single-02" />
            </div>
            <div className="description">
              <h4 style={{ fontStyle: "italic" }} className="info-title">
                Líderes expertos
              </h4>
              <p className="description" style={{ color: "#000" }}>
                Aprende con personas profesionales expertas en la industria.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-info">
              <i className="nc-icon nc-tv-2" />
            </div>
            <div className="description">
              <h4 style={{ fontStyle: "italic" }} className="info-title">
                100% en línea
              </h4>
              <p style={{ color: "#000" }}>
                Utilizamos Zoom para tomar clases de inglés online sin necesidad
                de salir de casa.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-info">
              <i className="nc-icon nc-world-2" />
            </div>
            <div className="description">
              <h4 style={{ fontStyle: "italic" }} className="info-title">
                En cualquier lugar
              </h4>
              <p style={{ color: "#000" }}>
                Aprende desde cualquier dispositivo que se pueda conectar a
                internet, fácil y sensillo.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-info">
              <i className="nc-icon nc-single-copy-04" />
            </div>
            <div className="description">
              <h4 style={{ fontStyle: "italic" }} className="info-title">
                Incrementa tu vocabulario
              </h4>
              <p style={{ color: "#000" }}>
                Aprende nuevas palabras desde el primer día y mejora tu fluidez.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionX;
