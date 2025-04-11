// hero section js
// Background animation (stars, moon, programming icons)
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.getElementById('background-animation').appendChild(canvas);

const ctx = canvas.getContext('2d');

let objects = [];
function init() {
    for (let i = 0; i < 100; i++) {
        objects.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3,
            dx: Math.random() * 0.5 - 0.25,
            dy: Math.random() * 0.5 - 0.25,
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach((obj) => {
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        obj.x += obj.dx;
        obj.y += obj.dy;

        if (obj.x < 0 || obj.x > canvas.width) obj.dx = -obj.dx;
        if (obj.y < 0 || obj.y > canvas.height) obj.dy = -obj.dy;
    });
    requestAnimationFrame(animate);
}

init();
animate();


// about js
// Create a dynamic background with moving stars and moons
document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.animated-background');

    // Generate stars and moons dynamically
    const createElement = (className, quantity) => {
        for (let i = 0; i < quantity; i++) {
            const element = document.createElement('div');
            element.classList.add(className);

            // Randomize positions
            element.style.top = `${Math.random() * 100}%`;
            element.style.left = `${Math.random() * 100}%`;

            // Randomize animation duration and delay
            element.style.animationDuration = `${15 + Math.random() * 10}s`;
            element.style.animationDelay = `${Math.random() * 10}s`;

            background.appendChild(element);
        }
    };

    // Create 50 stars and 10 moons
    createElement('star', 50);
    createElement('moon', 10);
});

// portfolio js
document.addEventListener('DOMContentLoaded', () => {
    // Select all animated icons
    const icons = document.querySelectorAll('.cloud-icon, .web-icon, .ai-icon, .code-icon');

    // Function to set random initial positions and animation durations
    const randomizeIcons = () => {
        icons.forEach(icon => {
            const randomX = Math.random() * 100; // Random horizontal position (0-100% viewport width)
            const randomY = Math.random() * 100; // Random vertical position (0-100% viewport height)
            const randomDuration = Math.random() * 15 + 15; // Random animation duration (15-30s)

            icon.style.left = `${randomX}vw`;
            icon.style.top = `${randomY}vh`;
            icon.style.animationDuration = `${randomDuration}s`;
        });
    };

    // Apply randomization on load
    randomizeIcons();

    // Re-randomize every 30 seconds to simulate dynamic repositioning
    setInterval(randomizeIcons, 30000);
});

// contact js
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.mail-icon, .chat-icon, .phone-icon');

    const randomizeIcons = () => {
        icons.forEach(icon => {
            const randomX = Math.random() * 100; // Random horizontal position
            const randomY = Math.random() * 100; // Random vertical position
            const randomDuration = Math.random() * 20 + 10; // Random animation duration (10-30s)

            icon.style.left = `${randomX}vw`;
            icon.style.top = `${randomY}vh`;
            icon.style.animationDuration = `${randomDuration}s`;
        });
    };

    randomizeIcons();
    setInterval(randomizeIcons, 25000); // Re-randomize every 25 seconds
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.certification-card');
    items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        setTimeout(() => {
            item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200); // Delay for staggered animation
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector('.resume-content');
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    setTimeout(() => {
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, 300); // Delay to sync with page load
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form');
    form.style.opacity = "0";
    form.style.transform = "translateY(50px)";
    setTimeout(() => {
        form.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }, 300);
});

  // Theme Toggle
  const toggleTheme = document.querySelector('.theme-toggle');
  toggleTheme.addEventListener('click', () => {
      document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });