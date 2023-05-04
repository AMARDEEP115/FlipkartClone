import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { RiShieldStarFill } from "react-icons/ri";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./FooterBottoms.css";

const FooterBottom=()=>{
    return <div id="FooterBottom">
        <div id="FooterBottomTop">
            <div>
                <h1>ABOUT</h1>
                <Link>Contact Us</Link>
                <Link>About Us</Link>
                <Link>Careers</Link>
                <Link>Flipkart Stories</Link>
                <Link>Press</Link>
                <Link>Flipkart Wholesale</Link>
                <Link>Corporate Information</Link>
            </div>
            <div>
                <h1>HELP</h1>
                <Link>Payments</Link>
                <Link>Shipping</Link>
                <Link>Cancellation & Returns</Link>
                <Link>FAQ</Link>
                <Link>Report Infringement</Link>
            </div>
            <div>
                <h1>CONSUMER POLICY</h1>
                <Link>Return Policy</Link>
                <Link>Terms Of Use</Link>
                <Link>Security</Link>
                <Link>Privacy</Link>
                <Link>Sitemap</Link>
                <Link>Grievance Redressal</Link>
                <Link>EPR Compliance</Link>
            </div>
            <div>
                <h1>SOCIAL</h1>
                <a href="https://amardeep115.github.io/" target="_blank">Portfolio</a>
                <a href="https://www.linkedin.com/in/amar-deep-8359aa246/" target="_blank">Linked In</a>
                <a href="https://github.com/AMARDEEP115" target="_blank">GitHub</a>
            </div>
            <div id="Hr"></div>
            <div>
                <h1>Mail Us:</h1>
                <p>Amar Deep Internet Private Limited,</p>
                <p>Road Beside btc school, Near Patel Dharamshala &</p>
                <p>Bichpai Village,</p>
                <p>Robertsgannj, Shahijankalna Post Office,</p>
                <p>Sonbhadra, 231216,</p>
                <p>Uttar Pradesh, India</p>
            </div>
            <div>
                <h1>Registered Office Address:</h1>
                <p>Amar Deep Internet Private Limited,</p>
                <p>Road Beside btc school, Near Patel Dharamshala &</p>
                <p>Bichpai Village,</p>
                <p>Robertsgannj, Shahijankalna Post Office,</p>
                <p>Sonbhadra, 231216,</p>
                <p>Uttar Pradesh, India</p>
                <p>CIN : ABCDEFGHIJKLMNOPQRSTU</p>
                <p>Telephone: <a href="tel:+916388898362">(+91) 6388-898362</a></p>
            </div>
        </div>
        <hr/>
        <div id="FooterBottomBottom">
            <p><BsFillBagFill />Become a Seller</p>
            <p><RiShieldStarFill />Advertise</p>
            <p><MdOutlineCardGiftcard />Gift Cards</p>
            <p><AiFillQuestionCircle />Help Center</p>
            <p>© 1998-2023 Flipkart.com</p>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="paymentsLogo"/>
        </div>
    </div>
}

export default FooterBottom;