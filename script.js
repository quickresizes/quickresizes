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
