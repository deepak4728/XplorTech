import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch scholarships from Django API
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/xplortech/api/scholarships/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setScholarships(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching scholarships:', error);
        setError('Failed to load scholarships. Make sure Django server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  const filteredScholarships = scholarships.filter(sch =>
    sch.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (scholarship) => {
    if (scholarship.link) {
      window.open(scholarship.link, '_blank');
    } else {
      alert(`Apply for ${scholarship.title}`);
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <img id="logo" src="https://via.placeholder.com/50?text=Xplortech" alt="Logo" />
            <h1>Xplortech</h1>
          </div>

          <button 
            className="hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}
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
      </header>

      <main>
        <section className="hero">
          <h2>Find Your Perfect Scholarship</h2>
          <p>Explore opportunities and achieve your dreams</p>
        </section>

        <section className="content">
          {loading && <p className="loading">Loading scholarships...</p>}
          {error && <p className="error">{error}</p>}
          
          {!loading && !error && filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship) => (
              <div key={scholarship.id} className="card">
                <img src={scholarship.icon} alt={scholarship.title} />
                <h3>{scholarship.title}</h3>
                <p className="deadline">{scholarship.deadline}</p>
                <ul>
                  {scholarship.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <button 
                  className="apply-btn"
                  onClick={() => handleApply(scholarship)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            !loading && !error && <p className="no-results">No scholarships found. Try a different search.</p>
          )}
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Xplortech helps students find their perfect scholarships.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Xplortech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
