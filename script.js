// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    document.querySelector('nav').prepend(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    });
});
