const form = document.getElementById("contact");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  // Access the form data using the FormData object's methods
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  window.location.href = `mailto:erensmr63@gmail.com?subject=New%20Message%20From%20Website&body=${name}%20(${email})%0A%0A${message}`;
});
