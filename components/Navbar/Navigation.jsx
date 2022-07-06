import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import stylesNav from "./Navbar.module.css";


export default function Navigation() {
  return (
    <div>
      {" "}
      <Navbar
        collapseOnSelect
        fixed="top"
        className={stylesNav.topNavbar}
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container className={stylesNav.Cont}>
          <div className={stylesNav.scmpLogoNavbar}>
            <Link  passHref eventKey="0" href="/">
              <Nav.Link className={` ${stylesNav.SCMP1}  ${stylesNav.Links}`}>SCMP</Nav.Link>
            </Link>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={'me-auto'}></Nav>
            <Nav>

              <Link  eventKey="1"  href="/"  passHref>
              <Nav.Link className={stylesNav.navlink}>Home</Nav.Link>  
              </Link>

              <Link
                className={stylesNav.navlink}
                eventKey="2"
                href="/Departments"
                passHref
              ><Nav.Link className={stylesNav.navlink} >Departments</Nav.Link> 
              </Link>
              <Link
                className={stylesNav.navlink}
                eventKey="3"
                href="/Events"
                passHref
              >
              <Nav.Link className={stylesNav.navlink}>Events</Nav.Link>  
              </Link>
              <Link
                className={stylesNav.navlink}
                eventKey="3"
                href="/SWS"
                passHref
              >
                              <Nav.Link className={stylesNav.navlink}>Startup-Weekend</Nav.Link>  

              </Link>
              <Link className={stylesNav.navlink} eventKey="4"  href="/Auth"  passHref>
              <Nav.Link className={stylesNav.navlink}>Login</Nav.Link>  

              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
