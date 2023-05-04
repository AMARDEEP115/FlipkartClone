import NavbarTop from "./NavbarTop";
import "./Navbar.css";
import NavbarBottom from "./NavbarBottom";
import NavbarTopSmallScreen from "./NavbarTopSmallScreen";
import NavbarBottomSmallScreen from "./NavbarBottomSmallScreen";
import RestPagesNavbar from "./RestPagesNavbar";
import { useLocation } from "react-router-dom";

const Navbar=()=>{
    const {pathname}=useLocation();
    
    return <div id="Navbar">
        <NavbarTop/>
        <NavbarTopSmallScreen />
        {pathname==="/" && <NavbarBottom />}
        {pathname==="/" && <NavbarBottomSmallScreen />}
        {pathname!=="/" && <RestPagesNavbar />}
    </div>
}

export default Navbar;