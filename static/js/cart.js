document.addEventListener("DOMContentLoaded", () => {
  const floatingCart = document.getElementById("floating-cart");
  const cartModal = document.getElementById("cart-modal");
  const closeCartBtn = document.getElementById("close-cart");
  const submitFormBtn = document.getElementById("place-order");
  const cartItemsContainer = document.getElementById("cart-items");

  // Submission logic
  submitFormBtn.addEventListener("click", () => {
    const allFields = document.querySelectorAll("input, select, textarea");
    const enrollmentData = {};

    allFields.forEach((field) => {
      if (field.name) {
        enrollmentData[field.name] = field.value;
      }
    });

    fetch("/submit_enrollment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollmentData)
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "Enrollment submitted successfully!");
      cartModal.classList.add("hidden");
    })
    .catch(err => {
      alert("Error submitting form. Please try again.");
      console.error(err);
    });
  });

  floatingCart.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
  });

  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });
});
