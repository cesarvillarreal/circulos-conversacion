// import React from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
// import DemoFooter from 'components/Footers/DemoFooter.js';

// import SectionNavbars from 'views/index-sections/SectionNavbars.js';
// import SectionCarousel from 'views/index-sections/SectionCarousel.js';
// import SectionNucleoIcons from 'views/index-sections/SectionNucleoIcons.js';
import SectionDark from 'views/index-sections/SectionDark.js';
// import SectionExamples from 'views/index-sections/SectionExamples.js';
import SectionContactanos from './index-sections/SectionContactanos';
import SectionServices from './index-sections/SectionServices';
import SectionX from './index-sections/SectionX';

function Index() {
	document.documentElement.classList.remove('nav-open');
	// React.useEffect(() => {
	// 	document.body.classList.add('index');
	// 	return function cleanup() {
	// 		document.body.classList.remove('index');
	// 	};
	// });
	return (
		<>
			<IndexNavbar />
			<IndexHeader />
			<div className="main">
				<SectionServices />
				<SectionX />
				<SectionDark />
				<SectionContactanos />
			</div>
		</>
	);
}

export default Index;
