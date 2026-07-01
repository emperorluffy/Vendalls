"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Search Selectors
  const searchTrigger = document.getElementById("search-trigger");
  const searchClose = document.getElementById("search-close");
  const searchPanel = document.getElementById("search-panel");
  const searchInput = document.getElementById("search-input");

  // Mobile Drawer Selectors
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  // --- Search Interactivity ---
  if (searchTrigger && searchPanel && searchClose && searchInput) {
    searchTrigger.addEventListener("click", () => {
      // Close mobile menu if it happens to be open
      if (mobileDrawer) mobileDrawer.classList.remove("active");

      searchPanel.classList.toggle("active");

      // Focus input instantly when opened
      if (searchPanel.classList.contains("active")) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });

    searchClose.addEventListener("click", () => {
      searchPanel.classList.remove("active");
      searchInput.value = ""; // Clear search text field
    });
  }

  // --- Mobile Navigation Drawer Interactivity ---
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      // Close search if it happens to be open
      if (searchPanel) searchPanel.classList.remove("active");

      mobileDrawer.classList.toggle("active");

      // Dynamic icon transformation for mobile button
      const icon = mobileToggle.querySelector("i");
      if (mobileDrawer.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });
  }
});
