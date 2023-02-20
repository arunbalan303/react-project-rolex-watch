import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from "react";

 import'./cart.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
   

   
    
    var x = localStorage.getItem("uname");
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });


  const handle=(e)=>{
    alert('Payment Complete Successfully & Your Order Will Be Placed!!')
    history('/')
  }

  let  history=useNavigate()
  return (
    
      
<>








  <section className="h-100 h-custom" style={{ backgroundColor: "transparent" }}>


    
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="p-4">
            <MDBRow>
              <MDBCol lg="7" >
                <MDBTypography tag="h5">
                  <a href="#!" className="text-body">
                    <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                    shopping
                  </a>
                </MDBTypography>

                <   hr />

                <div style={{width:'100%'}} className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  
                </div>

                <MDBCard className="mb-3" style={{width:'100%'}}>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                    
                        <div className="ms-3">
                       
                       
                        <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
           <div style={{width:127}}>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div> 
          <div style={{width:170}}>
            <span> ₹ {item.price}</span>
            <button style={{border:"none",backgroundColor:"transparent"}} onClick={() => handleRemove(item.id)}><i style={{color:"red"}} class="fa-2xl fa-solid fa-trash"></i></button>
          </div>
        </div>
      ))}
      <div style={{marginLeft:-15}} className="total">
        <span>Total Price of your Cart:   <b style={{color:"black"}}>₹ {price}</b>  </span>
       
       
      </div>
    </article>
                          
                          
                        </div>
                      </div>
                     
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="5">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>   Hai.. {x} Complete Your Payment!</h3>
                        
                     
                      <br></br>
                      
                      <MDBCardImage src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
                      <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                      <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">{price}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2"> FREE</p>
                    </div>

                 

                   
                     
                      <div className="d-flex justify-content-between">
                      <a >
                        
                         <button onClick={(e) =>handle(e)} className="l" > Checkout<i className="fas fa-long-arrow-alt-right ms-2"></i></button>
                         
                        
                        </a>
                      </div>
                     
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

</section>  





 </>


  );
 
};

export default Cart; 









