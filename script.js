// Enhanced DOM Content Loaded with Better Performance
document.addEventListener('DOMContentLoaded', function() {
    // Critical functionality first
    loadHeaderComponent();
    loadMainHeaderComponent();
    loadFooterComponent();
    initializeMobileMenu();
    setActiveNavigation();
    
    // Performance-optimized animations
    requestIdleCallback(() => {
        initializeScrollAnimations();
        initializeSmoothSections();
    });
    
    // Interactive components
    requestIdleCallback(() => {
        initializeExpandableServices();
        initializeContactForm();
        initializeCalculator();
        initializeFAQ();
        initializeServicesTabs();
    });
    
    // Visual enhancements (lowest priority)
    requestIdleCallback(() => {
        initializeRippleEffects();
        initializeParticleBackground();
        initializeCounterAnimations();
        initializeCookieConsent();
    });
});

// Performance optimization: RequestIdleCallback polyfill
if (!window.requestIdleCallback) {
    window.requestIdleCallback = function(callback) {
        return setTimeout(() => {
            callback({
                didTimeout: false,
                timeRemaining: () => Math.max(0, 50.0 - (Date.now() - performance.now()))
            });
        }, 1);
    };
}

// Load Header Component
function loadHeaderComponent() {
    const headerElement = document.getElementById('header-component');
    if (headerElement) {
        // Check if we're in pages directory
        const isInPages = window.location.pathname.includes('/pages/');
        const homeLink = isInPages ? '../index.html' : 'index.html';
        const pagesPrefix = isInPages ? '' : 'pages/';
        
        headerElement.innerHTML = `
            <!-- Top Header -->
            <div class="top-header">
                <div class="container">
                    <div class="top-header-content">
                        <div class="top-header-left">
                            <div class="contact-info-top">
                                <a href="tel:+48600494868" class="contact-link-top">
                                    <i class="fas fa-phone"></i>
                                    +48 600 494 868
                                </a>
                                <a href="mailto:biuro@elitecapitalmanagement.pl" class="contact-link-top">
                                    <i class="fas fa-envelope"></i>
                                    biuro@elitecapitalmanagement.pl
                                </a>
                            </div>
                        </div>
                        <div class="top-header-right">
                            <div class="opening-hours">
                                <i class="fas fa-clock"></i>
                                <span>Pon-Pt: 9:00-17:00</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
    }
}

// Load Main Header Component
function loadMainHeaderComponent() {
    const mainHeaderElement = document.getElementById('main-header-component');
    if (mainHeaderElement) {
        // Check if we're in pages directory
        const isInPages = window.location.pathname.includes('/pages/');
        const homeLink = isInPages ? '../index.html' : 'index.html';
        const pagesPrefix = isInPages ? '' : 'pages/';
        
        mainHeaderElement.innerHTML = `
            <!-- Main Header -->
            <header class="header">
                <div class="container">
                    <div class="header-content">
                        <a href="${homeLink}" class="logo">
                            <div class="logo-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                                    <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="logo-text">
                                <span class="logo-main">ELITE CAPITAL</span>
                                <span class="logo-sub">MANAGEMENT</span>
                            </div>
                        </a>
                        <div class="header-right">
                            <nav>
                                <ul class="nav-menu">
                                    <li><a href="${homeLink}">HOME</a></li>
                                    <li><a href="${pagesPrefix}o-nas.html">O NAS</a></li>
                                    <li><a href="${pagesPrefix}uslugi.html">USŁUGI</a></li>
                                    <li><a href="${pagesPrefix}kontakt.html">KONTAKT</a></li>
                                </ul>
                            </nav>
                            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-menu" id="mobileMenu">
                        <ul class="mobile-nav-menu">
                            <li><a href="${homeLink}">HOME</a></li>
                            <li><a href="${pagesPrefix}o-nas.html">O NAS</a></li>
                            <li><a href="${pagesPrefix}uslugi.html">USŁUGI</a></li>
                            <li><a href="${pagesPrefix}kontakt.html">KONTAKT</a></li>
                        </ul>
                        <div class="mobile-contact-info">
                            <a href="tel:+48600494868">+48 600 494 868</a>
                            <a href="mailto:biuro@elitecapitalmanagement.pl">biuro@elitecapitalmanagement.pl</a>
                            <div class="mobile-opening-hours">
                                <i class="fas fa-clock"></i>
                                <span>Pon-Pt: 9:00-17:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

// Load Footer Component
function loadFooterComponent() {
    const footerElement = document.getElementById('footer-component');
    if (footerElement) {
        // Check if we're in pages directory
        const isInPages = window.location.pathname.includes('/pages/');
        const homeLink = isInPages ? '../index.html' : 'index.html';
        const pagesPrefix = isInPages ? '' : 'pages/';
        
        footerElement.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="footer-logo">
                            <div class="footer-logo-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="footer-logo-text">
                                <h3>Elite Capital Management</h3>
                                <p>Profesjonalne doradztwo finansowe</p>
                            </div>
                        </div>
                        <div class="footer-company-info">
                            <p><i class="fas fa-map-marker-alt"></i> Sienna 9, 70-542 Szczecin</p>
                            <p><i class="fas fa-id-card"></i> NIP: 7561989101</p>
                            <p><i class="fas fa-building"></i> REGON: 385302808</p>
                            <p><i class="fas fa-balance-scale"></i> KRS: 0000823510</p>
                        </div>
                    </div>
                    <div class="footer-separator"></div>
                    <div class="footer-section">
                        <h3><i class="fas fa-phone"></i> Kontakt</h3>
                        <div class="footer-contact-info">
                            <p><a href="tel:+48600494868"><i class="fas fa-phone-alt"></i> +48 600 494 868</a></p>
                            <p><a href="mailto:biuro@elitecapitalmanagement.pl"><i class="fas fa-envelope"></i> biuro@elitecapitalmanagement.pl</a></p>
                            <p><i class="fas fa-clock"></i> Pon-Pt: 9:00-17:00</p>
                        </div>
                    </div>
                    <div class="footer-separator"></div>
                    <div class="footer-section">
                        <h3><i class="fas fa-bars"></i> Menu</h3>
                        <nav class="footer-nav">
                            <a href="${homeLink}"><i class="fas fa-home"></i> Strona główna</a>
                            <a href="${pagesPrefix}o-nas.html"><i class="fas fa-users"></i> O nas</a>
                            <a href="${pagesPrefix}uslugi.html"><i class="fas fa-briefcase"></i> Usługi</a>
                            <a href="${pagesPrefix}kontakt.html"><i class="fas fa-envelope-open"></i> Kontakt</a>
                        </nav>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-legal">
                        <div class="legal-title">Noty prawne</div>
                        <p class="gdpr-notice">
                            <a href="${pagesPrefix}polityka-prywatnosci.html">Polityka Prywatności</a> | 
                            <a href="${pagesPrefix}regulamin.html">Regulamin</a> | 
                            <a href="${pagesPrefix}rodo.html">RODO</a>
                        </p>
                        <p class="footer-copyright-centered">&copy; 2025 Elite Capital Management Sp. z o.o. Wszystkie prawa zastrzeżone. Profesjonalne doradztwo finansowe w Szczecinie</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Enhanced Mobile Menu with Better Accessibility
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        // Enhanced accessibility
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-controls', 'mobileMenu');
        mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.setAttribute('role', 'navigation');
        mobileMenu.setAttribute('aria-label', 'Mobile navigation');
        
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isExpanded = mobileMenu.classList.contains('active');
            
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Enhanced keyboard navigation
        mobileMenuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = mobileMenu.classList.contains('active');
                
                if (isExpanded) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on resize (if screen becomes larger)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
        
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        
        // Focus management
        const firstLink = mobileMenu.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
        
        // Prevent body scroll on desktop only
        if (window.innerWidth > 768) {
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to toggle button
        mobileMenuToggle.focus();
    }
}

// Initialize Expandable Services
function initializeExpandableServices() {
    const expandableCards = document.querySelectorAll('.expandable');
    
    expandableCards.forEach(card => {
        const moreLink = card.querySelector('.service-more');
        if (moreLink) {
            moreLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close other expanded cards
                expandableCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('expanded');
                        const otherMoreLink = otherCard.querySelector('.service-more');
                        if (otherMoreLink) {
                            otherMoreLink.textContent = 'Więcej';
                        }
                    }
                });
                
                // Toggle current card
                card.classList.toggle('expanded');
                if (card.classList.contains('expanded')) {
                    this.textContent = 'Mniej';
                } else {
                    this.textContent = 'Więcej';
                }
            });
        }
    });
}

