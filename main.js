function script1() {  
  function initThemeSelector() {
      const themeSelect = document.getElementById("themeSelect");
      const themeStylesheetLink = document.getElementById("themeStylesheetLink");
      if (!themeSelect || !themeStylesheetLink) return;

      // Resolve themes beside the initial stylesheet, on every page.
      const themeDirectory = new URL(".", themeStylesheetLink.href);
      const availableThemes = Array.from(themeSelect.options, option => option.value);
      let currentTheme = "red";
      try {
          const savedTheme = localStorage.getItem("theme");
          if (availableThemes.includes(savedTheme)) currentTheme = savedTheme;
      } catch {
          // Theme switching still works when browser storage is unavailable.
      }

      function activateTheme(themeName) {
          themeStylesheetLink.href = new URL(`${themeName}.css`, themeDirectory).href;
      }

      themeSelect.addEventListener("change", () => {
          activateTheme(themeSelect.value);
          try {
              localStorage.setItem("theme", themeSelect.value);
          } catch {
              // Keep the selected theme active for this page.
          }
      });


      themeSelect.value = currentTheme;
      activateTheme(currentTheme);
  }

  initThemeSelector();
}

function script2() { 
  var btn = document.getElementById("jump-to-top");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  btn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

script1();
script2();
