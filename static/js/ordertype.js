document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("order-context-modal");
  const orderType = document.getElementById("order-type");
  const confirmBtn = document.getElementById("confirm-order-context");
  const statusDiv = document.getElementById("order-status");

  orderType.addEventListener("change", () => {
    // No extra fields for enrollment use case
  });

  confirmBtn.addEventListener("click", () => {
    const type = orderType.value;
    if (!type) {
      alert("Please select an option.");
      return;
    }

    sessionStorage.setItem("enrollment_context", type);
    modal.classList.add("hidden");
    updateStatus();
  });

  function updateStatus() {
    const type = sessionStorage.getItem("enrollment_context");
    if (type && statusDiv) {
      statusDiv.textContent = type === "school" ? "Completing form at school" : "Completing form from home";
    }
  }

  if (!sessionStorage.getItem("enrollment_context")) {
    modal.classList.remove("hidden");
  } else {
    updateStatus();
  }
});
