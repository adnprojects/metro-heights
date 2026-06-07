const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby5HLBcuuylzQ8LhrfG0YORNxDdQICskWV9vGeXkPEAudthmEm_rpGgQacSqfuZR9ZLjw/exec";

const header = document.querySelector("[data-header]");
const revealElements = document.querySelectorAll(".reveal");
const leadForm = document.querySelector("#leadForm");
const formStatus = document.querySelector("#formStatus");

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

leadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = leadForm.querySelector("button[type='submit']");
  const formData = new FormData(leadForm);
  
  // Create a clean URL-encoded string payload using form fields
  const searchParams = new URLSearchParams();
  searchParams.append("fullName", formData.get("name") || "");
  searchParams.append("phoneNumber", formData.get("phone") || "");
  searchParams.append("email", formData.get("email") || "");
  searchParams.append("interestedIn", formData.get("interestedIn") || "");
  searchParams.append("message", formData.get("message") || "");
  searchParams.append("source", "Website");
  searchParams.append("project", "Metro Heights");
  searchParams.append("propertyType", "Premium 3 & 4 BHK High Rise Residences");
  searchParams.append("location", "Puppala Guda, Hyderabad");
  searchParams.append("eoiPrice", "8499 per sft + additional charges");
  searchParams.append("submittedAt", new Date().toISOString());

  formStatus.className = "form-status";

  if (!GOOGLE_SCRIPT_URL) {
    formStatus.textContent = "Form is ready. Add your Google Apps Script URL in script.js to start saving leads.";
    formStatus.classList.add("error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  formStatus.textContent = "";

  try {
    // Sending as standard application/x-www-form-urlencoded parameters
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: searchParams.toString()
    });

    leadForm.reset();
    formStatus.textContent = "Thank you. Your enquiry has been submitted.";
    formStatus.classList.add("success");
  } catch (error) {
    formStatus.textContent = "Something went wrong. Please try again.";
    formStatus.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Enquiry";
  }
});
