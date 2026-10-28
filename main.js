function script1() {  
  function initThemeSelector() {
      const themeSelect = document.getElementById("themeSelect");
      const themeStylesheetLink = document.getElementById("themeStylesheetLink");
      const currentTheme = localStorage.getItem("theme") || "red";

      function activateTheme(themeName) {
          themeStylesheetLink.setAttribute("href", `css/themes/${themeName}.css`);
      }

      themeSelect.addEventListener("change", () => {
          activateTheme(themeSelect.value);
          localStorage.setItem("theme", themeSelect.value);
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