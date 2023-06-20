"use strict";

const sectionHero = document.querySelector(".section-hero");
const sectionHow = document.querySelector(".section-how");
const sectionTestimonials = document.querySelector(".section-testimonials");

const btnLearnMore = document.querySelector(".btn--outline");
const btnMobileNav = document.querySelector(".btn--mobile-nav");

const header = document.querySelector(".header");
const logos = document.querySelectorAll(".logo");
const navList = document.querySelector(".main-nav-list");
const containers = document.querySelectorAll(".container");

// *************************
// Reveal sections on scroll
const reveal = (entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.1,
});

containers.forEach((container) => {
  sectionObserver.observe(container);
  sectionObserver.observe(sectionTestimonials);
  container.classList.add("section--hidden");
  sectionTestimonials.classList.add("section--hidden");
});
// *************************

// *************************
// Sticky nav
const headerHeight = header.getBoundingClientRect().height;
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting === false) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`,
  }
);
observer.observe(sectionHero);
// *************************

// Toggle responsive navbar
btnMobileNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

btnLearnMore.addEventListener("click", (e) => {
  e.preventDefault();
  sectionHow.scrollIntoView({ behavior: "smooth" });
});

navList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    header.classList.toggle("nav-open");
  }
});
