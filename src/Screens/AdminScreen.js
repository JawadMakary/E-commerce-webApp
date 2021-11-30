import React, {useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../assets/context";
import '../Styles/AdminScreen.css'
import db from "../components/firebase";
import Particles from 'react-particles-js';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function AdminScreen(){
  const { logout } = useAuth();
  const history = useHistory();
 
  const [payment, setPayment] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState();
  const [paymentSub, setPaymentSub] = useState([]);
  const [error, setError] = useState();
  const selectPayment = (payment) => {
    setSelectedPayment(payment);
    db.collection('payment').doc(payment.id).collection('payment').get()
      .then(response => {
        const fetchedpayment = [];
        response.forEach(document => {
          const fetchedpayment = {
            id: document.id,
            ...document.data()
          };
          fetchedpayment.push(fetchedpayment);
        });
        setPayment(fetchedpayment);
      })
      .catch(error => {
        setError(error);
      });
  }

  useEffect(() => {
    db.collection('payment').get()
      .then(response => {
        const fetchedPayment1 = [];
        response.docs.forEach(document => {
          const fetchedPayment2 = {
            id: document.id,
            ...document.data()
          };
          fetchedPayment1.push(fetchedPayment2);
        });
        setPayment(fetchedPayment1);
      })
      .catch(error => {
        setError(error);
      });
  }, );

  

  return(
   <div className="adminScreen">
                     <Particles
           params={{
           "particles": {
           "number": {
               "value": 50
           },
           "size": {
               "value": 3
           }
           },
           "interactivity": {
           "events": {
               "onhover": {
                   "enable": true,
                   "mode": "repulse"
               }
           }
           }
           }} 
           height ="100vh"
           />
                
      
      <div className="adminScreen__body">
 
        
       <h2 className="adminScreen__header" style={{paddingTop:17,paddingBottom:10}} >Welcome Back Admin <button id="logoutBtn"   onClick={() => {
           logout();
           history.push("/");
         }}> <ExitToAppOutlinedIcon /></button></h2>
     
       {error ? (
         <p>Ops, there is an error :(</p>
       ) : null}
       <table >
         <th>Client Name</th>
       
         <th> Client Address</th>
         <th>Client Phone Number</th>
         <th>Payment Total Price</th>
        
      
       
      

         {payment.map(payment => (
           <tr key={payment.id} onClick={() => selectPayment(payment)}>
               <td>{payment.name}</td>
             <td>{payment.address}</td>
             <td>{payment.phone}</td>
             <td>LBP{payment.value}</td>
          
               
           </tr>
         ))}
      </table>
    
      </div>
    
     </div>
  );


}

 

  

  export default AdminScreen

