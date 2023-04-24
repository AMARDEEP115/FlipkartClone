import Navbar from "../Components/Navbar";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./HomePage.css";
import { useState } from "react";
import HomePageSingleCategory from "../Components/HomePageSingleCategory";
import { Electronics } from "../ItemsForHomePage/Electronics";
import { Beauty } from "../ItemsForHomePage/Beauty";
import { HomeFurnish } from "../ItemsForHomePage/HomeFur";
import { Appliances } from "../ItemsForHomePage/Appliances";
import { Fashion } from "../ItemsForHomePage/Fashion";
import RecentlyViewd from "../Assets/RecentlyViewd.png";
import Footer from "../Components/Footer";

let id;

const Home=()=>{
    const [shwImg,setShwImg]=useState(0);
    const SliddingImages=[
        "https://rukminim1.flixcart.com/fk-p-flap/990/540/image/e1f1e2cdc975710a.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/990/640/image/75a15c3e19c3f7de.jpg?q=50",
        "https://rukminim1.flixcart.com/fk-p-flap/990/640/image/2ffe80d45cc64b2c.jpg?q=50",
        "https://rukminim1.flixcart.com/fk-p-flap/990/640/image/6593790371ec0ef4.jpg?q=50",
    ];

    if(id){
        clearInterval(id);
        id=setInterval(()=>{
            if(shwImg<=(SliddingImages.length-2)){
                setShwImg(prev=>prev+1);
            } else {
                setShwImg(0);
            }
        },3000);
    } else {
        id=setInterval(()=>{
            if(shwImg<=(SliddingImages.length-2)){
                setShwImg(prev=>prev+1);
            } else {
                setShwImg(0);
            }
        },3000);
    }

    return <div id="HomePage">
        <Navbar/>
        <div id="SlidingImg">
            <img id="ImageSliding" style={{width:"100%",height:"300px"}} src={SliddingImages[shwImg]} alt="Slide_Images"/>
            <div>
                <div className="NPimg" onClick={()=>{
                    clearInterval(id);
                    if(shwImg>0){
                        setShwImg(prev=>prev-1);
                    } else {
                        let x=SliddingImages.length-1;
                        setShwImg(x);
                    }
                }}><MdOutlineArrowBackIosNew/></div>
                <div className="NPimg" onClick={()=>{
                    clearInterval(id);
                    if(shwImg<=(SliddingImages.length-2)){
                        setShwImg(prev=>prev+1);
                    } else {
                        setShwImg(0);
                    }
                }}><MdOutlineArrowForwardIos /></div>
            </div>
        </div>
        <HomePageSingleCategory title={Electronics.title} BackgroundImage={Electronics.BackgroundImage} Items={Electronics.Items}/>
        <HomePageSingleCategory title={Beauty.title} BackgroundImage={Beauty.BackgroundImage} Items={Beauty.Items} />
        <HomePageSingleCategory title={HomeFurnish.title} BackgroundImage={HomeFurnish.BackgroundImage} Items={HomeFurnish.Items} />
        <HomePageSingleCategory title={Appliances.title} BackgroundImage={Appliances.BackgroundImage} Items={Appliances.Items} />
        <HomePageSingleCategory title={Fashion.title} BackgroundImage={Fashion.BackgroundImage} Items={Fashion.Items} />
        <HomePageSingleCategory title={"Recently Viewed"} BackgroundImage={RecentlyViewd} Items={Fashion.Items} />
        <Footer/>
    </div>
}

export default Home;