// Enhanced Contact Form with Better Validation and Accessibility
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Enhanced form accessibility
        contactForm.setAttribute('novalidate', 'true');
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Enhanced validation
            const requiredFields = ['name', 'email', 'phone', 'product', 'privacy-policy', 'data-sharing'];
            let isValid = true;
            let firstErrorField = null;
            
            // Clear previous errors
            clearAllErrors();
            
            // Validate required fields
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input) return;
                
                if (!formObject[field] || formObject[field].trim() === '') {
                    showFieldError(input, 'To pole jest wymagane');
                    isValid = false;
                    if (!firstErrorField) firstErrorField = input;
                }
            });
            
            // Enhanced email validation
            const emailInput = this.querySelector('[name="email"]');
            if (emailInput && formObject.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formObject.email)) {
                    showFieldError(emailInput, 'Proszę wprowadzić poprawny adres email');
                    isValid = false;
                    if (!firstErrorField) firstErrorField = emailInput;
                }
            }
            
            // Phone validation
            const phoneInput = this.querySelector('[name="phone"]');
            if (phoneInput && formObject.phone) {
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
                if (!phoneRegex.test(formObject.phone)) {
                    showFieldError(phoneInput, 'Proszę wprowadzić poprawny numer telefonu');
                    isValid = false;
                    if (!firstErrorField) firstErrorField = phoneInput;
                }
            }
            
            if (isValid) {
                // Enhanced form submission
                const submitButton = this.querySelector('.submit-button');
                const originalText = submitButton.textContent;
                const originalDisabled = submitButton.disabled;
                
                submitButton.textContent = 'Wysyłanie...';
                submitButton.disabled = true;
                submitButton.setAttribute('aria-busy', 'true');
                
                // Simulate form submission with better UX
                setTimeout(() => {
                    showSuccessMessage('Dziękujemy za przesłanie formularza! Skontaktujemy się z Państwem w najbliższym czasie.');
                    this.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = originalDisabled;
                    submitButton.removeAttribute('aria-busy');
                    
                    // Focus on first field after reset
                    const firstInput = this.querySelector('input, select, textarea');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 1500);
            } else {
                // Focus on first error field
                if (firstErrorField) {
                    firstErrorField.focus();
                }
                showErrorMessage('Proszę poprawić błędy w formularzu');
            }
        });
    }
}

