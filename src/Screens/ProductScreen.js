import React,{useState, useEffect, useRef} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../components/Header'
import logo from '../images/logo.png'
import '../Styles/ProductScreen.css'
import Product from '../components/Product';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled, { ThemeProvider } from "styled-components";
import Carousel, { consts }  from "react-elastic-carousel";
import Button from 'react-bootstrap/Button';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function myArrow({ type, onClick, isEdge }) {

  const pointer = type === consts.PREV ? <ChevronLeftOutlinedIcon />
 
   : <ChevronRightOutlinedIcon />

  return (
    <Button style={{backgroundColor:"#c5aa6a", border:'none'}}  variant="outline-light" size="sm" onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  )
}
const styles = {

  largeIcon: {
    width: 60,
    height: 60,
   
  },

};
function ProductScreen({product}) {
 
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 7 },
];

  const newTabFb=()=>{
    window.open( 
      "https://m.facebook.com/pg/10452lb-107933821402401/events/?ref=bookmarks&mt_nav=0", "_blank"); 
  }
  const newTabIg=()=>{
    window.open(
      "https://www.instagram.com/10452.lb/", "_blank"); 

    
  }
  const newTabTwitter =()=>{
    window.open(
      "https://mobile.twitter.com/lb_10452", "_blank"); 

  }
    return (
      <div>
        <Header />
        
      <div className="banner--fadeUp" />

     <header className="banner" style={{
   backgroundSize:"cover",
   backgroundPosition:"center",
   backgroundImage:`url("https://wallpaperaccess.com/full/1079101.jpg") `,
      
  backgroundRepeat: 'no-repeat',
  
  position: 'relative',
  
  }}>
       <div className="banner__contents">
            <span  style={{ textAlign:'center' }}   className="banner__subtitle">
             Stay At Home, 
            
             Shop Online! <br/>
             Free Shipment Anywhere In Lebanon!
              <br/>
           
          </span>  
       </div>
       <div className="banner--fadeBottom" />

       </header>
       
<h2 style={{ color: '#c5aa6a',textAlign:'left', paddingTop:10, marginLeft:30,textShadow: '0px 3px 3px #234D3C' }}>Gym Equipments:</h2>

<div className="products__section" >   
<Carousel renderArrow={myArrow} breakPoints={breakPoints}>

 <Product id="1" title='Mj4 multi jungle'
price={11250000}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG126.png"
rating ={5}
/>
    <Product  id="2" title='Life fitness fit3'
price={7798500}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG125.png"
rating ={4}
/>

    <Product  id="3" title='Life fitness chest press'
price={4110000}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG127.png"
rating ={5}
/>

  <Product  id="4" title='Life fitness lateral raise'
price={5698500}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG128.png"
rating ={3}
/>
    <Product id="5" title='Life fitness decline press
'
price={3000000}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG117.png"
rating ={5}
/>
   <Product  id="6" title='Hammer strength 
'
price={690000}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG109.png"
rating ={4}
/>

   <Product  id="7" title='Cybex 625c upright bike
'
price={5317500}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG160.png"
rating ={5}
/>
    <Product  id="8" title='Signature crunch bench
'
price={675000}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG100.png"
rating ={3}
/>
    <Product id="9" title='Life fitness g4 
'
price={3928500}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG135.png"
rating ={5}
/>

<Product  id="10" title='Life fitness  bench
'
price={1798500}
image="https://pngimg.com/uploads/gym_equipment/gym_equipment_PNG104.png"
rating ={4}
/>

</Carousel>
</div>




<h2 style={{ color: '#c5aa6a',paddingTop:6,textAlign:'left', marginLeft:30,textShadow: '0px 3px 3px #234D3C' }}>Home Equipments:</h2>

   <div className="products__section1">
   <Carousel renderArrow={myArrow} breakPoints={breakPoints}>
 
   <Product  id="11" title='Washing machine'
   price={6757992}
   
   image="https://i.imgur.com/Xc67KNl.png"
   rating ={5}
   />
  
   <Product  id="12" title='Estufa indurama canela'
   price={208500}
   image="https://i.imgur.com/ncMRBhU.png"
   rating ={3}
   />
   
     <Product id="13" title='Refrigerator'
   price={600000}
   image="https://i.imgur.com/UK15UAM.png"
 rating ={5}
   />
  
   <Product  id="14" title='Electrolux süpürge'
   price={300000}
   image="https://i.imgur.com/Xx4OTCC.png"
   rating ={4}
   />
  
   
   
   <Product  id="15" title='Dyson ball  vacuum'
   price={690000}
   image="https://i.imgur.com/zDOX9T2.png"
   rating ={5}
   />
  
   <Product  id="16" title='Dishwasher'
   price={598500}
   image="https://i.imgur.com/NUMYjoK.png"
   rating ={3}
   />

   <Product  id="19" title='Dyson dc34'

   price={592500}
   image="https://i.imgur.com/lI57klN.png"
   rating ={5}
   />
  


   <Product  id="22" title='Nespresso machine
'
   price={1950000}
   image="https://i.imgur.com/xOXbWL1.png"
   rating ={4}
   />
  
   <Product  id="24" title='Juwel trigon 350'
   price={2343000}
   image="https://pngimg.com/uploads/aquarium/small/aquarium_PNG49.png"
   rating ={4}
   />
 
  
   </Carousel>

   </div>

 
         
<div className="footer">

<footer className="footer__distributed">

<div className="footer__left">

<img src={logo} alt="" width={350}/>
</div>
<div className="footer__center">
<div>
<p><span>10452.LB</span>  </p>
</div>
<div>
<p>Lebanon</p> <br/>
<p>+961 123 456</p> <br/>
<p> 10452.lb@gmail.com</p>
</div>
</div>
<div className="footer__right">
<p className="footer__company__about">
<span>About 10452.LB</span>
      Our company is an online shop established in the early 2020's.
      we sell basically home furnitures and gym equipments with affordable prices.
      Fianlly,concerning our delivery service,it covers all the lebanease territory and
      we try our best to deliver your orders in less than 48 hours because for us,you are 
      the priority!
</p>
<div >
  <FacebookIcon style={{ color:'#c5aa6a',marginRight:70,cursor:'pointer'}}  iconStyle={styles.largeIcon}  onClick={newTabFb} />
  <InstagramIcon  style={{ color:'#c5aa6a' ,marginRight:70,cursor:'pointer'}}  iconStyle={styles.largeIcon}    onClick={newTabIg} />
  <TwitterIcon  style={{ color:'#c5aa6a' ,marginRight:80,cursor:'pointer'}}  iconStyle={styles.largeIcon}  onClick={newTabTwitter} />
  </div>
</div>

</footer> 
</div>          
</div>
    )
}

export default ProductScreen
