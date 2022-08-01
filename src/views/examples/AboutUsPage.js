import React from 'react';
import {
	// Button,
	// Label,
	// FormGroup,
	// Input,
	// NavItem,
	// NavLink,
	// Nav,
	// TabContent,
	// TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap';

// import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import ProfilePageHeader from 'components/Headers/ProfilePageHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';
import IndexNavbar from 'components/Navbars/IndexNavbar';

function AboutUsPage() {
	// const [activeTab, setActiveTab] = React.useState('1');

	//  const toggle = (tab) => {
	// 	if (activeTab !== tab) {
	// 		setActiveTab(tab);
	// 	}
	// };

	document.documentElement.classList.remove('nav-open');
	React.useEffect(() => {
		document.body.classList.add('landing-page');
		return function cleanup() {
			document.body.classList.remove('landing-page');
		};
	});
	return (
		<>
			<IndexNavbar />
			<ProfilePageHeader />
			<div className="section profile-content">
				<Container>
					<div className="owner">
						<div className="avatar">
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require('assets/img/faces/alan.webp').default}
								// src={
								// 	'https://lh3.googleusercontent.com/a-/AOh14GgNRm6uZ_CtYHKfUCqIUPAOTctzAtmDTJ3Tsigj=s128-p-k-rw-no'
								// }
							/>
						</div>
						<div className="name">
							<h4 className="title">
								Alan Martinez <br />
							</h4>
							<h6 className="description">Fundador</h6>
						</div>
					</div>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="6">
							<p>
								Somos una escuela atípica del idioma inglés especializada en el
								rubro de la conversación. Nuestro objetivo es que el alumno
								domine una conversación en inglés con naturalidad.
							</p>
							<br />
							<hr />
						</Col>
					</Row>
					<Row>
						<Col>
						<h6 className="description">Nosotros</h6>
						<p>
						Círculos de Conversación Monterrey se fundó en mayo de 2016 con un objetivo en mente, 
						proveer el espacio necesario en un salón de clases para que los alumnos tengan el 
						tiempo suficiente de practicar su inglés hablado. 
						Durante los primeros años de la empresa, se operó en instalaciones 
						físicas en la ciudad de Monterrey, Nuevo León, México. La pandemia de COVID-19 
						abrió nuevas fronteras al volverse popular el home office y los servicios en línea, 
						ya que ahora brindamos nuestro servicio a todos los rincones del mundo.
						</p>
						</Col>
					</Row>
					<br />
				</Container>
			</div>
			<DemoFooter />
		</>
	);
}

export default AboutUsPage;