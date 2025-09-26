export default function MainNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
              <li className="nav-item"><a className="nav-link text-uppercase" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#about">About us</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#contact">Contact us</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase" href="#pages" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#about">About us</a></li>
                  <li><a className="dropdown-item" href="#team">Team</a></li>
                  <li><a className="dropdown-item" href="#blog">Blog</a></li>
                  <li><a className="dropdown-item" href="#contact">Contact us</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a href="#search" className="text-dark"><svg width="22" height="22" viewBox="0 0 24 24"><use xlinkHref="#search" /></svg></a>
              <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-controls="cartCanvas" aria-label="Cart">
                <svg width="22" height="22" viewBox="0 0 24 24"><use xlinkHref="#cart" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


