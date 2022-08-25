import { Container, Row, Col } from "reactstrap";
function DontMove() {
  return (
    <>
      {/* <div className="section section-dark"> */}
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">¡No te traslades!</h2>
              <p
                className="description"
                style={{ fontSize: "1.2rem", color: "#000" }}
              >
                Brindamos el servicio de club conversacional en inglés de forma
                virtual a través de la aplicación Zoom.
                <br />
                Cada sesión es guiada por un instructor que corrige errores en
                pronunciación y estructura, y proporciona vocabulario y
                expresiones útiles para que puedas expresarte en el tema
                eficazmente.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default DontMove;
