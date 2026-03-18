// Initialize Icons
lucide.createIcons();

const text = "Hello World, I'm Ken_";
const typingElement = document.getElementById('typing-text');
const overlay = document.getElementById('intro-overlay');
let i = 0;

// 1. Terminal Typing Effect
function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            overlay.style.transform = "translateY(-100%)";
            document.body.style.overflow = "auto";
            revealOnScroll(); // Trigger initial check
        }, 1200);
    }
}

// 2. Scroll Reveal Effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

// 3. Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// 4. Event Listeners
window.addEventListener('load', () => {
    document.body.style.overflow = "hidden";
    typeWriter();
});

window.addEventListener('scroll', revealOnScroll);

// Close menu when clicking link (mobile)
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});
