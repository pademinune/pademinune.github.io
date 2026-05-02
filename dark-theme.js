
function toggleTheme() {
    const dark = document.body.classList.toggle('dark');
    document.getElementById('theme-toggle').textContent = dark ? 'Light' : 'Dark';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

function init() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-toggle').textContent = 'Light';
    }
}


init();
