document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.querySelector(".overlay");
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".btn[data-section]");
  const backBtns = document.querySelectorAll(".back-btn");
  const homeworkList = document.getElementById("homework-list");

  // Toggle Menu
  menuBtn.onclick = () => {
    sideMenu.classList.toggle("show");
    overlay.classList.toggle("show");
  };
  overlay.onclick = () => {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  };

  // Open pages
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = document.getElementById(btn.dataset.section);
      if (!section) return;
      pages.forEach(p => p.classList.remove("active"));
      section.classList.add("active");
    });
  });

  // Back button
  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      pages.forEach(p => p.classList.remove("active"));
    });
  });

  // Homework system
  const sampleHW = [
    { title: "Math worksheet 5", done: false },
    { title: "English essay intro", done: true },
    { title: "Science experiment report", done: false },
  ];

  function renderHW() {
    homeworkList.innerHTML = "";
    sampleHW.forEach((hw, i) => {
      const li = document.createElement("li");
      li.className = `homework-item ${hw.done ? "done" : "notdone"}`;
      li.innerHTML = `
        <div style="display:flex;align-items:center;">
          <div class="status"></div>
          <span>${hw.title}</span>
        </div>
        <div class="hw-actions">
          <button class="done-btn"><i data-lucide="check"></i></button>
          <button class="not-btn"><i data-lucide="x"></i></button>
        </div>
      `;
      li.querySelector(".done-btn").onclick = () => {
        hw.done = true;
        renderHW();
      };
      li.querySelector(".not-btn").onclick = () => {
        hw.done = false;
        renderHW();
      };
      homeworkList.appendChild(li);
    });
    lucide.createIcons();
  }

  renderHW();
});
