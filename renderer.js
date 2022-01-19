document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", async () => {
    const isDarkMode = await window.methodToggle();
    document.getElementById("theme-source").textContent = isDarkMode
      ? "Dark"
      : "Light";
  });

document
  .getElementById("reset-to-system")
  .addEventListener("click", async () => {
    await window.methodSystem();
    document.getElementById("theme-source").textContent = "System";
  });
