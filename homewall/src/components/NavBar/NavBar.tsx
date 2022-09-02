import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/logo'

import './styles.css'

type Props = {

}

const Header = (props: Props) => {
  return (
    <Navbar
      bg="dark" 
      variant="dark"
      sticky="top" 
      expand="sm" 
      collapseOnSelect
    >
     
        <Navbar.Brand className="p-2">
          <Logo/>
        </Navbar.Brand>

        <Navbar.Toggle className='m-2'/>
        <Navbar.Collapse className="navbar-nav">
          <Nav className='p-2'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#walls">Walls</Nav.Link>
            <Nav.Link href="#routes">Routes</Nav.Link>
            <Nav.Link href="/sends">Sends</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header