// Enhanced validation functions
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Clear previous error
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'To pole jest wymagane');
        return false;
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Proszę wprowadzić poprawny adres email');
            return false;
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Proszę wprowadzić poprawny numer telefonu');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Get or create error element
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.setAttribute('role', 'alert');
        errorElement.setAttribute('aria-live', 'polite');
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
    }
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.field-error');
    errorElements.forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
    
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
    });
}

function showSuccessMessage(message) {
    showNotification(message, 'success');
}

function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'notification-close';
    closeButton.setAttribute('aria-label', 'Zamknij powiadomienie');
    closeButton.addEventListener('click', () => notification.remove());
    
    notification.appendChild(closeButton);
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : type === 'error' ? '#E74C3C' : '#3498DB'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    `;
    
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s;
    `;
    
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.backgroundColor = 'rgba(255,255,255,0.2)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.backgroundColor = 'transparent';
    });
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Set Active Navigation
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// (duplicate smooth-scroll handler removed; enhanced version kept below)

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(13, 27, 42, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#0D1B2A';
            header.style.backdropFilter = 'none';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in/slide-up animation
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .company-description p, h1, h2, h3');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Footer fade-in animation
    const footer = document.querySelector('footer');
    if (footer) {
        const footerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        footerObserver.observe(footer);
    }
}

// Initialize Ripple Effects
function initializeRippleEffects() {
    const buttons = document.querySelectorAll('.cta-button, .qualify-button, .submit-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .service-card, .team-member, .company-description p, h1, h2, h3 {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style);

// Initialize Premium Particle Background
function initializeParticleBackground() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer || window.innerWidth < 1024) return;

    // Create fewer particles for better performance
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }

    // Create new particle less frequently
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 30) {
            createParticle(particlesContainer);
        }
    }, 4000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random horizontal position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    // Random size variation
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// Initialize Counter Animations
function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize Credit Calculator
function initializeCalculator() {
    const loanAmountSlider = document.getElementById('loan-amount');
    const loanPeriodSlider = document.getElementById('loan-period');
    const interestRateSlider = document.getElementById('interest-rate');
    
    const loanAmountValue = document.getElementById('loan-amount-value');
    const loanPeriodValue = document.getElementById('loan-period-value');
    const interestRateValue = document.getElementById('interest-rate-value');
    
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');
    const totalCostDisplay = document.getElementById('total-cost');
    const totalInterestDisplay = document.getElementById('total-interest');
    
    const loanTypeRadios = document.querySelectorAll('input[name="loan-type"]');
    
    if (!loanAmountSlider || !loanPeriodSlider || !interestRateSlider) return;
    
    function formatNumber(num) {
        return new Intl.NumberFormat('pl-PL').format(Math.round(num));
    }
    
    function updateInterestRateRange() {
        const selectedType = document.querySelector('input[name="loan-type"]:checked');
        if (!selectedType) return;
        
        if (selectedType.value === 'cash') {
            interestRateSlider.min = 7;
            interestRateSlider.max = 16;
            if (parseFloat(interestRateSlider.value) < 7) {
                interestRateSlider.value = 7;
            } else if (parseFloat(interestRateSlider.value) > 16) {
                interestRateSlider.value = 16;
            }
        } else {
            interestRateSlider.min = 2;
            interestRateSlider.max = 8;
            if (parseFloat(interestRateSlider.value) < 2) {
                interestRateSlider.value = 2;
            } else if (parseFloat(interestRateSlider.value) > 8) {
                interestRateSlider.value = 8;
            }
        }
        
        calculateLoan();
    }
    
    function calculateLoan() {
        const loanAmount = parseFloat(loanAmountSlider.value);
        const loanPeriod = parseFloat(loanPeriodSlider.value);
        const interestRate = parseFloat(interestRateSlider.value) / 100;
        
        // Monthly interest rate
        const monthlyRate = interestRate / 12;
        // Total number of payments
        const totalPayments = loanPeriod * 12;
        
        // Monthly payment calculation using PMT formula
        let monthlyPayment;
        if (monthlyRate === 0) {
            monthlyPayment = loanAmount / totalPayments;
        } else {
            monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                           (Math.pow(1 + monthlyRate, totalPayments) - 1);
        }
        
        const totalCost = monthlyPayment * totalPayments;
        const totalInterest = totalCost - loanAmount;
        
        // Update displays
        loanAmountValue.textContent = formatNumber(loanAmount);
        loanPeriodValue.textContent = loanPeriod;
        interestRateValue.textContent = (interestRate * 100).toFixed(1);
        
        monthlyPaymentDisplay.textContent = formatNumber(monthlyPayment) + ' zł';
        totalCostDisplay.textContent = formatNumber(totalCost) + ' zł';
        totalInterestDisplay.textContent = formatNumber(totalInterest) + ' zł';
    }
    
    // Add event listeners
    loanAmountSlider.addEventListener('input', calculateLoan);
    loanPeriodSlider.addEventListener('input', calculateLoan);
    interestRateSlider.addEventListener('input', calculateLoan);
    
    // Add event listeners for loan type selection
    loanTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateInterestRateRange);
    });
    
    // Initial calculation
    calculateLoan();
}

