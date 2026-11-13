/* ========== PORTFOLIO MAIN.JS ========== */

/* ---- HEADER SCROLL ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
    showScrollUp();
});

/* ---- MOBILE NAV TOGGLE ---- */
const navToggle  = document.getElementById('nav-toggle');
const navClose   = document.getElementById('nav-close');
const navMenu    = document.getElementById('nav-menu');

navToggle?.addEventListener('click', () => navMenu.classList.add('show-menu'));
navClose?.addEventListener('click',  () => navMenu.classList.remove('show-menu'));

// Close menu when nav link clicked
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

/* ---- DARK / LIGHT THEME ---- */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = themeToggle.querySelector('i');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop    = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId     = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        if (link) {
            link.classList.toggle('active-link', scrollY >= sectionTop && scrollY < sectionTop + sectionHeight);
        }
    });
}

/* ---- SCROLL REVEAL ANIMATIONS ---- */
const reveals = document.querySelectorAll('.section__header, .home__content, .home__img-wrap, .about__img-wrap, .about__info, .skills__group, .service__card, .portfolio__item, .contact__info, .contact__form');

// Add reveal class to elements
reveals.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, idx * 80);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

/* ---- SKILL BAR ANIMATION ---- */
const skillFills = document.querySelectorAll('.skill__fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.dataset.fill + '%';
            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ---- PORTFOLIO FILTER ---- */
const filterBtns  = document.querySelectorAll('.filter__btn');
const portfolioItems = document.querySelectorAll('.portfolio__item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {
            const category = item.dataset.category;
            const show = filter === 'all' || category === filter;

            if (show) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInDown 0.4s ease';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

/* ---- SCROLL UP BUTTON ---- */
const scrollUpBtn = document.getElementById('scroll-up');

function showScrollUp() {
    scrollUpBtn?.classList.toggle('show', window.scrollY >= 400);
}

/* ---- CONTACT FORM ---- */
const contactForm   = document.getElementById('contact-form');
const formMessage   = document.getElementById('form-message');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate sending (replace with real API call)
    setTimeout(() => {
        formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formMessage.className = 'form__message success';
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;

        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form__message';
        }, 5000);
    }, 1800);
});

/* ---- TYPING ANIMATION ---- */
const titleEl = document.querySelector('.home__title');
if (titleEl) {
    const roles = ['Web Developer', 'UI Designer', 'Problem Solver', 'Freelancer'];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    const roleSpan = document.createElement('span');
    roleSpan.style.color = 'var(--clr-primary)';

    // Find and replace role text
    const originalTitle = titleEl.innerHTML;
    titleEl.innerHTML = `Hi, I'm Alex Morgan<br><span id="typed-role"></span>`;
    const typedEl = document.getElementById('typed-role');

    function typeRole() {
        const currentRole = roles[roleIdx];

        if (deleting) {
            typedEl.textContent = currentRole.substring(0, charIdx--);
        } else {
            typedEl.textContent = currentRole.substring(0, charIdx++);
        }

        let speed = deleting ? 60 : 120;

        if (!deleting && charIdx > currentRole.length) {
            speed = 2000; // Pause
            deleting = true;
        } else if (deleting && charIdx < 0) {
            deleting = false;
            charIdx = 0;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeRole, speed);
    }

    setTimeout(typeRole, 800);
}

/* ---- SMOOTH PARALLAX ON HOME ---- */
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const blob = document.querySelector('.home__blob');
    if (blob && scrolled < window.innerHeight) {
        blob.style.transform = `translateY(${scrolled * 0.08}px)`;
    }
});

/* ---- CURSOR EFFECT (desktop) ---- */
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--clr-primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: multiply;
`;
document.body.appendChild(cursor);

const cursorRing = document.createElement('div');
cursorRing.style.cssText = `
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(108,99,255,0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.15s ease;
`;
document.body.appendChild(cursorRing);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top  = e.clientY - 4 + 'px';
    cursorRing.style.left = e.clientX - 15 + 'px';
    cursorRing.style.top  = e.clientY - 15 + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursorRing.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorRing.style.transform = 'scale(1)';
    });
});

// Hide custom cursor on touch devices
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorRing.style.display = 'none';
}

/* ---- STATS COUNTER ANIMATION ---- */
function animateCounter(el, target) {
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        el.textContent = count + (el.dataset.suffix || '');
    }, 25);
}

const statNumbers = document.querySelectorAll('.stat__number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent;
            const num = parseInt(text);
            const suffix = text.replace(/[0-9]/g, '');
            el.dataset.suffix = suffix;
            animateCounter(el, num);
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(n => statsObserver.observe(n));


function sendEmail(e) {
    e.preventDefault();
    var btn = e.target.querySelector('button[type="submit"]');
    var msgEl = document.getElementById("form-message");

    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs.send("service_dmtfbmu", "template_ejangvq", {
        from_name: document.getElementById("f-name").value,
        reply_to: document.getElementById("f-email").value,   // user's email
        subject: document.getElementById("f-subject").value,
        message: document.getElementById("f-message").value,
        to_email: "mr.mahesh.303@gmail.com"
    })
    .then(function() {
        msgEl.textContent = "✓ Message sent successfully!";
        msgEl.style.color = "green";
        e.target.reset();
    })
    .catch(function() {
        msgEl.textContent = "✗ Something went wrong. Please try again.";
        msgEl.style.color = "red";
    })
    .finally(function() {
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    });
}
