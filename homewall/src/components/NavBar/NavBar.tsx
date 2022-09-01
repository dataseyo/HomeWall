import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className="container-fluid d-flex">
        <a href="/" className="navbar-brand"><h1>HomeWall</h1></a>
        <ul className="navbar-nav me-auto mb-2 d-flex flex-row">
          <li className="nav-item p-2">
            <a className="nav-link" href="/">Home</a>
          </li>

          <li className="nav-item p-2">
            <a className="nav-link" href="#">Walls</a>
          </li>

          <li className="nav-item p-2">
            <a className="nav-link" href="#">Routes</a>
          </li>

          <li className="nav-item p-2">
            <a className="nav-link" href="/sends">Sends</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

