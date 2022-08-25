import { Container } from "reactstrap";
import "./indexHeader.styles.css";
function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/pexels-sam-lion-6002000.jpg").default +
            ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="main-title">Club de conversación online</h1>
            </div>
          </Container>
        </div>

        <h6 className="category category-absolute">
          TOMA TU CLASE DE PRUEBA HOY MISMO!
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
