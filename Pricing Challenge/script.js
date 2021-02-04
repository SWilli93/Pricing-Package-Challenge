const monthly = document.querySelectorAll(".pricing-monthly");
const annually = document.querySelectorAll(".pricing-annually");
const toggle = document.getElementById("toggle");

monthly.forEach(el => el.classList.add('hidden'))

toggle.addEventListener("click", function () {
  monthly.forEach(el => el.classList.toggle('hidden'))
  annually.forEach(el => el.classList.toggle('hidden'))
});

