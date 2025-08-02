function toggleSettings() {
  const dropdown = document.getElementById("settingsDropdown");
  dropdown.classList.toggle("hidden");
}

// Optional: Dark mode switch
document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("darkModeToggle");
  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkToggle.checked);
  });
});
