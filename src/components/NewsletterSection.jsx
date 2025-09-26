export default function NewsletterSection() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-6" data-aos="fade-right">
            <h4 className="fw-bold mb-1">Join Our Newsletter</h4>
            <p className="text-white-50 mb-0">Sign Up for our newsletter and never miss any offers</p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <form className="d-flex gap-2">
              <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
              <button className="btn btn-lg btn-light" type="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


