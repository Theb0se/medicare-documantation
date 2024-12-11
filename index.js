// JavaScript for handling hash-based section visibility
window.addEventListener("load", function () {
  // Get the current hash from the URL
  let currentHash = window.location.hash;

  // Hide all sections first
  const allSections = document.querySelectorAll(".content-container");
  allSections.forEach((section) => (section.style.display = "none"));

  // Show the section that matches the hash in the URL
  if (currentHash) {
    const targetSection = document.querySelector(currentHash);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  } else {
    // Default to show the first section
    allSections[0].style.display = "block";
  }
});

// Update the section when clicking on a link
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    let targetHash = this.getAttribute("href");

    // Update the URL hash
    window.location.hash = targetHash;

    // Hide all sections
    const allSections = document.querySelectorAll(".content-container");
    allSections.forEach((section) => (section.style.display = "none"));

    // Show the clicked section
    const targetSection = document.querySelector(targetHash);
    if (targetSection) {
      targetSection.style.display = "block";
    }

    const setActiveLink = () => {
      const currentHash = window.location.hash;

      links.forEach((link) => {
        if (link.getAttribute("href") === currentHash) {
          link.classList.add("link-active");
        } else {
          link.classList.remove("link-active");
        }
      });
    };
    setActiveLink();

    event.preventDefault(); // Prevent default anchor behavior
  });
});
const links2 = document.querySelectorAll(".custom-link-hash");
links2.forEach((link) => {
  link.addEventListener("click", function (event) {
    let targetHash = this.getAttribute("href");

    // Update the URL hash
    window.location.hash = targetHash;

    // Hide all sections
    const allSections = document.querySelectorAll(".content-container");
    allSections.forEach((section) => (section.style.display = "none"));

    // Show the clicked section
    const targetSection = document.querySelector(targetHash);
    if (targetSection) {
      targetSection.style.display = "block";
    }

    const setActiveLink = () => {
      const currentHash = window.location.hash;

      links.forEach((link) => {
        if (link.getAttribute("href") === currentHash) {
          link.classList.add("link-active");
        } else {
          link.classList.remove("link-active");
        }
      });
    };
    setActiveLink();

    event.preventDefault(); // Prevent default anchor behavior
  });
});


