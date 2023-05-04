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
import AllCategories from "../Assets/AllCategories.png";
import OfferZone from "../Assets/OfferZone.png";
import "./NavbarBottomSmallScreens.css";

const NavbarBottomSmallScreen=()=>{
    return <div id="SmallScreenNavbarBottom">
        <div>
            <Link><img src={AllCategories} alt="AllCategories" />Categories</Link>
        </div>
        <div>
            <Link><img src={OfferZone} alt="OfferZone" />Offer Zone</Link>
        </div>
        <div>
            <Link to="/grocery"><img src={Grocery} alt="groceryLogo" />Grocery</Link>
        </div>
        <div>
            <Link to="/mobiles"><img src={Mobile} alt="MobileLogo" />Mobiles</Link>
        </div>
        <div>
            <Link to="/fashion"><img src={Mens} alt="MensLogo" />Faishon</Link>
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
};

export default NavbarBottomSmallScreen;