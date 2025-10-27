// ===============================
// MAIN.JS — Portfolio Interactivity
// ===============================

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------
     THEME TOGGLE (Light / Dark)
  --------------------------------*/
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Check saved theme or system preference
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });


  /* -------------------------------
     TYPING ANIMATION
  --------------------------------*/
  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    const text = typingElement.getAttribute("data-text") || "a passionate developer!";
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();
  }


  /* -------------------------------
     SMOOTH SCROLL FOR NAV LINKS
  --------------------------------*/
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // offset for sticky header
          behavior: "smooth",
        });
      }
    });
  });


  /* -------------------------------
     ACTIVE NAV HIGHLIGHT ON SCROLL
  --------------------------------*/
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-pink-500");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("text-pink-500");
      }
    });
  });

});

const downloadBtn = document.getElementById('downloadResume');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default link behavior

    // Create temporary link
    const link = document.createElement('a');
    link.href = 'assets/docs/resume_anis.pdf'; // relative path to your PDF
    link.download = 'Anis_Syamimi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional alert
    alert('Your CV download has started!');
  });
}