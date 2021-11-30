import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#EAE8EA",
 
  fontColor: "#000",
};


export const darkTheme = {
  body: "#0A0A0A",
  
  
 
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};


	}
  .Navbar{
  
    	background-color: ${(props) => props.theme.body};
    

  }
  .footer{
    background-color: ${(props) => props.theme.body};
  }
  .footer__distributed {

		background-color: ${(props) => props.theme.body};


	}
  
  `;
