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
