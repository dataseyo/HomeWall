const Menu = () => {
    return (
      <div className="collapse navbar-collapse" id="navbar">
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

          <li className="nav-item p-2">
            <a className="nav-link" href="/profile">Profile</a>
          </li>
        </ul>
        </div>
    )
  }

export default Menu