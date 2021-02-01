const closeBtn = document.getElementById("close");
let messageDiv = document.getElementById("message");
const messageBtn = document.getElementById("messageBtn");
const submitBtn = document.getElementById("submit");

closeBtn.addEventListener("click", (event) => {
  messageDiv.classList.add("d-none");
  messageBtn.classList.remove("d-none");
});

messageBtn.addEventListener("click", () => {
  messageBtn.classList.add("d-none");
  messageDiv.classList.remove("d-none");
});

submitBtn.addEventListener("click", () => {
  messageDiv.classList.add("d-none");
  messageBtn.classList.remove("d-none");
});
