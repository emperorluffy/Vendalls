"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Global View Selectors
  const searchTrigger = document.getElementById("search-trigger");
  const searchClose = document.getElementById("search-close");
  const searchPanel = document.getElementById("search-panel");
  const searchInput = document.getElementById("search-input");

  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  // --- Search System Panel Interactivity ---
  if (searchTrigger && searchPanel && searchClose && searchInput) {
    searchTrigger.addEventListener("click", () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove("active");
        const icon = mobileToggle?.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      }

      searchPanel.classList.toggle("active");

      if (searchPanel.classList.contains("active")) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });

    searchClose.addEventListener("click", () => {
      searchPanel.classList.remove("active");
      searchInput.value = "";
    });
  }

  // --- Mobile Navigation Drawer Interactivity ---
  if (mobileToggle && mobileDrawer) {
    const mobileDropdowns = mobileDrawer.querySelectorAll(
      ".mobile-nav li.dropdown",
    );

    mobileToggle.addEventListener("click", () => {
      if (searchPanel) searchPanel.classList.remove("active");

      mobileDrawer.classList.toggle("active");

      const icon = mobileToggle.querySelector("i");
      if (mobileDrawer.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
        // Auto collapse open accordion nodes if the main drawer slips away
        mobileDropdowns.forEach((dropdown) =>
          dropdown.classList.remove("mobile-open"),
        );
      }
    });

    // --- Mobile Submenu Dropdown Accordion Toggle Engine ---
    mobileDropdowns.forEach((dropdownElement) => {
      const triggerLink = dropdownElement.querySelector("a");

      if (triggerLink) {
        triggerLink.addEventListener("click", (event) => {
          event.preventDefault();

          // Close alternative entries to preserve clean accordion display paths
          mobileDropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdownElement) {
              otherDropdown.classList.remove("mobile-open");
            }
          });

          dropdownElement.classList.toggle("mobile-open");
        });
      }
    });
  }

  // --- Carousel Slider Component ---
  const slides = document.querySelectorAll(".slider-slides .deal-image");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (slides.length > 0 && prevBtn && nextBtn) {
    let currentSlideIndex = 0;

    function showSlide(index) {
      slides[currentSlideIndex].classList.remove("active");

      if (index >= slides.length) {
        currentSlideIndex = 0;
      } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
      } else {
        currentSlideIndex = index;
      }

      slides[currentSlideIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", () => showSlide(currentSlideIndex + 1));
    prevBtn.addEventListener("click", () => showSlide(currentSlideIndex - 1));
  }
});
