import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import "./RestPagesNavbars.css";

const RestPagesNavbar=()=>{

    const DispalyFashinDropOn=()=>{
        document.getElementById("FashinDeopDown").style.display="block";
    };
    const DispalyFashinDropOf=()=>{
        document.getElementById("FashinDeopDown").style.display="none";
    };

    return <div id="RestPagesNavbar">
        <div>
            <Link to="/grocery">Grocery</Link>
        </div>
        <div>
            <Link to="/mobiles">Mobiles</Link>
        </div>
        <div id="Faishon" onMouseEnter={DispalyFashinDropOn} onMouseLeave={DispalyFashinDropOf}>
            <Link to="/fashion"><div>Faishon <MdArrowDropDown/></div></Link>
            <div id="FashinDeopDown" style={{display:"none",marginTop:"6px"}}>
                <div><Link>Mens</Link></div>
                <div><Link>Womens</Link></div>
                <div><Link>Kids</Link></div>
            </div>
        </div>
        <div>
            <Link to="/electronics">Electronics</Link>
        </div>
        <div>
            <Link to="/furniture">Furniture</Link>
        </div>
        <div>
            <Link to="/womens">Appliances</Link>
        </div>
        <div>
            <Link to="/kids">Toys & More</Link>
        </div>
        <div>
            <Link to="/kids">Travel</Link>
        </div>
        <div>
            <Link to="/kids">Top Offers</Link>
        </div>
        <div>
            <Link to="/kids">Two Wheelers</Link>
        </div>
    </div>
}

export default RestPagesNavbar;