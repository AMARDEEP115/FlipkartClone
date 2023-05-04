import { Link, useNavigate } from "react-router-dom";
import Search from "../Assets/Search.png";
import FlipkartPlus from "../Assets/FlipkartPlus.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdDownload, MdAccountCircle } from "react-icons/md";
import { BsFillBellFill, BsFillQuestionSquareFill, BsTicketFill } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { AiFillHeart, AiFillBook } from "react-icons/ai";
import { RiWallet2Fill } from "react-icons/ri";
import "./Navbar.css";
import { useState } from "react";

const NavbarTop=()=>{
    const Navi=useNavigate();
    const [srch,setSrch]=useState("");

    const HandleSearch=()=>{
        if(srch!==""){
            document.getElementById("SearchedItemsFull").style.display="none";
        }
        console.log("You Have searched for",srch);
    }
    const DropDownOn=()=>{
        document.getElementById("MoreDetails").style.display="block";
        document.getElementById("ArrowDown").style.rotate="180deg";
    }
    const DropDownOf=()=>{
        document.getElementById("MoreDetails").style.display="none";
        document.getElementById("ArrowDown").style.rotate="360deg";
    }
    const LoginDropDownOn=()=>{
        document.getElementById("LoginDropDown").style.display="block";
    }
    const LoginDropDownOf=()=>{
        document.getElementById("LoginDropDown").style.display="none";
    }

    return <div id="Navbar">
        <div id="NavbarTop">
            <div id="Logo">
                <img id="FlipLogo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart_Logo" onClick={()=>{
                    return Navi("/");
                }}/>
                <h1>Explore <span>PLUS</span><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="FlipkartPlus" /></h1>
            </div>
            <div id="SearchBox">
                <input type="text" placeholder="Search for products, brand and more" value={srch} onChange={(e)=>setSrch(e.target.value)}/>
                <img src={Search} alt="Search" onClick={HandleSearch}/>
                {srch!=="" && <div id="SearchedItemsFull">
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                </div>}
            </div>
            <div id="LoginButton" onMouseEnter={LoginDropDownOn} onMouseLeave={LoginDropDownOf}>
                <button onClick={()=>Navi("/login")}>Login</button>
                <div id="LoginDropDown" onMouseEnter={LoginDropDownOn} onMouseLeave={LoginDropDownOf} style={{display:"none"}}>
                    <Link to="/mobiles"><h1>New customer?</h1>Sign Up</Link>
                    <Link><MdAccountCircle  color="#2874f0" />My Profile</Link>
                    <Link><img src={FlipkartPlus} alt="Flipkart_Plus_Zone" />Flipkart Plus Zone</Link>
                    <Link><AiFillBook color="#2874f0" />Orders</Link>
                    <Link><AiFillHeart  color="#2874f0" />Whishlist</Link>
                    <Link><BsTicketFill  color="#2874f0" />Rewards</Link>
                    <Link><RiWallet2Fill  color="#2874f0" />Gift Cards</Link>
                </div>
            </div>
            <Link>Become a seller</Link>
            <div>
                <Link onMouseEnter={DropDownOn} onMouseLeave={DropDownOf}>More <MdKeyboardArrowDown id="ArrowDown"  color="white"/></Link>
                <div  onMouseEnter={DropDownOn} onMouseLeave={DropDownOf} id="MoreDetails" style={{display:"none"}}>
                    <div><BsFillBellFill color="#2874f0" /><Link>Notification Preferences</Link></div>
                    <div><BsFillQuestionSquareFill color="#2874f0" /><Link>24X7 Coustomer Care</Link></div>
                    <div><SlGraph color="#2874f0" /><Link>Advertise</Link></div>
                    <div><MdDownload color="#2874f0" /><Link>Download App</Link></div>
                </div>
            </div>
            <div><FaShoppingCart color="white"/><Link>Cart</Link></div>
        </div>
    </div>
}

export default NavbarTop;