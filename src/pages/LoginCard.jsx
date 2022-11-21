import React from "react";
import { Outlet, Link } from "react-router-dom";
import VotingApp from "./VotingApp.jsx";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://ecisveep.nic.in/uploads/monthly_2018_06/NRI-Young-Voters.jpg.631f671cbff911f5638ed8af3157e7b6.jpg"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBCardImage
                  src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg"
                  //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEJLhX9PQJDi09UhpbbRC90svUZLmTWmtMQH4pLCLZnnrMgrrCkdcSrqG3zrj7Co4fG4&usqp=CAU"
                  alt="Govt of India"
                  fas
                  height="120"
                />

                <span className="h1 fw-bold mb-0"> </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Voter Id Number"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <Link to="/">VOTE</Link>
              <MDBBtn
                // onClick=
                // href="App.js"
                className="mb-4 px-5"
                color="dark"
                size="lg"
              >
                Vote Now
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a
                  href="https://regst-form.vercel.app/"
                  style={{ color: "#393f81" }}
                >
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
