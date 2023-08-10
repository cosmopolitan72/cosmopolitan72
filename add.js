<script>
document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.getElementById("theme-toggler");
  const body = document.body;
  let currentTheme = localStorage.getItem("theme") || "light-mode";
  
  applyTheme(currentTheme);

  toggleThemeButton.addEventListener("click", function () {
    currentTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }
});
</script>
