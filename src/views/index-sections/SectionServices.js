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
} from 'reactstrap';

const SectionServices = () => {
	return (
		<div className="section landing-section">
			<Container>
				<Row>
					<Col className="ml-auto mr-auto" md="12">
						<h2 className="title text-center">Nuestros Cursos</h2>
						<br />
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<Card style={{ width: '100%' }}>
							<CardImg
								alt="Card image cap"
								src={require('assets/img/grupal.jpg').default}
								top
								width="100%"
							/>
							<CardTitle style={{ fontSize: '28px', textAlign: 'center' }}>
								Conversacional Grupal
							</CardTitle>
							<CardBody style={{ fontSize: '1.2rem' }}>
								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span> Mejora tu nivel de intermedio a avanzado </span>
								</div>
								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span> Practica diversos temas con otras personas </span>
								</div>

								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span> Sessiones guiadas por un experto </span>
								</div>

								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span> Corrección de errores </span>
								</div>

								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span> Grupos de máximo 7 personas</span>
								</div>
							</CardBody>
							<Button
								style={{ backgroundColor: '#6499b5', borderColor: '#6499b5' }}
								variant="primary"
							>
								Go somewhere
							</Button>
						</Card>
					</Col>
					<Col md="6">
						<Card style={{ width: '100%' }}>
							<CardImg
								alt="Card image cap"
								src={
									require('assets/img/pexels-ketut-subiyanto-4474047.jpg')
										.default
								}
								top
								width="100%"
							/>
							<CardTitle style={{ fontSize: '28px', textAlign: 'center' }}>
								Conversacional Individual
							</CardTitle>
							<CardBody style={{ fontSize: '1.2rem' }}>
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
									<span> Maximiza tu tiempo de conversación </span>
								</div>
								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span>
										Practicar para tu entrevista o presentación de trabajo.{' '}
									</span>
								</div>
								<div>
									<span className="icon icon-info">
										<i className="nc-icon nc-check-2" />
									</span>
									<span>Consejos de Vocabulario</span>
								</div>
							</CardBody>
							<Button
								style={{ backgroundColor: '#6499b5', borderColor: '#6499b5' }}
								variant="primary"
							>
								Go somewhere
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SectionServices;
