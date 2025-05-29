// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    document.querySelector('nav').prepend(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    
    const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Salva a preferência no localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Carrega o tema salvo ao recarregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
    
    });
});
