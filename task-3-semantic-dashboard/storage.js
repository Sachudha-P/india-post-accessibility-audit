function savePreferences(data) {
  localStorage.setItem("userPreferences", JSON.stringify(data));
}

function getPreferences() {
  return JSON.parse(localStorage.getItem("userPreferences")) || {};
}

function showError(message) {
  const errorBox = document.getElementById("error");
  if (errorBox) {
    errorBox.textContent = message;
  }
}
