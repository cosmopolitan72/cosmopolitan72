document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.getElementById("theme-toggler");
  const body = document.body;
  let currentTheme = localStorage.getItem("theme") || "light-mode";
  
  applyTheme(currentTheme);

  toggleThemeButton.addEventListener("click", function (event) {
    event.preventDefault(); // 추가한 코드입니다. 기본 동작을 막아줍니다.
    currentTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }
});
