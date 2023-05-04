import Navbar from "../Components/Navbar";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./HomePage.css";
import { useEffect, useState } from "react";
import HomePageSingleCategory from "../Components/HomePageComponents/HomePageSingleCategory";
import { Electronics, TopDeals } from "../ItemsForHomePage/Electronics";
import { Beauty, Gaming } from "../ItemsForHomePage/Beauty";
import { FoodAndMore, HomeFurnish } from "../ItemsForHomePage/HomeFur";
import { Appliances, AppliancesCool } from "../ItemsForHomePage/Appliances";
import { Fashion, PickStyle } from "../ItemsForHomePage/Fashion";
import RecentlyViewd from "../Assets/RecentlyViewd.png";
import FooterTop from "../Components/FooterTop";
import FooterBottom from "../Components/FooterBottom";
import HomePageSmallScreenThreeGrid from "../Components/HomePageComponents/HomePageSmallScreenThreeGrid";
import * as Grid from "../ItemsForHomePage/SmallScreenGridView";
import * as GridFour from "../ItemsForHomePage/HomePageSmallScreenFourGridItems";
import * as GridTwo from "../ItemsForHomePage/HomePageSmallScreenTwoGridItem";
import HomePageSmallScreenFourGrid from "../Components/HomePageComponents/HomePageSmallScreenFourGrid";
import HomePageSmallScreenTwoGrid from "../Components/HomePageComponents/HomePageSmallScreenTwoGrid";
import { SliddingImages, SliddingImagesSmall } from "../ItemsForHomePage/SlidingImages";

let id;

