import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarCard() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://uxdt.nic.in/wp-content/uploads/2020/06/Election-Commission_Preview.png?x74032"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Election Commision of India
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCard;
