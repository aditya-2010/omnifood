"use strict";

const sectionHero = document.querySelector(".section-hero");
const sectionHow = document.querySelector(".section-how");
const sectionFeatured = document.querySelector(".section-featured");
const sectionTestimonials = document.querySelector(".section-testimonials");

const btnSignUp = document.querySelector(".btn--cta");
const btnLearnMore = document.querySelector(".btn--outline");

const nav = document.querySelector(".main-nav-list");
const containers = document.querySelectorAll(".container");

// *************************
// Reveal sections on scroll
const reveal = (entries, observer) => {
  const entry = entries[0];
  //   console.log(entry);
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

btnLearnMore.addEventListener("click", (e) => {
  e.preventDefault();
  sectionHow.scrollIntoView({ behavior: "smooth" });
});

nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
