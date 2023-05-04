import "./HomePageSmallScreenFourGrids.css";

const HomePageSmallScreenFourGrid=({bgImage,BoxTitle,bgColorr,data=[]})=>{
    return <div id="HomePageSmallScreenFourGrid">
        <div id="Top" style={{backgroundImage:`url(${bgImage})`}}>
            <h1>{BoxTitle}</h1>
            <div>
                {`>`}
            </div>
        </div>
        <div id="Bottom" style={{backgroundColor:bgColorr}}>
            {data.map((el,index)=><div key={index}>
                <img src={el.image} alt={el.title} />
                <p>{el.title}</p>
                <p>{el.details}</p>
            </div>)}
        </div>
    </div>
};

export default HomePageSmallScreenFourGrid;