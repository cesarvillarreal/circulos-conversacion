// import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const SectionX = () => {
	return (
		<Container>
			<Row>
				<Col className="ml-auto mr-auto" md="12">
					<h2 className="title text-center">¿Por qué elegirnos?</h2>
					<br />
				</Col>
			</Row>
			<br />
			<br />
			<Row>
				<Col md="3">
					<div className="info">
						<div className="icon icon-info">
							<i className="nc-icon nc-album-2" />
						</div>
						<div className="description">
							<h4 style={{ fontStyle: 'italic' }} className="info-title">
								Beautiful Gallery
							</h4>
							<p className="description" style={{ color: '#000' }}>
								Spend your time generating new ideas. You don't have to think of
								implementing.
							</p>
							{/* <Button className="btn-link" color="info" href="#pablo">
								See more
							</Button> */}
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="info">
						<div className="icon icon-info">
							<i className="nc-icon nc-bulb-63" />
						</div>
						<div className="description">
							<h4 style={{ fontStyle: 'italic' }} className="info-title">
								New Ideas
							</h4>
							<p style={{ color: '#000' }}>
								Larger, yet dramatically thinner. More powerful, but remarkably
								power efficient.
							</p>
							{/* <Button className="btn-link" color="info" href="#pablo">
								See more
							</Button> */}
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="info">
						<div className="icon icon-info">
							<i className="nc-icon nc-chart-bar-32" />
						</div>
						<div className="description">
							<h4 style={{ fontStyle: 'italic' }} className="info-title">
								Statistics
							</h4>
							<p style={{ color: '#000' }}>
								Choose from a veriety of many colors resembling sugar paper
								pastels.
							</p>
							{/* <Button className="btn-link" color="info" href="#pablo">
								See more
							</Button> */}
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="info">
						<div className="icon icon-info">
							<i className="nc-icon nc-sun-fog-29" />
						</div>
						<div className="description">
							<h4 style={{ fontStyle: 'italic' }} className="info-title">
								Delightful design
							</h4>
							<p style={{ color: '#000' }}>
								Find unique and handmade delightful designs related items
								directly from our sellers.
							</p>
							{/* <Button className="btn-link" color="info" href="#pablo">
								See more
							</Button> */}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SectionX;
