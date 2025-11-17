// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create dark mode toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'dark-mode-toggle';
  toggleButton.innerHTML = '<span class="toggle-icon">🌙</span>';
  toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  toggleButton.setAttribute('title', 'Toggle dark mode');
  
  // Add toggle button to the page
  document.body.appendChild(toggleButton);
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);
  
  // Toggle theme on button click
  toggleButton.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });
  
  function updateToggleIcon(theme) {
    const icon = toggleButton.querySelector('.toggle-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  
  // Add smooth scroll to TOC links
  document.querySelectorAll('#TableOfContents a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active TOC link
        document.querySelectorAll('#TableOfContents a').forEach(a => {
          a.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Update active TOC link on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('#TableOfContents a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${id}`) {
            a.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  // Observe all headings for TOC highlighting
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    if (heading.id) {
      observer.observe(heading);
    }
  });
});