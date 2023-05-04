import "./FourGridViewFashionn.css";

const FourGridViewFashion=({items=[]})=>{

    return <div id="FourGridViewFashion">
        {items.map((el,index)=><img key={index} src={el} alt={`${index}`} />)}
    </div>
}

export default FourGridViewFashion;