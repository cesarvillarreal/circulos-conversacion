// import axios from 'axios';
import { useState, forwardRef } from "react";
// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { toast, Toaster } from "react-hot-toast";

const SectionContactanos = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  // const refContact = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    sendEmail();
  };

  function sendEmail() {
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "circulos.conversacion.ingles@gmail.com",
      Password: "06B1F74C8E6CFDC90AE38CFD620694BDE2A7",
      To: "cesarvillarreal76@gmail.com",
      // To: 'circulos.conversacion.ingles@gmail.com',
      From: "circulos.conversacion.ingles@gmail.com",
      Subject: "Informacion Circulos ",
      Body: `User: ${name} <br/>
			Email: ${email}<br/>
			Comments: ${comments}
			`,
    })
      .then(function (message) {
        toast.success("Mensaje enviado!", {
          duration: 6000,
        });
        setName("");
        setEmail("");
        setComments("");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="section landing-section" ref={ref}>
      <div style={{ zIndex: 99999 }}>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Contáctanos</h2>
            <Form className="contact-form">
              <Row>
                <Col md="6">
                  <label>Nombre</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Nombre"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <label>Mensaje</label>
              <Input
                placeholder="Dinos tus dudas y/ comentarios..."
                type="textarea"
                rows="4"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button
                    className="btn-fill"
                    color="danger"
                    size="lg"
                    onClick={submitForm}
                  >
                    Enviar Mensaje
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

// const SectionContact = forwardRef((props, ref) => {
// 	return <SectionContactanos ref={ref} />;
// });

export default SectionContactanos;
