// Set current date
const dateElement = document.getElementById("date");
const today = new Date();
dateElement.textContent = `Today: ${today.toDateString()}`;

// Handle download button clicks
const buttons = document.querySelectorAll(".download-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    if (url) {
      window.location.href = url; // Redirects to download page
    } else {
      alert("Download link not available.");
    }
  });
});
