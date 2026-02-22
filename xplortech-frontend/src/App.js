import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const scholarships = [
    {
      icon: "🏆",
      title: "NSF Scholarship",
      deadline: "Deadline: 30/04/2024",
      requirements: [
        "Min. 60% marks in previous class",
        "No gender preference",
        "Annual family income less than 3 Lac",
        "12th passed students"
      ]
    },
    {
      icon: "🌟",
      title: "Merit Scholarship",
      deadline: "Deadline: 15/05/2024",
      requirements: [
        "Min. 80% in previous exams",
        "Open to all genders",
        "No income restriction",
        "College students eligible"
      ]
    },
    {
      icon: "💼",
      title: "Professional Development",
      deadline: "Deadline: 20/05/2024",
      requirements: [
        "For working professionals",
        "Online & offline courses",
        "Career advancement focus",
        "Flexible payment options"
      ]
    },
    {
      icon: "👩‍💻",
      title: "Tech Scholarship",
      deadline: "Deadline: 25/05/2024",
      requirements: [
        "For IT & Computer Science",
        "Coding skills valued",
        "Internship opportunities",
        "Job placement assistance"
      ]
    },
    {
      icon: "🎨",
      title: "Creative Arts Fund",
      deadline: "Deadline: 10/06/2024",
      requirements: [
        "For arts & design students",
        "Portfolio submission required",
        "Mentorship program included",
        "Exhibit opportunities"
      ]
    },
    {
      icon: "🔬",
      title: "Science Excellence",
      deadline: "Deadline: 30/05/2024",
      requirements: [
        "For Science stream students",
        "Research opportunities",
        "Lab access included",
        "Publication support"
      ]
    }
  ];

  const filteredScholarships = scholarships.filter(sch =>
    sch.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <div className="logo">🎓</div>
            <h1>Xplortech</h1>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#scholarships" onClick={() => setMenuOpen(false)}>Scholarships</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <div className="search-container">
            <input
              id="search"
              type="text"
              placeholder="Search scholarships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <h2>🎓 Find Your Perfect Scholarship</h2>
          <p>Explore educational opportunities and achieve your dreams</p>
          <button className="hero-btn">Get Started</button>
        </section>

        <section className="content" id="scholarships">
          {filteredScholarships.map((sch, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{sch.icon}</div>
              <h3>{sch.title}</h3>
              <p className="deadline">{sch.deadline}</p>
              <ul>
                {sch.requirements.map((req, j) => (
                  <li key={j}>{req}</li>
                ))}
              </ul>
              <button className="cta-btn">Apply Now</button>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About Xplortech</h4>
              <p>Xplortech helps students discover and access scholarships that match their profiles. We bridge the gap between talented learners and educational opportunities.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#scholarships">Scholarships</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">How to Apply</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#facebook" title="Facebook">f</a>
                <a href="#twitter" title="Twitter">𝕏</a>
                <a href="#instagram" title="Instagram">📱</a>
                <a href="#linkedin" title="LinkedIn">in</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Xplortech. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
