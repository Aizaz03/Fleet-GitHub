document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-tab");

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("tab-active"));
      contents.forEach((content) => content.classList.remove("content-active"));

      // Add active classes to the clicked tab and corresponding content
      tab.classList.add("tab-active");
      document.getElementById(target).classList.add("content-active");
    });
  });

  // Set the first tab as active by default
  tabs[0].classList.add("tab-active");
  contents[0].classList.add("content-active");
});
