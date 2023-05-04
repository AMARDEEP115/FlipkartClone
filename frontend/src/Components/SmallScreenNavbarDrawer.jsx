import { MdAccountCircle } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, DrawerCloseButton, Input, Button, } from '@chakra-ui/react';
import { Account, Cart, Categories, Coupons, Language, MoreonFlipkart, Notifications, OfferZone, Orders, PlusZone, SellonFlipkart, SuperCoin, TrendingStores, Wishlist } from "../ItemsForHomePage/DrawerItemImages";
import "./SmallScreenNavbarDrawers.css";
import { Link } from "react-router-dom";

const SmallScreenNavbarDrawer=({onClose})=>{
    const Styles={
      height:"35px",
      paddingLeft:"15px",
      display:"flex",
      gap:"20px",
      alignItems:"center"
    };

    return <DrawerContent>
        <DrawerCloseButton color="white" mt="6px"/>
        <DrawerHeader bgColor="#2874f0" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{color:"white",display:"flex", alignItems:"center",gap:"10px",fontSize:"18px",fontWeight:"400"}}>
            <MdAccountCircle color="white" size="23px"/>Login & Singup
          </div>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png" style={{width: "20px",marginRight:"20px"}} alt="LogoFlpkrt" />
        </DrawerHeader>
        <DrawerBody w="100%" p="0%" id="DrawerItem">
            <div><Link><SuperCoin />SuperCoin Zone</Link></div>
            <div><Link><PlusZone />Flipkart Plus Zone</Link></div>
            <hr/>
            <div><Link><Categories />All Categories</Link></div>
            <div><Link><TrendingStores />Trending Stores<span style={{backgroundColor:"red",color:"white",marginLeft:"-10px",fontSize:"13px",paddingRight:"4px",paddingLeft:"4px"}}> NEW</span></Link></div>
            <div><Link><MoreonFlipkart />More on Flipkart</Link></div>
            <hr/>
            <div><Link><Language />Choose Language</Link></div>
            <hr/>
            <div><Link><OfferZone />Offer Zone</Link></div>
            <div><Link><SellonFlipkart />Sell on Flipkart</Link></div>
            <hr/>
            <div><Link><Orders />My Orders</Link></div>
            <div><Link><Coupons />Coupons</Link></div>
            <div><Link><Cart />My Cart</Link></div>
            <div><Link><Wishlist />My Wishlist</Link></div>
            <div><Link><Account />My Account</Link></div>
            <div><Link><Notifications />My Notifications</Link></div>
            <hr/>
            <div><Link>Notification Preferences</Link></div>
            <div><Link>Help Centre</Link></div>
            <div><Link>Legal</Link></div>
        </DrawerBody>
        {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme='blue'>Save</Button>
        </DrawerFooter> */}
    </DrawerContent>
};

export default SmallScreenNavbarDrawer;