AOS.init({
  once: true,
});

function setActiveLink() {
  const currentPath = window.location.pathname;
  const nav = document.getElementById("nav");
  const navLinks = nav.querySelectorAll("ul a");
  const sidebarLinks = document
    .querySelector(".sidebar")
    .querySelectorAll("ul a");

  const setActiveState = (links) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("bg-[var(--secondary)]");
      } else {
        link.classList.remove("bg-[var(--secondary)]");
      }
    });
  };

  setActiveState(navLinks);
  setActiveState(sidebarLinks);

  if (currentPath === "/" || currentPath === "/index.html") {
    navLinks.forEach((link) => link.classList.remove("active"));
    sidebarLinks.forEach((link) => link.classList.remove("active"));
  }
}

const footerText = document.getElementById("footer");
if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Baral & Brothers. All rights reserved.`;
}

setActiveLink();

const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");
const closeSidebarButton = document.getElementById("closeSidebarButton");

openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  document.body.style.overflow = "auto";
});

closeSidebarButton.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  document.body.style.overflow = "auto";
});
