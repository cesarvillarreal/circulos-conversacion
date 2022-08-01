// import React from 'react';
import {
  Container,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const SectionServices = ({ clickHandler }) => {
  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h2 className="title text-center">Nuestros Servicios</h2>
            <br />
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Nuestro compromiso es con aquellas personas que desean aumentar su
              nivel de inglés conversacional para que puedan llegar a lograr sus
              metas personales y profesionales. En cada sesión se hablarán de
              temas muy diversos, con el fin de traer a la mesa diferentes
              estructuras gramaticales y vocabulario; y así lograr que el idioma
              se exprese con naturalidad y espontaneidad.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card style={{ width: "100%" }}>
              <CardImg
                alt="Card image cap"
                src={require("assets/img/group-class.jpg").default}
                top
                width="100%"
              />
              <CardTitle style={{ fontSize: "28px", textAlign: "center" }}>
                Conversacional Grupal
              </CardTitle>
              <CardBody style={{ fontSize: "1.2rem" }}>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span>
                    {" "}
                    Para personas con un nivel de conversación intermedio{" "}
                  </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Sesiones guiadas por un instructor </span>
                </div>

                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Grupos de máximo 7 personas</span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Temas generales diversos </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span>
                    {" "}
                    Trabajamos con vocabulario, estructura, pronunciación y
                    corrección de errores{" "}
                  </span>
                </div>
              </CardBody>
              <Button
                style={{ backgroundColor: "#6499b5", borderColor: "#6499b5" }}
                variant="primary"
                onClick={clickHandler}
              >
                SOLICITAR INFORMACIÓN
              </Button>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ width: "100%" }}>
              <CardImg
                alt="Card image cap"
                src={
                  require("assets/img/pexels-ketut-subiyanto-4474047.jpg")
                    .default
                }
                top
                width="100%"
              />
              <CardTitle style={{ fontSize: "28px", textAlign: "center" }}>
                Conversacional Individual
              </CardTitle>
              <CardBody style={{ fontSize: "1.2rem" }}>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Desde nivel pre-intermedio hasta avanzado </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Maximiza tu tiempo de conversación </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span> Practica 1 a 1 con el instructor </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span>
                    {" "}
                    Practica para tu entrevista, presentación de trabajo o temas
                    generales{" "}
                  </span>
                </div>
                <div>
                  <span className="icon icon-info">
                    <i className="nc-icon nc-check-2" />
                  </span>
                  <span>
                    {" "}
                    Trabajamos con vocabulario, estructura, pronunciación y
                    corrección de errores{" "}
                  </span>
                </div>
              </CardBody>
              <Button
                style={{ backgroundColor: "#6499b5", borderColor: "#6499b5" }}
                variant="primary"
                onClick={clickHandler}
              >
                SOLICITAR INFORMACIÓN
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionServices;
