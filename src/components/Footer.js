import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <>


<MDBFooter className='text-center' color='white' style={{backgroundColor:"	#282828"}}>
      <MDBContainer className='p-4'>
        <h1 style={{color:"whitesmoke",fontFamily:'Times New Roman, Times, serif'}}>SHARE THIS PAGE...</h1>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

       
          
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
               
              </MDBCol>

             
              
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Explore the Rolex collection of prestigious, high-precision timepieces. Rolex offers a wide assortment of Classic and Professional watch models to suit any wrist. Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.
          </p>
        </section>
       
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 style={{color:'whitesmoke'}} className='text-uppercase'>ROLEX WATCHES</h5>

             
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 style={{color:'whitesmoke'}} className='text-uppercase'>SERVICES</h5>

              
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 style={{color:'whitesmoke'}}className='text-uppercase'>Media</h5>

              
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 style={{color:'whitesmoke'}} className='text-uppercase'>WORLD OF ROLEX</h5>

             
            </MDBCol>
          </MDBRow>
        </section>
        </MDBContainer>
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2012 Copyright: Rolex Company.Pvt Ltd
       
         
      
      </div>
    

    </MDBFooter>







    </>
  )
}

export default Footer