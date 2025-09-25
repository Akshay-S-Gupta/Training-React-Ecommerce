export default function FooterSection() {
  return (
    <footer className="py-5 border-top">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="fs-1 footer-brand" style={{fontFamily:'cursive'}}>CakeStore</div>
            <p className="text-muted mt-3 mb-0">Join us on a journey of taste and tradition at Cake Store.</p>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1 text-muted">Cake Store Inc.</li>
              <li className="mb-1 text-muted">Salinas, CA</li>
              <li className="mb-1 text-muted">831-585-4398</li>
              <li className="text-muted">contact@yourcompany.com</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold mb-3">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a className="link-dark text-decoration-none" href="#home">Home</a></li>
              <li className="mb-2"><a className="link-dark text-decoration-none" href="#about">About us</a></li>
              <li className="mb-2"><a className="link-dark text-decoration-none" href="#blog">Blogs</a></li>
              <li className="mb-0"><a className="link-dark text-decoration-none" href="#contact">Contact us</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold mb-3">Follow us</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
              <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#facebook" /></svg></a></li>
              <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#twitter" /></svg></a></li>
              <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#youtube" /></svg></a></li>
              <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#pinterest" /></svg></a></li>
              <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#instagram" /></svg></a></li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between mt-5 pt-3 border-top">
          <div className="text-muted small">© 2024 Cake Store HTML Template by TemplatesJungle</div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted">We Accept:</span>
            <img src="/Icons/visa.png" alt="Visa" height="28" />
            <img src="/Icons/american-express.png" alt="American Express" height="28" />
            <img src="/Icons/master-card.png" alt="Mastercard" height="28" />
          </div>
        </div>
      </div>
    </footer>
  );
}


