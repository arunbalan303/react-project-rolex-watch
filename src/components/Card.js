import React from "react";

import './card.css'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';




const Cards = ({ item, handleClick }) => {
  const { title, available, price, img,dis } = item;
  return (
    < >

   
<div>
    <MDBCard className="container" style={{ maxWidth: '940px',height:400,marginTop:30}}>
      <MDBRow  className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage style={{width:700 ,marginTop:47}} src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle> {title}</MDBCardTitle>
            <MDBCardText>
             {dis}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Price: ₹ {price}</small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'> STOCK: {available}</small>
            </MDBCardText>
            <button className="bt" onClick={() => handleClick(item)}>Add To Cart</button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      
    </MDBCard>


    <br></br>

    
    </div>
   

  
   </>
     
  );
};

export default Cards;

// id, title, autor, price, img