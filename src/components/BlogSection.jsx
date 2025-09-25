export default function BlogSection() {
  const posts = [
    { title: "A Delightful lemon grape flavor that paired well with my go-to berry blend", date: "22nd Feb, 2024", img: "/Our_Recipies/postimg1.jpg" },
    { title: "Choosing the Perfect Cake for Every Occasion", date: "2nd March, 2024", img: "/Our_Recipies/post-thumb-1.jpg" },
    { title: "The Rise of Vegan and Gluten-Free Cakes: A Delicious Trend", date: "3rd April, 2024", img: "/Our_Recipies/post-thumb-2.jpg" },
    { title: "DIY Cake Kits: Bringing the Bakery to Your Kitchen", date: "3rd April, 2024", img: "/Our_Recipies/post-thumb-3.jpg" },
  ];
  return (
    <section id="blog" className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4" data-aos="fade-up">
          <h3 className="fw-bold mb-0">Our Recipes</h3>
          <span className="text-muted">Behind the Scenes: A Day in the Life of a Cake Baker</span>
        </div>
        <div className="row g-4">
          {posts.map((b, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={b.title} data-aos="fade-up" data-aos-delay={(i%4)*100}>
              <div className="card h-100 blog-card">
                <img src={b.img} className="card-img-top" alt={b.title} />
                <div className="card-body">
                  <div className="text-muted small mb-2">{b.date}</div>
                  <h6 className="card-title">{b.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


