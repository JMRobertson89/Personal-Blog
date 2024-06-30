const toggleSwitch = document.getElementById('toggle');
const darkMode = localStorage.getItem('darkMode');

if (darkMode) {
    document.body.classList.toggle('dark-mode', darkMode === 'true');
    toggleSwitch.checked = darkMode === 'true';
}

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});