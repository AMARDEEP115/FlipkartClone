import { Link } from "react-router-dom";
import Grocery from "../Assets/Grocery.png";
import Mobile from "../Assets/Mobile.png";
import Mens from "../Assets/Mens.png";
import Kids from "../Assets/Kids.png";
import Eletronics from "../Assets/Electronics.png";
import Furniture from "../Assets/Furniture.png";
import Appliances from "../Assets/Appliances.png";
import Travel from "../Assets/Travel.png";
import TopOff from "../Assets/Top Offers.png";
import Wheeler from "../Assets/Wheelers.png";
import NavbarTop from "./NavbarTop";
import { MdArrowDropDown } from "react-icons/md";
import "./Navbar.css";

const Navbar=()=>{

    const DispalyFashinDropOn=()=>{
        document.getElementById("FashinDeopDown").style.display="block";
    };
    const DispalyFashinDropOf=()=>{
        document.getElementById("FashinDeopDown").style.display="none";
    };
    return <div id="Navbar">
        <NavbarTop/>
        <div id="NavbarBottom">
            <div>
                <Link to="/grocery"><img src={Grocery} alt="groceryLogo" />Grocery</Link>
            </div>
            <div>
                <Link to="/mobiles"><img src={Mobile} alt="MobileLogo" />Mobiles</Link>
            </div>
            <div id="Faishon" onMouseEnter={DispalyFashinDropOn} onMouseLeave={DispalyFashinDropOf}>
                <Link to="/mens"><img src={Mens} alt="MensLogo" /><div>Faishon <MdArrowDropDown/></div></Link>
                <div id="FashinDeopDown" style={{display:"none"}}>
                    <div><Link>Mens</Link></div>
                    <div><Link>Womens</Link></div>
                    <div><Link>Kids</Link></div>
                </div>
            </div>
            <div>
                <Link to="/electronics"><img src={Eletronics} alt="Electronics" />Electronics</Link>
            </div>
            <div>
                <Link to="/furniture"><img src={Furniture} alt="Furniture" />Furniture</Link>
            </div>
            <div>
                <Link to="/womens"><img src={Appliances} alt="MensLogo" />Appliances</Link>
            </div>
            <div>
                <Link to="/kids"><img src={Kids} alt="KidsLogo" />Toys & More</Link>
            </div>
            <div>
                <Link to="/kids"><img src={Travel} alt="KidsLogo" />Travel</Link>
            </div>
            <div>
                <Link to="/kids"><img src={TopOff} alt="KidsLogo" />Top Offers</Link>
            </div>
            <div>
                <Link to="/kids"><img src={Wheeler} alt="KidsLogo" />Two Wheelers</Link>
            </div>
        </div>
    </div>
}

export default Navbar;