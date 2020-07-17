import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import FadeIn from 'react-fade-in'


function Header() {

  
    return (
        <div>
    <FadeIn>
    <Navbar color="light" light expand="md">
<NavbarBrand href="/"> <img src ='./Images/Pizzatime.png' alt='Pizza Time Man' className="topLogo" ></img></NavbarBrand>
  <Nav className="mr-auto" navbar>
    <NavItem>
      <NavLink href="Kitchen">Kitchen</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/about">About Us</NavLink>
    </NavItem>
  </Nav>
  <NavbarText>Quality Starts Here</NavbarText>
</Navbar>
</FadeIn>
    </div>
    )
}


export default Header