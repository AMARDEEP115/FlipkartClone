import Navbar from "../Components/Navbar";
import FooterBottom from "../Components/FooterBottom";
import { Link } from "react-router-dom";
import { useState } from "react";
import auth from "../OTPVerification";
import { RecaptchaVerifier, signInWithPhoneNumber, signInW } from "firebase/auth";
import { Heading } from "@chakra-ui/react";
import "./Logins.css";

let confirmationResultt;

const SignUp=()=>{
    const [mailNum,setMailNum]=useState("");
    const [ottP,setOttP]=useState("");
    const [otpInp,setOtpInp]=useState(false);

    const configureCaptcha=()=>{
        let recaptcha = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              handleLogin();
            }
        }, auth);

        return recaptcha;
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        if(mailNum.includes("@") || mailNum.includes(".com")){
            console.log("Email");
        } else {
            console.log("Number");
        }
        const phoneNumber = "+91"+mailNum;
        const appVerifier = configureCaptcha();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            confirmationResultt = confirmationResult;
            console.log("OTP has been sended");
            setOtpInp(true);
        }).catch((error) => {
            console.log(error);
            console.log("OTP has not been sended");
        });
        if(mailNum.includes("@") || mailNum.includes(".com") || Number(mailNum)===NaN){
            console.log("Email",mailNum);
        } else {
            if(Number(mailNum)!==NaN){
                console.log("Mobile",mailNum);
            }
        }
    }

    const verifyUserOTP=(e)=>{
        e.preventDefault();
        const code = ottP;
        confirmationResultt.confirm(code).then((result) => {
            const user = result.user;
            console.log(JSON.stringify(user));
            alert("User Is Verified");
        }).catch((error) => {
            console.log(error);
            console.log("OTP not verfied");
        });

        let timeOut=setTimeout(()=>{
            setOtpInp(false);
            clearTimeout(timeOut);
        },10);
    }

    return <div id="Login">
        <Navbar />
        <div id="LoginPartDiv">
            <div id="LoginLeft">
                <Heading>Looks like you're new here!</Heading>
                <p>Sign up with your mobile,<br/> number to get started</p>
            </div>
            <div id="LoginRight">
                {!otpInp && <form onSubmit={(e)=>handleLogin(e)}>
                    <div  id='sign-in-button'></div>
                    <input value={mailNum} placeholder='Enter Email/Mobile number' onChange={(e)=>setMailNum(e.target.value)} />
                    <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                    <button type="submit">Request OTP</button>
                </form>}
                {otpInp && <form onSubmit={(e)=>verifyUserOTP(e)}>
                    <input value={ottP} placeholder='Enter OTP' onChange={(e)=>setOttP(e.target.value)} />
                    <button type="submit">Verify</button>
                </form>}
                <Link to="/login">Existing User? Log in</Link>
            </div>
        </div>
        <FooterBottom />
    </div>
}

export default SignUp;