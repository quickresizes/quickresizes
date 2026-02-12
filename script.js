const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // icon change
  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌞";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

const search = document.getElementById("search");
const tools = document.querySelectorAll(".tool-card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  tools.forEach(tool => {
    tool.style.display = tool.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});
