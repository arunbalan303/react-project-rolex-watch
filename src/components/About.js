import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>

<div>
<video autoPlay="autoplay" loop muted style={{width:"100vw" }} >
  <source  
 
    src="https://content.rolex.com/dam/world-of-rolex/hub/videos/world-of-rolex-cover.mp4"
    type="video/mp4"
  />
</video>
<div style={{ position: " absolute", top: "500px", left: "35%", color: "pink" }} >
                        <span style={{ color: "white", fontSize: "60px"  }}><b>WORLD OF ROLEX</b></span>
                        <p style={{ color: "white", fontSize: "20px",marginLeft:"66px" }}>SPORTS,ARTS AND EXPLORATION</p>
                    </div>
     </div>


<div>
  <h1 style={{marginLeft:229}}>
  For over a century, Rolex watches have <br></br> accompanied explorers and achievers around <br></br>the world, from the top of the highest <br></br> mountains to the deepest reaches of the ocean.
  </h1>
  <p style={{marginLeft:229}}>Today, Rolex is present at the most prestigious events in golf, sailing, tennis, motor sport, and at equestrian tournaments.<br></br> Rolex makes a unique and lasting contribution to global culture, science and exploration.</p>
</div>
<br></br><br></br>


<div>
<Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/5yxjbCBt/Screenshot-20230215-075439.png"/>
        
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/vTckgQdd/Screenshot-20230215-080327.png"/>
        
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/QN71k2x8/Screenshot-2023-02-15-200623.png"/>
        
        </Col>
      </Row>
    </Container>
    

    <Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/SKGtsn3P/Screenshot-2023-02-15-200840.png"/>
        
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/fbrZLq6p/Screenshot-20230215-081108.png"/>
        
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
        <img src="https://i.postimg.cc/HkFBkQ63/Screenshot-20230215-081254.png"/>
        
        </Col>
      </Row>
    </Container>

</div>



    </>
  )
}

export default About