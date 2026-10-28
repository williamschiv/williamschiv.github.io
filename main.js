function initThemeSelector() {
  const themeSelect = document.getElementById("themeSelect");
  const themeStylesheetLink = document.getElementById("themeStylesheetLink");
  if (!themeSelect || !themeStylesheetLink) return;

  const themes = Array.from(themeSelect.options, option => option.value);
  let currentTheme = "red";
  try {
    const savedTheme = localStorage.getItem("theme");
    if (themes.includes(savedTheme)) currentTheme = savedTheme;
  } catch {
    // Theme switching still works when browser storage is disabled.
  }

  function activateTheme(themeName) {
    const theme = themes.includes(themeName) ? themeName : "red";
    themeSelect.value = theme;
    themeStylesheetLink.setAttribute("href", `/css/themes/${theme}.css`);
  }

  activateTheme(currentTheme);
  themeSelect.addEventListener("change", () => {
    activateTheme(themeSelect.value);
    try {
      localStorage.setItem("theme", themeSelect.value);
    } catch {
      // The selected theme remains active for this page.
    }
  });
}

function initJumpToTop() {
  const button = document.getElementById("jump-to-top");
  if (!button) return;

  function updateVisibility() {
    button.style.display = window.scrollY > 20 ? "block" : "none";
  }

  window.addEventListener("scroll", updateVisibility);
  updateVisibility();
  button.addEventListener("click", () => window.scrollTo(0, 0));
}

initThemeSelector();
initJumpToTop();
