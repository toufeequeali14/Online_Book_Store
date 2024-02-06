import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import icon from "../assets/images/icon good.jpg";
import inst from "../assets/images/inst.png";
import twtt from "../assets/images/twtt.jpg";

const Header = ({ navMargin }) => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "rgba(4, 4, 105, 0.89)" }}>
        <Container>
          <img
            src={icon}
            alt="Profile"
            style={{ height: "3rem", width: "3rem", borderRadius: "300%" }}
          ></img>

          <Navbar.Brand
            as={Link}
            to="https://www.linkedin.com/in/toufeeque-ali-507b27258/"
            style={{ color: "white" }}
          >
            <b>&emsp; +92 30786968</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link
                href="#deets"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h1 style={{ margin: 0 }}>f &emsp;</h1>
                <img
                  src={inst}
                  alt="Profile"
                  style={{ height: "2rem", width: "2rem", marginLeft: "5px" }}
                />

                <h1 style={{ margin: 0 }}> &emsp;in &emsp;</h1>

                <img
                  src={twtt}
                  alt="Profile"
                  style={{ height: "2rem", width: "2rem", marginLeft: "5px" }}
                />

<h1 style={{ margin: 0 }}> &emsp;B &emsp;</h1>

                
              </Nav.Link>

              {/* <img src={inst} alt="Profile" style={{ height:"1rem", width: "1rem" }}></img> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

////////////////////////

///////////

// const Header = ({ navMargin }) => {
//   return (
//     <>
//       <Navbar expand="lg" style={{ backgroundColor: 'rgba(4, 4, 105, 0.89)' }}>
//       <Container fluid>

//         {/* style={{ backgroundColor: 'white' }} */}
//       <img src={icon} alt="Profile" style={{ height:"3rem", width: "3rem", borderRadius: "300%" }}></img>
//       <Navbar.Brand as={Link} to="https://www.linkedin.com/in/toufeeque-ali-507b27258/" style={{ color: 'white' }}><b>+92 3078696</b></Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             {/* <Nav.Link as={Link} to='/projects'>Projects</Nav.Link> */}

//             <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>

//             <NavDropdown title="Reviews" id="navbarScrollingDropdown">
//               <NavDropdown.Item as={Link} to='/buyer'>Buyer Review</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Seller Review
//               </NavDropdown.Item>

//             </NavDropdown>
//             <Nav.Link as={Link} to='contact'>
//               Contact Us
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">

//             <Button variant="outline-primary">Login</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   )
// }

// export default Header;
