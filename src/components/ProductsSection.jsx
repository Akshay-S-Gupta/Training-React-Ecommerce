export default function ProductsSection() {
  const products = [
    { title: "Black Forest Pastry", price: 12, img: "/Our_Recipies/postimg1.jpg" },
    { title: "Sprinkled Donuts", price: 12, img: "/Our_Recipies/post-thumb-2.jpg" },
    { title: "Black Forest Cupcake", price: 12, img: "/Our_Recipies/post-thumb-1.jpg" },
    { title: "Macarons with Berries", price: 12, img: "/Our_Recipies/post-thumb-3.jpg" },
    { title: "Macarons with Berries", price: 12, img: "/Our_Recipies/post-thumb-2.jpg" },
    { title: "Macarons with Berries", price: 12, img: "/Our_Recipies/post-thumb-1.jpg" },
    { title: "Macarons with Berries", price: 12, img: "/Our_Recipies/post-thumb-3.jpg" },
    { title: "Macarons with Berries", price: 12, img: "/Our_Recipies/post-thumb-2.jpg" },
  ];
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4" data-aos="fade-up">
          <h3 className="fw-bold mb-0">Our Products</h3>
          <p className="text-muted mb-0">Indulge your taste buds with our diverse range of freshly baked goods</p>
        </div>
        <div className="row g-4">
          {products.map((p, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={(i%4)*100}>
              <div className="card h-100 product-card">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h6 className="card-title mb-2">{p.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">${p.price}</span>
                    <button className="btn btn-sm btn-dark">Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


