import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import './Registration.css'
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("uname",name);
      localStorage.setItem("KEmail", JSON.stringify(email));
      localStorage.setItem(
        "KPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="co1" style={{height:600 ,padding:60}}>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} style={{  width:400,marginLeft:460,  border: '1px solid black ',padding:'10px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}  >
              <h3 style={{textAlign:"center"}}>Registration Form</h3>
    <br></br>
              <div className="form-group">
                <label>Name</label>
                <input 
                style={{background:"transparent"}}
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  style={{background:"transparent"}}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  style={{background:"transparent"}}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  style={{background:"transparent"}}
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

           
<br></br>
              <button type="submit" className="bw">
                Submit
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
               
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;