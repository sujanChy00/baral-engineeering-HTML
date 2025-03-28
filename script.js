AOS.init({
  once: true,
});

function setActiveLink() {
  const currentPath = window.location.pathname;
  const nav = document.getElementById("nav");
  const navLinks = nav.querySelectorAll("ul a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("bg-[var(--secondary)]");
    } else {
      link.classList.remove("bg-[var(--secondary)]");
    }
  });

  if (currentPath === "/" || currentPath === "/index.html") {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
}

const footerText = document.getElementById("footer");
if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Baral & Brothers. All rights reserved.`;
}

setActiveLink();
