import { Link } from "react-router-dom";
import FourGridViewFashion from "../Components/FashionPageComponents/FourGridViewFashion";
import ScrollingDiv from "../Components/FashionPageComponents/ScrollingDiv";
import Navbar from "../Components/Navbar";
import { FirstFashionScroll, SixthFashionScroll } from "../ItemsForFashionPage/FashionScrollImages";
import { FourthFashionScroll } from "../ItemsForFashionPage/FashionScrollImages";
import { SecondFashionScroll } from "../ItemsForFashionPage/FashionScrollImages";
import { ThirdFashionScroll } from "../ItemsForFashionPage/FashionScrollImages";
import { FourGridViewFashionFirst, ThreeByThreeGrid } from "../ItemsForFashionPage/FourGridViewFashionItems";
import { FourGridViewFashionSecond } from "../ItemsForFashionPage/FourGridViewFashionItems";

import "./Fashionn.css";

const Fashion=()=>{
    return <div id="Fashion">
        <Navbar />
        <div id="FashionPageContent">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/700/image/cb6ffdfeb0188698.jpg?q=90" alt="fashionPageTopImageF" />
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/700/image/6a0b19c7ba390072.jpg?q=90" alt="fashionPageTopImageS" />
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/700/image/2b832064b3145357.jpg?q=90" alt="fashionPageTopImageSBI" />
            <br/>
            <FourGridViewFashion items={FourGridViewFashionFirst}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/700/image/6226d6a8b1b12205.jpg?q=90" alt="thridImage" />
            <br/>
            <ScrollingDiv arrays={FirstFashionScroll}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1650/770/image/19582b66bb25bf98.jpg?q=90" alt="FourthImage" />
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/800/300/image/03d2f05356d4fc9e.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerOneImage" />
            <ScrollingDiv arrays={SecondFashionScroll}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/750/150/image/7d7c774f301cdd15.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerTwoImage" />
            <FourGridViewFashion items={FourGridViewFashionSecond}/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1650/520/image/0016383508035065.jpg?q=90" alt="FifthImage" />
            <img src="https://rukminim1.flixcart.com/fk-p-flap/750/150/image/09dc616cdf00e23c.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerThreeImage" />
            <br/>
            <ScrollingDiv arrays={FourthFashionScroll}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/750/150/image/bd9713cd8ba38a44.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerFourImage" />
            <ScrollingDiv arrays={SixthFashionScroll}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/750/150/image/98ee822bfac7ea1a.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerFiveImage" />
            <ScrollingDiv arrays={ThirdFashionScroll}/>
            <br/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/750/150/image/5736f5f059c9d11e.jpg?q=90" style={{display:"block",margin:"auto"}} alt="BannerSixImage" />
            <div id="ThreeByThreeGridP">
                {ThreeByThreeGrid.map((el,index)=><img key={index} src={el} alt={`ThreeByThreeGrid${index}`}/>)}
            </div>
            <div id="SpecificFashionPageLink">
                <Link>+ Men's Fashion</Link>
                <Link>+ Women's Fashion</Link>
                <Link>+ Kid's Fashion</Link>
            </div>
        </div>
    </div>
};

export default Fashion;