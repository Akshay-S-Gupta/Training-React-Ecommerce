export default function TestimonialsSection() {
  const testimonials = [
    { text: "Bakery is ipsum dolor sit amet, consectetur adipisicing elit...", name: "Jane Marie" },
    { text: "This is absolute best product adipisicing elit...", name: "Simran" },
    { text: "I really love this product sed do eiusmod tempor...", name: "John Marie" },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="fw-bold text-center mb-4" data-aos="fade-up">Testimonials</h3>
        <div id="testiCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
          <div className="carousel-inner">
            {testimonials.map((t, idx) => (
              <div className={`carousel-item ${idx===0?"active":""}`} key={t.name}>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm p-4 text-center">
                      <p className="lead mb-3">“{t.text}”</p>
                      <div className="fw-semibold">{t.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testiCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testiCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}


