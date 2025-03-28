AOS.init({
  once: true,
});

const emblaNode = document.querySelector(".embla");
const options = { loop: false };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

const prevBtn = document.querySelector(".embla__prev");
const nextBtn = document.querySelector(".embla__next");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => emblaApi.scrollPrev());
  nextBtn.addEventListener("click", () => emblaApi.scrollNext());

  const updatePrevNextBtns = () => {
    if (emblaApi.canScrollPrev()) {
      prevBtn.removeAttribute("disabled");
    } else {
      prevBtn.setAttribute("disabled", "disabled");
    }

    if (emblaApi.canScrollNext()) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", "disabled");
    }
  };

  emblaApi
    .on("select", updatePrevNextBtns)
    .on("init", updatePrevNextBtns)
    .on("reInit", updatePrevNextBtns);
}

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
