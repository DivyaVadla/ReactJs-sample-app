import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
  <Link to ="/home"className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/homecomp" className="nav-link " >Home</Link>
      <Link to="/classComp" className="nav-link " href="#">ClassComponent</Link>
      <Link to="/listkeys" className="nav-link " href="#">ListsKeys</Link>
      <Link to="/classlifecycle" className="nav-link " href="#">classlifecycle</Link>
      <Link to="/contactus" className="nav-link " href="#">ContactUs</Link>
      <Link to="/pagination" className="nav-link " href="#">Pagination</Link>
      <Link to="/table" className="nav-link " href="#">Table</Link>
      <Link to="/usestate" className="nav-link " href="#">UseStateHook</Link>
      <Link to="/useeffect" className="nav-link " href="#">TodoAppUseEffect</Link>
      
      <a className=" nav-link" href="#">Pricing</a>
      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="false">Disabled</a>
    </div>
  </div>
  </div>
</nav>
        </div>
    )
}

export default Header