// Initialize FAQ
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Smooth scroll to item if opening
                if (item.classList.contains('active')) {
                    setTimeout(() => {
                        const rect = item.getBoundingClientRect();
                        const offset = window.pageYOffset + rect.top - 100;
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            });
        }
    });
}

// Initialize Smooth Sections
function initializeSmoothSections() {
    const sections = document.querySelectorAll('section:not(.hero)');
    const dividers = document.querySelectorAll('.floating-divider');
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Observe dividers with different settings
    const dividerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        root: null,
        rootMargin: '-5% 0px -5% 0px',
        threshold: 0.1
    });

    // Set initial state for dividers
    dividers.forEach(divider => {
        divider.style.opacity = '0';
        divider.style.transform = 'translateY(30px)';
        divider.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        dividerObserver.observe(divider);
    });
}

// Enhanced Smooth Scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Add smooth easing
            const start = window.pageYOffset;
            const target = targetElement.getBoundingClientRect().top + start - 100;
            const distance = target - start;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
            
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, start, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        }
    }
});

// Initialize Services Tabs
function initializeServicesTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Smooth scroll to the content
                setTimeout(() => {
                    targetContent.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
}

// Custom cursor removed for better UX

// GDPR Compliance Functions
function showCookieConsent() {
    const isInPages = window.location.pathname.includes('/pages/');
    const pagesPrefix = isInPages ? '' : 'pages/';
    
    const consentHtml = `
        <div id="cookieConsentModal" class="gdpr-modal">
            <div class="gdpr-modal-content">
                <div class="gdpr-modal-header">
                    <h3>Ustawienia plików cookies</h3>
                    <button onclick="closeGDPRModal('cookieConsentModal')" class="gdpr-close">&times;</button>
                </div>
                <div class="gdpr-modal-body">
                    <p>Nasza strona internetowa wykorzystuje pliki cookies w celu:</p>
                    <ul>
                        <li><strong>Niezbędne cookies:</strong> Zapewnienie prawidłowego funkcjonowania strony</li>
                        <li><strong>Analityczne cookies:</strong> Analiza ruchu na stronie i poprawa jej funkcjonalności</li>
                        <li><strong>Marketingowe cookies:</strong> Personalizacja treści reklamowych</li>
                    </ul>
                    <div class="cookie-settings">
                        <div class="cookie-option">
                            <label>
                                <input type="checkbox" checked disabled>
                                <span>Niezbędne cookies (zawsze aktywne)</span>
                            </label>
                        </div>
                        <div class="cookie-option">
                            <label>
                                <input type="checkbox" id="analyticsCookies">
                                <span>Analityczne cookies</span>
                            </label>
                        </div>
                        <div class="cookie-option">
                            <label>
                                <input type="checkbox" id="marketingCookies">
                                <span>Marketingowe cookies</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="gdpr-modal-footer">
                    <button onclick="saveCookieSettings()" class="gdpr-button">Zapisz ustawienia</button>
                    <button onclick="acceptAllCookies()" class="gdpr-button gdpr-button-primary">Akceptuj wszystkie</button>
                </div>
            </div>
        </div>
    `;
    
    if (!document.getElementById('cookieConsentModal')) {
        document.body.insertAdjacentHTML('beforeend', consentHtml);
    }
    document.getElementById('cookieConsentModal').style.display = 'flex';
    
    // NEVER BLOCK SCROLL ON MOBILE - ALWAYS ALLOW SCROLLING
}

function showGDPRInfo() {
    const isInPages = window.location.pathname.includes('/pages/');
    const pagesPrefix = isInPages ? '' : 'pages/';
    
    const gdprHtml = `
        <div id="gdprInfoModal" class="gdpr-modal">
            <div class="gdpr-modal-content">
                <div class="gdpr-modal-header">
                    <h3>Informacje o ochronie danych osobowych (RODO)</h3>
                    <button onclick="closeGDPRModal('gdprInfoModal')" class="gdpr-close">&times;</button>
                </div>
                <div class="gdpr-modal-body">
                    <h4>Administrator danych:</h4>
                    <p><strong>Elite Capital Management Sp. z o.o.</strong><br>
                    Sienna 9, 70-542 Szczecin<br>
                    NIP: 7561989101 | REGON: 385302808 | KRS: 0000823510</p>
                    
                    <h4>Cele przetwarzania danych:</h4>
                    <ul>
                        <li>Świadczenie usług pośrednictwa finansowego</li>
                        <li>Kontakt w sprawie zapytań</li>
                        <li>Marketing bezpośredni (za zgodą)</li>
                        <li>Wypełnienie obowiązków prawnych</li>
                    </ul>
                    
                    <h4>Twoje prawa:</h4>
                    <ul>
                        <li>Prawo dostępu do danych</li>
                        <li>Prawo sprostowania danych</li>
                        <li>Prawo usunięcia danych</li>
                        <li>Prawo ograniczenia przetwarzania</li>
                        <li>Prawo przenoszenia danych</li>
                        <li>Prawo sprzeciwu</li>
                    </ul>
                    
                    <h4>Kontakt w sprawach RODO:</h4>
                    <p>E-mail: <a href="mailto:rodo@elitecapitalmanagement.pl">rodo@elitecapitalmanagement.pl</a><br>
                    Telefon: <a href="tel:+48600494868">+48 600 494 868</a></p>
                    
                    <p><strong>Szczegółowe informacje znajdziesz w <a href="${pagesPrefix}polityka-prywatnosci.html">Polityce Prywatności</a>.</strong></p>
                </div>
                <div class="gdpr-modal-footer">
                    <button onclick="closeGDPRModal('gdprInfoModal')" class="gdpr-button">Zamknij</button>
                </div>
            </div>
        </div>
    `;
    
    if (!document.getElementById('gdprInfoModal')) {
        document.body.insertAdjacentHTML('beforeend', gdprHtml);
    }
    document.getElementById('gdprInfoModal').style.display = 'flex';
    
    // NEVER BLOCK SCROLL ON MOBILE - ALWAYS ALLOW SCROLLING
}

function closeGDPRModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Always restore scroll - force enable scrolling on mobile
        document.body.style.overflow = '';
        if (window.innerWidth <= 768) {
            document.body.style.overflowY = 'auto';
        }
    }
}

function saveCookieSettings() {
    const analytics = document.getElementById('analyticsCookies').checked;
    const marketing = document.getElementById('marketingCookies').checked;
    
    localStorage.setItem('cookieSettings', JSON.stringify({
        analytics: analytics,
        marketing: marketing,
        timestamp: new Date().getTime()
    }));
    
    closeGDPRModal('cookieConsentModal');
    showCookieBannerNotification('Ustawienia cookies zostały zapisane.');
    applyConsentPreferences();
}

function acceptAllCookies() {
    localStorage.setItem('cookieSettings', JSON.stringify({
        analytics: true,
        marketing: true,
        timestamp: new Date().getTime()
    }));
    
    closeGDPRModal('cookieConsentModal');
    showCookieBannerNotification('Wszystkie cookies zostały zaakceptowane.');
    applyConsentPreferences();
}

function showCookieBannerNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'gdpr-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1e3a8a;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add GDPR modal styles
const gdprStyles = document.createElement('style');
gdprStyles.textContent = `
    .gdpr-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    }
    
    .gdpr-modal-content {
        background: #0D1B2A;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    
    .gdpr-modal-header {
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .gdpr-modal-header h3 {
        margin: 0;
        color: #E5E7EB;
        font-size: 1.5rem;
    }
    
    .gdpr-close {
        background: none;
        border: none;
        color: #E5E7EB;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s;
    }
    
    .gdpr-close:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .gdpr-modal-body {
        padding: 20px;
        color: #E5E7EB;
    }
    
    .gdpr-modal-body h4 {
        color: #60A5FA;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    .gdpr-modal-body ul {
        margin: 10px 0;
        padding-left: 20px;
    }
    
    .gdpr-modal-body li {
        margin: 5px 0;
    }
    
    .cookie-settings {
        margin: 20px 0;
    }
    
    .cookie-option {
        margin: 15px 0;
        padding: 10px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
    }
    
    .cookie-option label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
    .cookie-option input[type="checkbox"] {
        margin-right: 10px;
        width: 18px;
        height: 18px;
    }
    
    .gdpr-modal-footer {
        padding: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }
    
    .gdpr-button {
        padding: 10px 20px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: transparent;
        color: #E5E7EB;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .gdpr-button:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .gdpr-button-primary {
        background: #60A5FA;
        border-color: #60A5FA;
        color: white;
    }
    
    .gdpr-button-primary:hover {
        background: #3B82F6;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @media (max-width: 768px) {
        .gdpr-modal-content {
            width: 95%;
            margin: 10px;
        }
        
        .gdpr-modal-footer {
            flex-direction: column;
        }
        
        .gdpr-button {
            width: 100%;
        }
    }
`;
document.head.appendChild(gdprStyles);

// Initialize Cookie Consent Banner
function initializeCookieConsent() {
    // Check if user has already made a choice
    const cookieSettings = localStorage.getItem('cookieSettings');
    if (cookieSettings) return; // User has already made a choice
    
    // Show cookie consent banner after 2 seconds
    setTimeout(() => {
        showCookieConsentBanner();
    }, 2000);
}

function showCookieConsentBanner() {
    const isInPages = window.location.pathname.includes('/pages/');
    const pagesPrefix = isInPages ? '' : 'pages/';
    
    const bannerHtml = `
        <div id="cookieConsentBanner" class="cookie-banner">
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <h4>🍪 Używamy plików cookies</h4>
                    <p>Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                    Klikając "Akceptuję", zgadzasz się na użycie wszystkich plików cookies zgodnie z naszą 
                    <a href="${pagesPrefix}polityka-prywatnosci.html" target="_blank">Polityką Prywatności</a>.</p>
                </div>
                <div class="cookie-banner-buttons">
                    <button onclick="acceptAllCookiesBanner()" class="cookie-btn cookie-btn-primary">Akceptuję</button>
                    <button onclick="showCookieConsent()" class="cookie-btn cookie-btn-secondary">Ustawienia</button>
                    <button onclick="rejectCookies()" class="cookie-btn cookie-btn-secondary">Odrzuć</button>
                </div>
            </div>
        </div>
    `;
    
    if (!document.getElementById('cookieConsentBanner')) {
        document.body.insertAdjacentHTML('beforeend', bannerHtml);
    }
}

function acceptAllCookiesBanner() {
    localStorage.setItem('cookieSettings', JSON.stringify({
        analytics: true,
        marketing: true,
        timestamp: new Date().getTime()
    }));
    
    hideCookieBanner();
    showCookieBannerNotification('Dziękujemy! Cookies zostały zaakceptowane.');
    applyConsentPreferences();
}

function rejectCookies() {
    localStorage.setItem('cookieSettings', JSON.stringify({
        analytics: false,
        marketing: false,
        timestamp: new Date().getTime()
    }));
    
    hideCookieBanner();
    showCookieBannerNotification('Cookies zostały odrzucone. Niektóre funkcje mogą być ograniczone.');
    applyConsentPreferences();
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => {
            if (banner.parentNode) {
                banner.parentNode.removeChild(banner);
            }
        }, 500);
    }
}

// Add cookie banner styles
const cookieBannerStyles = document.createElement('style');
cookieBannerStyles.textContent = `
    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #0D1B2A 0%, #1e3a8a 100%);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 9999;
        animation: slideUp 0.5s ease;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .cookie-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    
    .cookie-banner-text h4 {
        margin: 0 0 8px 0;
        color: #E5E7EB;
        font-size: 1.1rem;
    }
    
    .cookie-banner-text p {
        margin: 0;
        color: #D1D5DB;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .cookie-banner-text a {
        color: #60A5FA;
        text-decoration: none;
    }
    
    .cookie-banner-text a:hover {
        text-decoration: underline;
    }
    
    .cookie-banner-buttons {
        display: flex;
        gap: 10px;
        flex-shrink: 0;
    }
    
    .cookie-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s;
        white-space: nowrap;
    }
    
    .cookie-btn-primary {
        background: #60A5FA;
        color: white;
    }
    
    .cookie-btn-primary:hover {
        background: #3B82F6;
        transform: translateY(-1px);
    }
    
    .cookie-btn-secondary {
        background: transparent;
        color: #E5E7EB;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .cookie-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
    }
    
    @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
    }
    
    @keyframes slideDown {
        from { transform: translateY(0); }
        to { transform: translateY(100%); }
    }
    
    @media (max-width: 768px) {
        .cookie-banner-content {
            flex-direction: column;
            text-align: center;
            padding: 15px;
        }
        
        .cookie-banner-buttons {
            flex-direction: column;
            width: 100%;
        }
        
        .cookie-btn {
            width: 100%;
        }
    }
    
    .gdpr-notice {
        font-size: 0.8rem;
        color: #9CA3AF;
        margin-top: 10px;
        text-align: center;
    }
    
    .gdpr-notice i {
        margin-right: 5px;
        color: #60A5FA;
    }
    
    .gdpr-notice a {
        color: #60A5FA;
        text-decoration: none;
    }
    
    .gdpr-notice a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(cookieBannerStyles);

// Consent utilities – egzekwowanie zgód (ładowanie skryptów dopiero po zgodzie)
function getCookieSettings() {
    try {
        return JSON.parse(localStorage.getItem('cookieSettings')) || { analytics: false, marketing: false };
    } catch (_) {
        return { analytics: false, marketing: false };
    }
}

function hasConsent(category) {
    const settings = getCookieSettings();
    if (category === 'analytics') return !!settings.analytics;
    if (category === 'marketing') return !!settings.marketing;
    return false;
}

// Zamienia skrypty typu text/plain na działające, gdy użytkownik wyraził zgodę
function applyConsentPreferences() {
    // 1) Skrypty wymagające zgody (data-requires-consent="analytics|marketing")
    const pendingScripts = document.querySelectorAll('script[type="text/plain"][data-requires-consent]');
    pendingScripts.forEach((placeholder) => {
        const category = placeholder.getAttribute('data-requires-consent');
        if (!category) return;
        if (!hasConsent(category)) return; // brak zgody – nic nie robimy

        const src = placeholder.getAttribute('data-src');
        const newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        if (src) {
            newScript.src = src;
        } else {
            newScript.text = placeholder.textContent || '';
        }
        // przenosimy atrybuty async/defer, jeśli istnieją
        if (placeholder.hasAttribute('data-async')) newScript.async = true;
        if (placeholder.hasAttribute('data-defer')) newScript.defer = true;

        placeholder.parentNode.replaceChild(newScript, placeholder);
    });

    // 2) Elementy marketingowe/analityczne (np. iframy) oznaczone data-consent-category
    const gatedElements = document.querySelectorAll('[data-consent-category]');
    gatedElements.forEach((el) => {
        const category = el.getAttribute('data-consent-category');
        const allowed = hasConsent(category);
        el.style.display = allowed ? '' : 'none';
    });
}

// Zastosuj preferencje przy starcie strony
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeCookieConsent();
    } catch (_) {}
    applyConsentPreferences();
});