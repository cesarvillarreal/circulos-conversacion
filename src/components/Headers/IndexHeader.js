import { Container } from 'reactstrap';

function IndexHeader() {
	return (
		<>
			<div
				className="page-header section-dark"
				style={{
					backgroundImage:
						'url(' +
						require('assets/img/pexels-sam-lion-6002000.jpg').default +
						')',
				}}
			>
				<div className="filter" />
				<div className="content-center">
					<Container>
						<div className="title-brand">
							<h2 className="presentation-title">
								Club de conversación online
							</h2>
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
