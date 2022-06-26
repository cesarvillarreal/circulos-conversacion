import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
// reactstrap components
import {
	// Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
} from 'reactstrap';

function IndexNavbar() {
	const [navbarColor, setNavbarColor] = useState('navbar-transparent');
	const [navbarCollapse, setNavbarCollapse] = useState(false);

	const toggleNavbarCollapse = () => {
		console.log('entra');
		setNavbarCollapse(!navbarCollapse);
		document.documentElement.classList.toggle('nav-open');
	};

	useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 299 ||
				document.body.scrollTop > 299
			) {
				setNavbarColor('');
			} else if (
				document.documentElement.scrollTop < 300 ||
				document.body.scrollTop < 300
			) {
				setNavbarColor('navbar-transparent');
			}
		};

		window.addEventListener('scroll', updateNavbarColor);

		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor);
		};
	});
	return (
		<Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
			<Container>
				<div className="navbar-translate">
					<NavbarBrand
						data-placement="bottom"
						href="/index"
						target="_blank"
						title="Coded by Creative Tim"
					>
						<img
							alt="..."
							style={{ maxHeight: '30px' }}
							src={require('assets/img/logo.png').default}
						/>
					</NavbarBrand>
					<button
						aria-expanded={navbarCollapse}
						className={classnames('navbar-toggler navbar-toggler', {
							toggled: navbarCollapse,
						})}
						onClick={toggleNavbarCollapse}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<Collapse
					className="justify-content-end"
					navbar
					isOpen={navbarCollapse}
				>
					<Nav navbar>
						<NavItem>
							<NavLink href="/aboutus">Nosotros</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="https://www.facebook.com/EprosCircles/"
								target="_blank"
								title="Like us on Facebook"
							>
								<i className="fa fa-facebook-square" />
								<p className="d-lg-none">Facebook</p>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="https://www.instagram.com/inglesconversacion_mty/"
								target="_blank"
								title="Follow us on Instagram"
							>
								<i className="fa fa-instagram" />
								<p className="d-lg-none">Instagram</p>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="https://wa.me/+5218119774200"
								target="_blank"
								title="Send a DM by whatsapp"
							>
								<i className="fa fa-whatsapp" />
								<p className="d-lg-none">Whatsapp</p>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="tel:8119774200" target="_blank">
								<i className="fa fa-phone" />
								811-977-42-00
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
}

export default IndexNavbar;
