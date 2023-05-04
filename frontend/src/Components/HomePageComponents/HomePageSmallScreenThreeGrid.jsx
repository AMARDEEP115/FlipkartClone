import "./HomePageSmallScreenSixGrids.css";

const HomePageSmallScreenThreeGrid=({photos=[],title=""})=>{
    return <div id="HomePageSmallScreenSixGrid">
        {title!="" && <div>
            <h1>{title}</h1>
            <hr/>
        </div>}
        <div id="HomePageSmallScreenSixGridPh">
            {photos.map((el,index)=><img key={index} src={el} alt="Laptop" />)}
        </div>
    </div>
}

export default HomePageSmallScreenThreeGrid;