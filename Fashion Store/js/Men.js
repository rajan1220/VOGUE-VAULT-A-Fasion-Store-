   // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    });
    
    // Search toggle functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');

    searchToggle.addEventListener('click', () => {
      searchContainer.classList.toggle('active');
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
        searchContainer.classList.remove('active');
      }
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Mobile menu animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function() {
      this.classList.toggle('active');
    });
    
    // Product card hover effect enhancement
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });