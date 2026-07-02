// ========================================
// PROJECT DATA (SUDAH DIUBAH KE ICON)
// ========================================
const projectsData = {
    ecommerce: {
        title: 'E-Commerce Platform',
        description: 'A comprehensive full-stack e-commerce solution featuring product management, shopping cart functionality, secure payment gateway integration.',
        longDescription: 'This e-commerce platform was developed to provide businesses with a complete online selling solution. The system includes features such as product catalog management with categories and filters, advanced search functionality, secure user authentication and authorization, shopping cart with wishlist, multiple payment gateway integration, real-time order tracking, inventory management, and a comprehensive admin dashboard.',
        technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Midtrans API', 'jQuery'],
        icon: 'fas fa-shopping-cart',
        mainImage: null,
        gallery: [
            { image: 'project-ecommerce-1.jpg', demo: 'https://ecommerce-demo1.example.com', title: 'Halaman Utama' },
            { image: 'project-ecommerce-2.jpg', demo: 'https://ecommerce-demo2.example.com', title: 'Halaman Produk' },
            { image: 'project-ecommerce-3.jpg', demo: 'https://ecommerce-demo3.example.com', title: 'Shopping Cart' },
            { image: 'project-ecommerce-4.jpg', demo: 'https://ecommerce-demo4.example.com', title: 'Checkout' }
        ],
        liveDemo: '#'
    },
    taskapp: {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team collaboration features, task assignment, deadline tracking.',
        longDescription: 'This task management application helps teams organize, track, and manage their work more effectively. Key features include creating and assigning tasks to team members, setting priorities and deadlines, real-time notifications and updates, file attachments and comments, progress tracking with visual charts.',
        technologies: ['PHP', 'MySQL', 'CSS3', 'JavaScript', 'WebSocket', 'Chart.js'],
        icon: 'fas fa-tasks',
        mainImage: null,
        gallery: [
            { image: 'perpustakaan.jpeg', demo: 'https://perpustakaan-digital.example.com', title: 'Perpustakaan Digital' },
            { image: 'project-taskapp-2.jpg', demo: 'https://taskapp-demo2.example.com', title: 'Task Board' },
            { image: 'project-taskapp-3.jpg', demo: 'https://taskapp-demo3.example.com', title: 'Analytics' }
        ],
        liveDemo: '#'
    },
    analytics: {
        title: 'Analytics Dashboard',
        description: 'An interactive data visualization dashboard featuring real-time analytics, customizable charts and graphs, data export functionality.',
        longDescription: 'This analytics dashboard provides businesses with powerful data visualization and reporting capabilities. The system features real-time data updates, interactive charts using D3.js and Chart.js, customizable dashboard widgets, data filtering and segmentation, automated report generation.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'D3.js', 'Chart.js', 'PHP'],
        icon: 'fas fa-chart-line',
        mainImage: null,
        gallery: [
            { image: 'project-analytics-1.jpg', demo: 'https://analytics-demo1.example.com', title: 'Dashboard Overview' },
            { image: 'project-analytics-2.jpg', demo: 'https://analytics-demo2.example.com', title: 'Reports' },
            { image: 'project-analytics-3.jpg', demo: 'https://analytics-demo3.example.com', title: 'Data Visualization' },
            { image: 'project-analytics-4.jpg', demo: 'https://analytics-demo4.example.com', title: 'Settings' }
        ],
        liveDemo: '#'
    }
};

let currentGalleryImages = [];
let currentImageIndex = 0;

// ========================================
// WELCOME SCREEN ANIMATION
// ========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const welcomeScreen = document.getElementById('welcomeScreen');
        if (welcomeScreen) {
            welcomeScreen.classList.add('slide-down');
        }
    }, 5000);
});

// ========================================
// TYPING ANIMATION
// ========================================
const texts = ['Web Applications', 'Mobile Apps', 'Database Systems', 'API Integrations', 'Modern UI/UX'];
let textIndex = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
    if (!typingElement) return;
    
    const currentText = texts[textIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

if (typingElement) {
    type();
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ========================================
// MOBILE MENU
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ========================================
// TAB SWITCHING
// ========================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

// ========================================
// PROJECT MODAL FUNCTIONS (SUDAH DIUBAH KE ICON)
// ========================================
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;
    
    currentGalleryImages = project.gallery;

    const galleryHTML = project.gallery.map((item, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <img src="${item.image}" alt="${item.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22250%22/%3E%3Ctext fill=%22%2300d9ff%22 font-family=%22Arial%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E'">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
                <span style="color: white; font-size: 0.9rem; font-weight: 600;">${item.title}</span>
                <a href="${item.demo}" class="gallery-demo-btn" target="_blank" onclick="event.stopPropagation()">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `).join('');

    // === HEADER: ICON atau GAMBAR ===
    let headerHTML = '';
    
    if (project.icon) {
        headerHTML = `
            <div class="modal-header-icon">
                <i class="${project.icon}"></i>
            </div>
        `;
    } else if (project.mainImage) {
        headerHTML = `
            <div class="modal-header-image">
                <img src="${project.mainImage}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22600%22%3E%3Crect fill=%22%231a1a2e%22 width=%221200%22 height=%22600%22/%3E%3Ctext fill=%22%2300d9ff%22 font-family=%22Arial%22 font-size=%2240%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E'">
            </div>
        `;
    }

    modalBody.innerHTML = `
        ${headerHTML}
        <div class="modal-info">
            <h2>${project.title}</h2>
            <p>${project.longDescription}</p>
            <div class="modal-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <div class="project-gallery">
                <h3>Project Gallery</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">Klik pada gambar untuk melihat detail dan demo masing-masing fitur</p>
                <div class="gallery-grid">
                    ${galleryHTML}
                </div>
            </div>
        </div>
    `;

    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========================================
// LIGHTBOX FUNCTIONS
// ========================================
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDemoBtn = document.getElementById('lightboxDemoBtn');

    if (!lightbox || !lightboxImg || !lightboxDemoBtn) return;

    const currentItem = currentGalleryImages[index];
    lightboxImg.src = currentItem.image;
    lightboxDemoBtn.href = currentItem.demo;
    lightboxDemoBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Demo - ${currentItem.title}`;

    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= currentGalleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentGalleryImages.length - 1;
    }

    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDemoBtn = document.getElementById('lightboxDemoBtn');
    
    if (!lightboxImg || !lightboxDemoBtn) return;
    
    const currentItem = currentGalleryImages[currentImageIndex];

    lightboxImg.src = currentItem.image;
    lightboxDemoBtn.href = currentItem.demo;
    lightboxDemoBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Demo - ${currentItem.title}`;
}

// ========================================
// MODAL & LIGHTBOX EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === this) closeProjectModal();
        });
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });
    }
});

// Close modal/lightbox with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeLightbox();
    }
});

// Navigate lightbox with arrow keys
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeImage(-1);
        else if (e.key === 'ArrowRight') changeImage(1);
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

document.addEventListener('DOMContentLoaded', () => {
    reveal();
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('show', window.pageYOffset > 300);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            subject: document.getElementById('subject')?.value || '',
            message: document.getElementById('message')?.value || ''
        };
        
        console.log('Form Data:', formData);
        
        const submitBtn = this.querySelector('.submit-btn');
        if (submitBtn) {
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            this.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                const navLinks = document.getElementById('navLinks');
                const hamburger = document.getElementById('hamburger');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
}

// ========================================
// TOUCH DEVICE DETECTION
// ========================================
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// ========================================
// INITIALIZATION COMPLETE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
    console.log('Touch device:', isTouchDevice());
});
