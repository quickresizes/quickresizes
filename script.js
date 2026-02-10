const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌞";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggleBtn.textContent = isLight ? "🌞" : "🌙";
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
