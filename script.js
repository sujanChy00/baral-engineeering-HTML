AOS.init({
  once: true,
});

let currentLanguage = localStorage.getItem("language") || "ja";

function updateContent(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateContent(currentLanguage);

  const languageSelect = document.getElementById("languageSelect");
  const mobileLangSelect = document.getElementById("mobileLangSelect");

  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      updateContent(newLang);
      if (mobileLangSelect) mobileLangSelect.value = newLang;
    });
  }

  if (mobileLangSelect) {
    mobileLangSelect.value = currentLanguage;
    mobileLangSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      updateContent(newLang);
      if (languageSelect) languageSelect.value = newLang;
    });
  }
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

const homeSidebarBtn = document.getElementById("homeSidebarButton");
const sidebar = document.querySelector(".sidebar");
const openSidebarButton = document.getElementById("openSidebar");
const closeSidebarButton = document.getElementById("closeSidebarButton");
const closeSidebar = document.getElementById("closeSidebar");

if (homeSidebarBtn) {
  homeSidebarBtn.addEventListener("click", () => {
    sidebar?.classList.remove("hidden");
  });
  sidebar?.addEventListener("click", (e) => {
    if (e.target === sidebar) {
      sidebar?.classList.add("hidden");
    }
  });
}
openSidebarButton?.addEventListener("click", () => {
  sidebar?.classList.remove("hidden");
});

const closeSidebarFn = () => {
  sidebar?.classList.add("hidden");
};

closeSidebarButton?.addEventListener("click", closeSidebarFn);
closeSidebar?.addEventListener("click", closeSidebarFn);

sidebar?.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    closeSidebarFn();
  }
});
