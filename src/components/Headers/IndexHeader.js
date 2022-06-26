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
								Aprende Ingles desde el primer dia
							</h2>
						</div>
						<h2 className="presentation-subtitle text-center">
							Practica tu ingles
						</h2>
					</Container>
				</div>

				<h6 className="category category-absolute">Because english matters</h6>
			</div>
		</>
	);
}

export default IndexHeader;
