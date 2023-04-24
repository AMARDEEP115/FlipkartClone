import { Routes, Route } from "react-router-dom";
import Electronics from "../Pages/Electronics";
import Furniture from "../Pages/Furniture";
import Grocery from "../Pages/Grocery";
import Kids from "../Pages/Kids";
import Mens from "../Pages/Mens";
import Womens from "../Pages/Womens";
import Mobile from "../Pages/Mobiles";
import Home from "../Pages/Home";

const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/furniture" element={<Furniture/>} />
        <Route path="/grocery" element={<Grocery/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/mobiles" element={<Mobile/>} />
        <Route path="/womens" element={<Womens/>} />
    </Routes>
}

export default AllRoutes;