// Project Data
const projectsData = {
    ecommerce: {
        title: 'E-Commerce Platform',
        description: 'A comprehensive full-stack e-commerce solution featuring product management, shopping cart functionality, secure payment gateway integration.',
        longDescription: 'This e-commerce platform was developed to provide businesses with a complete online selling solution. The system includes features such as product catalog management with categories and filters, advanced search functionality, secure user authentication and authorization, shopping cart with wishlist, multiple payment gateway integration, real-time order tracking, inventory management, and a comprehensive admin dashboard.',
        technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Midtrans API', 'jQuery'],
        mainImage: 'project-ecommerce-main.jpg',
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
        mainImage: 'perpustakaan.jpeg',
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
        mainImage: 'project-analytics-main.jpg',
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

// Welcome Screen Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('welcomeScreen').classList.add('slide-down');
    }, 5000);
});

// Typing Animation
const texts = ['Web Applications', 'Mobile Apps', 'Database Systems', 'API Integrations', 'Modern UI/UX'];
let textIndex = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
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
        typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}
type();

// Navbar Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Project Modal Functions
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
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

    modalBody.innerHTML = `
        <div class="modal-header-image">
            <img src="${project.mainImage}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22600%22%3E%3Crect fill=%22%231a1a2e%22 width=%221200%22 height=%22600%22/%3E%3Ctext fill=%22%2300d9ff%22 font-family=%22Arial%22 font-size=%2240%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E'">
        </div>
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
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox Functions
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDemoBtn = document.getElementById('lightboxDemoBtn');

    const currentItem = currentGalleryImages[index];
    lightboxImg.src = currentItem.image;
    lightboxDemoBtn.href = currentItem.demo;
    lightboxDemoBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Demo - ${currentItem.title}`;

    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
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
    const currentItem = currentGalleryImages[currentImageIndex];

    lightboxImg.src = currentItem.image;
    lightboxDemoBtn.href = currentItem.demo;
    lightboxDemoBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Demo - ${currentItem.title}`;
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) closeProjectModal();
});

// Close lightbox when clicking outside
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
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
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeImage(-1);
        else if (e.key === 'ArrowRight') changeImage(1);
    }
});

// Scroll Reveal
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) el.classList.add('active');
    });
}
window.addEventListener('scroll', reveal);
reveal();

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.pageYOffset > 300);
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    console.log('Form Data:', formData);
    const submitBtn = this.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    this.reset();
    setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '';
    }, 3000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});