const Home=()=>{
    const [shwImg,setShwImg]=useState(0);

    useEffect(()=>{
        if(id){
            clearInterval(id);
            id=setInterval(()=>{
                setShwImg(prev=>{
                    if(prev<=SliddingImages.length-2){
                        return prev+1;
                    } else {
                        return 0;
                    }
                });
            },3000);
        } else {
            id=setInterval(()=>{
                setShwImg(prev=>{
                    if(prev<=SliddingImages.length-2){
                        return prev+1;
                    } else {
                        return 0;
                    }
                });
            },3000);
        }

        return ()=>clearInterval(id);
    },[shwImg]);

    return <div id="HomePage">
        <Navbar/>
        <div id="SlidingImg">
            <img id="ImageSliding" src={SliddingImages[shwImg]} alt="Slide_Images"/>
            <img id="ImageSlidingSmall" src={SliddingImagesSmall[shwImg]} alt="Slide_Images"/>
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
        <div>
            <HomePageSingleCategory title={Electronics.title} BackgroundImage={Electronics.BackgroundImage} Items={Electronics.Items}/>
            <HomePageSingleCategory title={PickStyle.title} BackgroundImage={PickStyle.BackgroundImage} Items={PickStyle.Items} />
            <HomePageSingleCategory title={AppliancesCool.title} BackgroundImage={AppliancesCool.BackgroundImage} Items={AppliancesCool.Items} />
            <HomePageSingleCategory title={HomeFurnish.title} BackgroundImage={HomeFurnish.BackgroundImage} Items={HomeFurnish.Items} />
            <HomePageSingleCategory title={Beauty.title} BackgroundImage={Beauty.BackgroundImage} Items={Beauty.Items} />
            <HomePageSingleCategory title={Appliances.title} BackgroundImage={Appliances.BackgroundImage} Items={Appliances.Items} />
            <HomePageSingleCategory title={TopDeals.title} BackgroundImage={TopDeals.BackgroundImage} Items={TopDeals.Items} />
            <HomePageSingleCategory title={FoodAndMore.title} BackgroundImage={FoodAndMore.BackgroundImage} Items={FoodAndMore.Items} />
            <HomePageSingleCategory title={Fashion.title} BackgroundImage={Fashion.BackgroundImage} Items={Fashion.Items} />
            <HomePageSingleCategory title={Gaming.title} BackgroundImage={Gaming.BackgroundImage} Items={Gaming.Items} />
            <HomePageSingleCategory title={"Recently Viewed"} BackgroundImage={RecentlyViewd} Items={Fashion.Items} />
        </div>
        <div>
            <HomePageSmallScreenThreeGrid photos={Grid.Photos}/>
            <HomePageSmallScreenThreeGrid photos={Grid.PhotosTwo} title="Sponsored"/>
            <img className="SingleGrid" src={GridTwo.Ninth} alt="abc" />
            <HomePageSmallScreenThreeGrid photos={Grid.PhotosThree}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.First.ine} rwo={GridTwo.First.rwo}/>
            <HomePageSmallScreenFourGrid bgImage={GridFour.One.bgImage} BoxTitle={GridFour.One.BoxTitle} bgColorr={GridFour.One.bgColorr} data={GridFour.One.data}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Second.ine} rwo={GridTwo.Second.rwo}/>
            <img className="SingleGrid" src={GridTwo.Tenth} alt="abc" />
            <HomePageSmallScreenTwoGrid ine={GridTwo.Third.ine} rwo={GridTwo.Third.rwo}/>
            <HomePageSmallScreenFourGrid bgImage={GridFour.Two.bgImage} BoxTitle={GridFour.Two.BoxTitle} bgColorr={GridFour.Two.bgColorr} data={GridFour.Two.data}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Fourth.ine} rwo={GridTwo.Fourth.rwo}/>
            <HomePageSmallScreenThreeGrid photos={Grid.PhotosFour} title="Sponsored"/>
            <img className="SingleGrid" src={GridTwo.Eleventh} alt="abc" />
            <HomePageSmallScreenFourGrid bgImage={GridFour.Three.bgImage} BoxTitle={GridFour.Three.BoxTitle} bgColorr={GridFour.Three.bgColorr} data={GridFour.Three.data}/>
            <img className="SingleGrid" src={GridTwo.Nineteen} alt="abc" />
            <HomePageSmallScreenFourGrid bgImage={GridFour.Four.bgImage} BoxTitle={GridFour.Four.BoxTitle} bgColorr={GridFour.Four.bgColorr} data={GridFour.Four.data}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Fifth.ine} rwo={GridTwo.Fifth.rwo}/>
            <HomePageSmallScreenThreeGrid photos={Grid.PhotosFive}/>
            <img className="SingleGrid" src={GridTwo.Twelveth} alt="abc" />
            <HomePageSmallScreenTwoGrid ine={GridTwo.Sixth.ine} rwo={GridTwo.Sixth.rwo}/>
            <HomePageSmallScreenFourGrid bgImage={GridFour.Five.bgImage} BoxTitle={GridFour.Five.BoxTitle} bgColorr={GridFour.Five.bgColorr} data={GridFour.Five.data}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Seventh.ine} rwo={GridTwo.Seventh.rwo}/>
            <img className="SingleGrid" src={GridTwo.Thirteen} alt="abc" />
            <HomePageSmallScreenFourGrid bgImage={GridFour.Six.bgImage} BoxTitle={GridFour.Six.BoxTitle} bgColorr={GridFour.Six.bgColorr} data={GridFour.Six.data}/>
            <img className="SingleGrid" src={GridTwo.Fourteen} alt="abc" />
            <HomePageSmallScreenFourGrid bgImage={GridFour.Seven.bgImage} BoxTitle={GridFour.Seven.BoxTitle} bgColorr={GridFour.Seven.bgColorr} data={GridFour.Seven.data}/>
            <img className="SingleGrid" src={GridTwo.Fifteen} alt="abc" />
            <HomePageSmallScreenThreeGrid photos={Grid.PhotosSix}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Eight.ine} rwo={GridTwo.Eight.rwo}/>
            <HomePageSmallScreenFourGrid bgImage={GridFour.Eight.bgImage} BoxTitle={GridFour.Eight.BoxTitle} bgColorr={GridFour.Eight.bgColorr} data={GridFour.Eight.data}/>
            <img className="SingleGrid" src={GridTwo.Sixteen} alt="abc" />
            <HomePageSmallScreenFourGrid bgImage={GridFour.Nine.bgImage} BoxTitle={GridFour.Nine.BoxTitle} bgColorr={GridFour.Nine.bgColorr} data={GridFour.Nine.data}/>
            <HomePageSmallScreenTwoGrid ine={GridTwo.Seventeen.ine} rwo={GridTwo.Seventeen.rwo}/>
            <HomePageSmallScreenFourGrid bgImage={GridFour.Ten.bgImage} BoxTitle={GridFour.Ten.BoxTitle} bgColorr={GridFour.Ten.bgColorr} data={GridFour.Ten.data}/>
            <img className="SingleGrid" src={GridTwo.Eighteen} alt="abc" />
            <img className="SingleGrid" src={GridTwo.Twenty} alt="abc" />
            
        </div>
        <div>
            <FooterTop />
            <FooterBottom />
        </div>
    </div>
}

export default Home;