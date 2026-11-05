// Language State & Theme State
let currentLang = 'uz';
let currentTheme = 'light';

const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');

// Theme Toggle Functionality
themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update Icon
    const icon = themeToggleBtn.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// Language Toggle Functionality
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'uz' ? 'en' : 'uz';
    langToggleBtn.textContent = currentLang === 'uz' ? 'EN' : 'UZ';

    // Update Text Elements
    const langElements = document.querySelectorAll('.lang-text');
    langElements.forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            el.textContent = text;
        }
    });

    // Update Input Placeholders
    const placeholderElements = document.querySelectorAll('.lang-placeholder');
    placeholderElements.forEach(el => {
        const placeholderText = el.getAttribute(`data-${currentLang}`);
        if (placeholderText) {
            el.setAttribute('placeholder', placeholderText);
        }
    });
});
