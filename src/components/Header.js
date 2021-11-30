import React,{useState,useEffect} from 'react'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import logo from '../images/logo.png'
import { useHistory } from "react-router-dom";
import { useAuth } from "../assets/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { useStateValue } from '../assets/StateProvider';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function Header() {
  const[{basket},dispatch]=useStateValue()
  const { user, logout } = useAuth();
 

    const [theme, setTheme] = useState("light");
   
  const history = useHistory();

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  
    return (
        <div>
            
               <div className="Navbar">
                  <Link to="/ProductScreen">
               
                  <img  className="header__logo" src={logo} alt=""/>
                         
                  </Link>
              <div className="header__search">
  
                  <input className="header__searchInput" type="hidden" />
                
              </div>

        
              <div className="header__nav">
                
                      <div  className="header__option">        
      <span className="header__optionLineOne" style={{ color: '#c5aa6a' }}>Hello there! </span>
      <span className="header__optionLineTwo" style={{ color: '#c5aa6a' }}> {user?.email}</span>
        
                      </div>
                      <div className="header__option">
                      <span className="header__optionLineOne" style={{ color: '#c5aa6a' }} onClick={() => {
  logout();
  history.push("/");
}} >Sign Out</span>
    <span className="header__optionLineTwo" style={{ color: '#c5aa6a' }} onClick={() => {
  logout();
  history.push("/");
}}  >from your account</span>
                  
                      </div>
                      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                                <GlobalStyles />
                                <StyledApp>
                                <span className="header__optionLineOne" style={{ color: '#c5aa6a' }}>
                                

                                   
                                 <Brightness4Icon   style={{ color: '#c5aa6a' }}   onClick={() => themeToggler()}></Brightness4Icon>
                                   
                                 </span>

                                 </StyledApp>
                         </ThemeProvider>
                      <Link style={{textDecoration:'none'}} to="/checkout">
                      <div className="header__option">
                      <span className="header__optionLineOne" style={{ color: '#c5aa6a'}}>Your</span>
                      <span className="header__optionLineTwo" style={{ color: '#c5aa6a' }}>Orders</span>
                  </div>
               
                      </Link>      
                  <Link style={{textDecoration:'none'}} to="/checkout">

                      <div className="header__optionBasket">
                   
                          <LocalMallOutlinedIcon   style={{ color: '#c5aa6a',textDecoration:'none'}}   />
                          <span  style={{ color: '#c5aa6a',textDecoration:'none' }} className="header__optionLineTwo header__basketCount">
                          {/* optional chaining */}
                          {basket?.length}
                          </span>
                         
                      </div>
                      </Link>
                      
              </div>
              </div>
        </div>
    )
}

export default Header
