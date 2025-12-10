/* ============================================
   Electrical Services Company - Main JavaScript
   ============================================ */

(function() {
  'use strict';

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    // initRTLToggle(); // RTL toggle removed
    initStickyNavbar();
    initSmoothScroll();
    initCounters();
    initFormValidation();
    initMobileMenu();
    initScrollToTop();
  });

  // Theme Toggle (Dark/Light Mode)
  function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
      });
    }
  }

  function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    }
  }

  // RTL/LTR Toggle
  function initRTLToggle() {
    const rtlToggle = document.querySelector('.rtl-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';
    
    // Set initial direction
    document.documentElement.setAttribute('dir', currentDir);
    updateRTLIcon(currentDir);
    
    if (rtlToggle) {
      rtlToggle.addEventListener('click', function() {
        const currentDir = document.documentElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
        updateRTLIcon(newDir);
      });
    }
  }

  function updateRTLIcon(dir) {
    const rtlToggle = document.querySelector('.rtl-toggle');
    if (rtlToggle) {
      rtlToggle.innerHTML = dir === 'rtl' 
        ? '<i class="fas fa-align-right"></i>' 
        : '<i class="fas fa-align-left"></i>';
    }
  }

  // Sticky Navbar
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Smooth Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Animated Counters
  function initCounters() {
    const counters = document.querySelectorAll('.stats-counter .number');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target')) || parseInt(counter.textContent.replace('+', ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
        }
      };
      
      updateCounter();
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  // Form Validation
  function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  // Scroll to Top Button
  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      // Get or create Bootstrap collapse instance
      let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
      }

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
      
      // Close menu when clicking on nav links (mobile/tablet only)
      const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth < 992) {
            bsCollapse.hide();
          }
        });
      });
    }
  }

  // Pricing Toggle (Monthly/Yearly)
  window.togglePricing = function() {
    const monthlyPrices = document.querySelectorAll('[data-monthly]');
    const yearlyPrices = document.querySelectorAll('[data-yearly]');
    const toggle = document.querySelector('.pricing-toggle');
    
    if (toggle && toggle.checked) {
      // Show yearly prices
      monthlyPrices.forEach(el => el.style.display = 'none');
      yearlyPrices.forEach(el => el.style.display = 'inline');
    } else {
      // Show monthly prices
      monthlyPrices.forEach(el => el.style.display = 'inline');
      yearlyPrices.forEach(el => el.style.display = 'none');
    }
  };

  // Initialize pricing toggle if exists
  const pricingToggle = document.querySelector('.pricing-toggle');
  if (pricingToggle) {
    pricingToggle.addEventListener('change', window.togglePricing);
  }

  // Service Grid/List Toggle
  window.toggleView = function(view) {
    const gridView = document.querySelector('.services-grid');
    const listView = document.querySelector('.services-list');
    const gridBtn = document.querySelector('.view-grid');
    const listBtn = document.querySelector('.view-list');
    
    if (view === 'grid') {
      gridView.style.display = 'grid';
      listView.style.display = 'none';
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    } else {
      gridView.style.display = 'none';
      listView.style.display = 'block';
      gridBtn.classList.remove('active');
      listBtn.classList.add('active');
    }
  };

  // Blog Category Filter
  window.filterBlog = function(category) {
    // Only select blog post cards, not filter buttons
    const cards = document.querySelectorAll('.row.g-4 [data-category], .row [data-category].col-md-6');
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    
    filterBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-category') === category) {
        btn.classList.add('active');
      }
    });
    
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Admin Dashboard - Sidebar Toggle
  window.toggleSidebar = function() {
    const sidebar = document.querySelector('.admin-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  };

})();

