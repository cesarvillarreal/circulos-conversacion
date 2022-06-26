import React from 'react';

// reactstrap components
import { Row, Container } from 'reactstrap';

function DemoFooter() {
	return (
		<footer className="footer footer-black footer-white">
			<Container>
				<Row>
					<nav className="footer-nav">
						<ul>
							<li>
								<a
									href="https://www.creative-tim.com?ref=pkr-footer"
									target="_blank"
									rel="noreferrer"
								>
									Circulos de conversación
								</a>
							</li>
							<li>
								<a
									href="http://blog.creative-tim.com/?ref=pkr-footer"
									target="_blank"
									rel="noreferrer"
								>
									Contactanos
								</a>
							</li>
						</ul>
					</nav>
					<div className="credits ml-auto">
						<span className="copyright">© {new Date().getFullYear()}</span>
					</div>
				</Row>
			</Container>
		</footer>
	);
}

export default DemoFooter;
