import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography }
 from 'mdb-react-ui-kit';
 import { useNavigate } from 'react-router-dom';
function Contact() {


  const handle=(e)=>{
    alert('HaI! You will get the response of your message On the Email.                 Thank YOU....   ')
    history('/')
  }

  let  history=useNavigate()

  return (
    <>
    <div>

    <MDBContainer className="py-5" style={{ maxWidth: '1100px' }}>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-xl-block bg-image">
                <MDBCardImage style={{marginTop:0}} src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0008_m124060-0001-submariner_portrait.jpg?imwidth=420" alt="Sample photo" fluid />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                  <div className="justify-content-center align-items-center h-100">
                    <div className="text-center" style={{ marginTop: '220px' }}>
                     
                     

                      
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="p-md-5 text-black">
                  <MDBTypography tag="h3" className="mb-4 text-uppercase">Contact Info</MDBTypography>

                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput  placeholder='First name' type='text' size="" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput placeholder='Last name' type='text' size="" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput placeholder='Email' type='text' className="mb-4" size="" />
                  <MDBInput placeholder='Enter the Message' type='text' className="mb-4" size="" />

                  <button size="" onClick={(e) =>handle(e)}  className="ms-2" style={{fontSize:20, borderRadius:20,  color:"white",backgroundColor: 'hsl(210, 100%, 50%)',border:"none",height:60,width:100}}>Submit</button>

                  

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        
        
        </div>
        </>
  )
}

export default Contact