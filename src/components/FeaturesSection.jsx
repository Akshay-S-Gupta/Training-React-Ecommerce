export default function FeaturesSection() {
  const features = [
    { title: "Visit Us", text: "Immerse yourself in the aroma of freshly baked delights by visiting our location.", img: "/Icons/bakery.png" },
    { title: "Quality Assurance", text: "We adhere to the highest hygiene and quality standards.", img: "/Icons/thebakery.png" },
    { title: "Follow Us", text: "Join us on a journey of taste and tradition at Cake Store.", img: "/Icons/baker.png" },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-12 col-md-4" key={f.title} data-aos="zoom-in" data-aos-delay={i*100}>
              <div className="card h-100 text-center p-4 border-0 shadow-sm">
                <img src={f.img} alt={f.title} width="72" height="72" className="mx-auto mb-3" />
                <h5 className="fw-semibold">{f.title}</h5>
                <p className="text-muted mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


