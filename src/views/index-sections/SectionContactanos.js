import axios from 'axios';
import { useState } from 'react';
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
} from 'reactstrap';
const SectionContactanos = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comments, setComments] = useState('');
	const submitForm = (e) => {
		e.preventDefault();
		axios.post('url', {
			name,
			email,
			comments,
		});
	};
	return (
		<div className="section landing-section">
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
};

export default SectionContactanos;
