import { Heading } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./HomePageSingleCategoryStyle.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const HomePageSingleCategory=({title,BackgroundImage,Items=[]})=>{

    const ref=useRef();

    return <div id="Box">
        <div id="LeftBox" style={{backgroundImage:`url(${BackgroundImage})`}}>
            <Heading>{title}</Heading>
            <button>VIEW ALL</button>
        </div>
        <div id="RightBox">
            <div id="RightBoxLeft">
                <div className="NPproducts" onClick={()=>{
                    let lef=0;
                    let id=setInterval(()=>{
                        if(lef===1200){
                            return clearInterval(id);
                        }
                        lef=lef+50;
                        ref.current.scrollLeft-=lef;
                    },30);
                }}><MdOutlineArrowBackIosNew/></div>
                <div className="NPproducts" onClick={()=>{
                    let rig=0;
                    let id=setInterval(()=>{
                        if(rig===1200){
                            return clearInterval(id);
                        }
                        rig=rig+50;
                        ref.current.scrollLeft+=rig;
                    },30);
                }}><MdOutlineArrowForwardIos /></div>
            </div>
            <div id="RightBoxRight" ref={ref} className="SrcollRight">
                {Items.map((el,index)=><div key={index} className="SingleProductBox">
                    <Link>
                        <img src={el.url} alt={el.first} />
                        <h1 className="First">{el.first}</h1>
                        <h1 className="Second">{el.second}</h1>
                        <h1 className="Third">{el.third}</h1>
                    </Link>
                </div>)}
            </div>
        </div>
    </div>
}

export default HomePageSingleCategory;