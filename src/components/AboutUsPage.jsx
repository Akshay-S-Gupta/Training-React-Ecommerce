import "../AboutUsPage.css";

export default function AboutUsPage() {
  return (
    <div className="about-page-root">
      {/* Banner Section */}
      <div className="about-banner">
        <h2>About Us</h2>
        <p>Home / About Us</p>
      </div>
      {/* Info Trio */}
      <div className="about-intro-section">
        <div>
          <h3>Introduction</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div>
          <h3>Our Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div>
          <h3>Our Goal</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <button className="about-btn">Get it Now</button>
        </div>
      </div>
      {/* Journey Section */}
      <div className="about-journey-section">
        <div className="about-img-block">
          <img src="/images/bakery.jpg" alt="Bakery Shop" />
          <img src="/images/donut.jpg" alt="Donut" className="img-overlay" />
        </div>
        <div>
          <h3>The beginning of our journey</h3>
          <p>
            The beginning of our journey vel tellus turpis purus, gravida
            orci...
          </p>
          <ul>
            <li>Ultricies quam nunc, lorem sit lorem urna...</li>
            <li>Pulvinar commodo mollis diam...</li>
            <li>In vel, quis donec dolor id in</li>
          </ul>
          <button className="about-btn">Shop Now</button>
        </div>
      </div>
      {/* Who are we section */}
      <div className="about-who-section">
        <div>
          <h3>Who are we?</h3>
          <p>We are nunc, lorem sit lorem urna, pretium aliquam ut...</p>
        </div>
        <div className="about-img-gallery">
          <img src="/images/cookies.jpg" alt="Cookies" />
          <img src="/images/cakes.jpg" alt="Cakes" />
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="about-testimonials-section">
        <h3>What Our Customers Say</h3>
        <div className="about-testimonials">
          <blockquote>
            "Consequat pharetra at magna imperdiet cursus..."
            <footer>Jane Cooper, CEO, ABC Inc.</footer>
          </blockquote>
          <blockquote>
            "Ultricies quam nunc, lorem sit lorem urna..."
            <footer>Melanie Griffith, CEO, ABC Inc.</footer>
          </blockquote>
          <blockquote>
            "Consequat pharetra at pharetra at magna imperdiet..."
            <footer>Amy Johnson, CEO, ABC Inc.</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
