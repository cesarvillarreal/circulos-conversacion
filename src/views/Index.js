import { useRef } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DontMove from "views/index-sections/DontMove.js";
import SectionContactanos from "./index-sections/SectionContactanos";
import SectionServices from "./index-sections/SectionServices";
import Benefits from "./index-sections/Benefits";
import SectionText from "./index-sections/SectionText";

function Index() {
  document.documentElement.classList.remove("nav-open");
  const refContact = useRef(null);
  // React.useEffect(() => {
  // 	document.body.classList.add('index');
  // 	return function cleanup() {
  // 		document.body.classList.remove('index');
  // 	};
  // });
  const handleClick = () => {
    refContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionText />
        <SectionServices clickHandler={handleClick} />
        <DontMove />
        <Benefits />
        <SectionContactanos ref={refContact} />
      </div>
    </>
  );
}

export default Index;
