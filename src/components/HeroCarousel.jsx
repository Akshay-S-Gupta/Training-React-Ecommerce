export default function HeroCarousel() {
  const slides = ["/Banner/banner1.jpg","/Banner/banner4.jpg","/Banner/banner5.jpg"];
  return (
    <section id="home" className="hero position-relative">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((src, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={src}>
              <div className="hero-slide" style={{backgroundImage: `url(${src})`}}>
                <div className="container">
                  <div className="hero-caption" data-aos="fade-up">
                    <h1 className="display-5 fw-bold mb-3">Explore a world of exquisite flavors</h1>
                    <p className="lead mb-4">Our skilled bakers use only the finest ingredients, ensuring that each creation is a testament to the exceptional standards we uphold.</p>
                    <a href="#products" className="btn btn-dark btn-lg">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}


