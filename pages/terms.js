// modal.js

// Function to load the terms modal HTML
function loadTermsModal() {
 fetch('terms-and-conditions.html')
   .then(response => response.text())
   .then(data => {
     document.body.insertAdjacentHTML('beforeend', data);
   })
   .catch(error => console.error('Error loading terms modal:', error));
}

// Function to open the Terms and Conditions modal
function openTermsModal() {
 const modal = document.getElementById('terms-modal');
 if (modal) {
   modal.style.display = 'flex';
 }
}

// Function to close the Terms and Conditions modal
function closeTermsModal() {
 const modal = document.getElementById('terms-modal');
 if (modal) {
   modal.style.display = 'none';
 }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
 const modal = document.getElementById('terms-modal');
 if (event.target === modal) {
   closeTermsModal();
 }
};

// Load the modal on page load
window.onload = loadTermsModal;
