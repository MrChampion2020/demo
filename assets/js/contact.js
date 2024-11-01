
document.querySelectorAll(".about-section h2").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display =
      content.style.display === "none" ? "block" : "none";
  });
});

function handleSubmit(event) {
  event.preventDefault();

  const alertMessage = document.getElementById("alertMessage");

  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    alertMessage.textContent = "Submission successful!";
    alertMessage.className = "alert alert-success";
  } else {
    alertMessage.textContent = "Error occurred while submitting.";
    alertMessage.className = "alert alert-error";
  }

  alertMessage.style.display = "block";
}




/* ============================================================== 
    form input logic area
============================================================== */
function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  let isValid = true;

  if (!nameInput.value.trim()) {
    nameInput.placeholder = "Name is required";
    nameInput.style.color = "red";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim()) {
    emailInput.placeholder = "Email is required";
    emailInput.style.color = "red";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    emailInput.value = "";
    emailInput.placeholder = "Invalid email format";
    emailInput.style.color = "red";
    isValid = false;
  }

  if (!phoneInput.value.trim()) {
    phoneInput.placeholder = "Phone is required";
    phoneInput.style.color = "red";
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    messageInput.placeholder = "Message is required";
    messageInput.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("myForm").submit();
  }
}

function handleInput(event) {
  event.target.style.color = "";
  event.target.placeholder = "";
}


 /* ============================================================== 
    form input logic area ends
============================================================== */

