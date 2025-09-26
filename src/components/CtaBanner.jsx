export default function CtaBanner() {
  return (
    <section className="py-5 position-relative cta-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7" data-aos="fade-right">
            <h3 className="fw-bold">Celebrate life's special moments with our bespoke cakes and pastries</h3>
            <p className="text-muted">All of our products are made from scratch using family recipes with the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            <a href="#products" className="btn btn-outline-dark">Shop Now</a>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-left">
            <img src="/Icons/breadcookies.png" alt="Banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}


