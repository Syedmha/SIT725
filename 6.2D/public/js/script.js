document.addEventListener("DOMContentLoaded", function () {
  // Initialize Materialize modal
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("submitted") === "true") {
    M.toast({ html: "Project submitted successfully!" });
  }
});
