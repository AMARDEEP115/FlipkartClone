import { Link, useNavigate } from "react-router-dom";
import Search from "../Assets/Search.png";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SmallScreenNavbarDrawer from "../Components/SmallScreenNavbarDrawer";
import "./NavbarTopSmallScreens.css";
import { useState } from "react";
import React from "react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input, Button, useDisclosure } from '@chakra-ui/react';

const NavbarTopSmallScreen=()=>{

    const Navi=useNavigate();
    const [srch,setSrch]=useState("");

    const HandleSearch=()=>{
        if(srch!==""){
            document.getElementById("SearchedItemsSmall").style.display="none";
        }
        console.log("You Have searched for",srch);
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return <div id="SmallScreenNavbarTop">
            <div id="Logoo">
                <div>
                    <GiHamburgerMenu onClick={onOpen}/>
                    <img id="FlipLogo" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png" alt="flipkart_Logo" onClick={()=>{
                        return Navi("/");
                    }}/>
                </div>
                <div>
                    <Link><FaShoppingCart color="white"/></Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div id="SearchBoxx">
                <input type="text" placeholder="Search for products, brand and more" value={srch} onChange={(e)=>setSrch(e.target.value)}/>
                <img src={Search} alt="Search" onClick={HandleSearch}/>
                {srch!=="" && <div id="SearchedItemsSmall">
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                    <Link>{srch}</Link>
                </div>}
            </div>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef} >
                <DrawerOverlay />
                <SmallScreenNavbarDrawer onClose={onClose}/>
            </Drawer>
    </div>
};

export default NavbarTopSmallScreen;