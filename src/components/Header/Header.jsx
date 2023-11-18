import Picture from "../Picture/Picture";
import Button from "./Button";
import Logo from "../../assets/logo.svg"
import "./Header.css"
import Menu from "./menu/Link";



function Header (){
    return(
        <>       
        <div className="header">
            <Picture src={Logo} alt="corporativo" />
            <Menu href="#" text="Home"/>
            <Menu href="#" text="About Me"/>
            <Menu href="#" text="Services"/>
            <Menu href="#" text="Skills"/>
            <Menu href="#" text="Portfolio"/>
            <Menu href="#" text="Contact"/>
            <Button text ="Hire me"/>         



        </div>
        </>
    )
}
export default Header