/* ============================================
   Reusable Components - Navbar & Footer
   ============================================ */

// Navbar HTML Template
const navbarHTML = `
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <i class="fas fa-bolt"></i> Electrical Services
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown">
            Home
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="index.html">Home 1</a></li>
            <li><a class="dropdown-item" href="index-niche.html">Home 2</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="services.html">All Services</a></li>
            <li><a class="dropdown-item" href="service-details.html">Service Details</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="pricing.html">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="blog.html">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <button class="theme-toggle" aria-label="Toggle theme">
            <i class="fas fa-moon"></i>
          </button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register.html">Register</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-primary" href="contact.html">Get a Free Quote</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

// Footer HTML Template
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4">
        <h5><i class="fas fa-bolt"></i> Electrical Services</h5>
        <p>Your trusted partner for all electrical needs. We provide professional, reliable, and safe electrical services for residential and commercial properties.</p>
        <div class="social-links mt-3">
          <a href="#" class="me-3"><i class="fab fa-facebook"></i></a>
          <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
          <a href="#" class="me-3"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Services</h5>
        <ul class="list-unstyled">
          <li><a href="service-details.html">Electrical Installation</a></li>
          <li><a href="service-details.html">Maintenance & Repair</a></li>
          <li><a href="service-details.html">Emergency Services</a></li>
          <li><a href="service-details.html">Smart Home Solutions</a></li>
          <li><a href="service-details.html">Commercial Electrical</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Newsletter</h5>
        <p>Subscribe to get updates on our latest services and offers.</p>
        <form class="newsletter-form">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Your email" required>
            <button class="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Electrical Services Company. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

// Function to load navbar
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
}

// Function to load footer
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

// Load components on page load
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
});

