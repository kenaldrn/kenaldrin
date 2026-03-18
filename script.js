const text = "Hello World, I'm Ken";
const typingElement = document.getElementById('typing-text');
const overlay = document.getElementById('intro-overlay');
const navToggle = document.querySelector('.mobile-nav-toggle');
const sidebar = document.querySelector('.sidebar');
let i = 0;

// 1. Typing Effect
function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            overlay.classList.add('slide-up');
            document.body.style.overflow = 'auto';
        }, 1000);
    }
}

window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';
    typeWriter();
});

// 2. Mobile Menu Toggle Logic
navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    // Change icon between Bars and X
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close sidebar when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

// 3. Active Scroll Link
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
};
