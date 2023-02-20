import React from 'react'
import './Home.css'
import 'video-react/dist/video-react.css'; 
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
function Home() {
  return (
    <>

<div>

<video autoPlay="autoplay" loop muted style={{width:"100vw" }} >
  <source  
 
    src="https://content.rolex.com/dam/homepage/hss/watches/professional-watches/gmt-master-ii/homepage-gmt-master-ii-m126715chnr-0001.mp4"
    type="video/mp4"
  />
</video>
<div style={{ position: " absolute", top: "500px", left: "35%", color: "pink" }} >
                        <span style={{ color: "white", fontSize: "60px"  }}><b>GMT-MASTER ii</b></span>
                        <p style={{ color: "white", fontSize: "20px",marginLeft:"66px" }}>THE COSMOPOLITIAN WATCH</p>
                    </div>
     </div>
     <br></br> <br></br>

<div>
    <h1 className='j'>Rolex watches are crafted with <br/>scrupulous attention to detail.</h1>
    <p className='j1'>Explore the Rolex collection of prestigious, high-precision timepieces. Rolex offers a wide assortment of Classic and Professional watch models to suit<br/> any wrist. 
    Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.</p>
</div>
<br></br> <br></br><br></br><br></br>
<div className='j3' >
<Container fluid="md">
      <Row>
        <Col>
        <img style={{marginTop:"-150px",height:"400px",marginLeft:"28%"}} src='https://freepngimg.com/save/28122-rolex-logo/1600x1200'/>
        <p className='j2'> Sign Up  For Online Shopping !</p>

        <a className='a' href='/login'>
            
           < img className='b' src='https://cdn-icons-png.flaticon.com/512/5455/5455877.png'/>
            
            
            </a>

      
        </Col>
      </Row>
    </Container>
  

</div><br></br>


<div>

<p style={{fontSize:22}}>Rolex Watches !!!</p>
<MDBCarousel showControls>
      <MDBCarouselItem 
        className='w-100 d-block'
        itemId={1}
        src='https://i.postimg.cc/6Qfs4SD1/Screenshot-2023-02-15-143246.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://i.postimg.cc/SQC9YbdG/Screenshot-20230215-023524.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://i.postimg.cc/ydJby8xx/Screenshot-2023-02-15-143842.png'
        alt='...'
      />
    </MDBCarousel>
</div>




<div>
<video autoPlay="autoplay" loop muted style={{width:"100vw" }} >
  <source  
 
    src="https://content.rolex.com/dam/homepage/video-banner/rolex-org/alison-criscitiello/homepage-rolex-org-environment-alison-criscitiello.mp4"
    type="video/mp4"
  />
</video>


<div>

<p style={{ marginLeft:200, marginTop:-531,position:'absolute',color:"whitesmoke"}}>Rolex and National Geographic</p>

<h1 style={{marginLeft:200,   marginTop:-470,position:'absolute',color:"whitesmoke",fontSize:50}}>PERPETUAL <br></br> PLANET <br></br>
 MOUNT LOGAN <br></br>
  EXPEDITION</h1> 
  <button style={{marginLeft:199, backgroundColor:"transparent",borderColor:"white",marginTop:-220,position:'absolute',color:"whitesmoke"}}> Discover more on Rolex.org</button>


</div>
                  


</div>


<div>
<Container>
      <Row>
        <Col>
     <a href=''>   <img className='hq' style={{width:600}} src='https://i.postimg.cc/nLMjFC03/Screenshot-2023-02-15-152439.png'/>
        
     </a>  
      </Col>
        <Col>
        <a href=''>    <img className='hq' style={{width:600}} src='https://i.postimg.cc/13GMGYQk/Screenshot-20230215-032624.png'/>

        </a>   
        </Col>
      </Row>
      </Container>
</div>
<br></br>
<hr></hr>
<p><a style={{textDecoration:"none",marginLeft:'93%'}} href=''>Back to top</a></p>



    </>
  )
}

export default Home