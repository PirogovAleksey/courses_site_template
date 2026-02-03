function toggleTheme() {
  const isDark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', isDark);
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = isDark ? 'Світла тема' : 'Темна тема';
}

// Apply theme on page load (for elements that need body.dark class)
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  document.body.classList.add('dark');
  document.getElementById('theme-icon').textContent = '☀️';
  document.getElementById('theme-label').textContent = 'Світла тема';
}
