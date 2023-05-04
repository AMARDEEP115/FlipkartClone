import "./ScrollingDivs.css";

const ScrollingDiv=({arrays=[]})=>{
    return <div id="ScrollingDiv">
        {arrays.map((el,index)=><img key={index} src={el} alt={`${index}`}/>)}
    </div>
}

export default ScrollingDiv;