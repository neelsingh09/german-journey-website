/* =========================
NAVIGATION DROPDOWN
========================= */

function navButton() {
document.getElementById("myDropdown").classList.toggle("show");
}

/* =========================
VOCABULARY DROPDOWNS
========================= */

function showDropdown(dropdownId) {

// Close all other vocabulary dropdowns
const dropdowns = document.querySelectorAll(".vocab-dropdown-content");

dropdowns.forEach(dropdown => {
if (dropdown.id !== dropdownId) {
dropdown.classList.remove("show");
}
});

// Toggle the selected dropdown
document.getElementById(dropdownId).classList.toggle("show");
}

/* =========================
CLOSE DROPDOWNS WHEN
CLICKING OUTSIDE
========================= */

window.onclick = function(event) {

// Close navigation dropdown
if (!event.target.closest(".dropdown")) {
const navDropdown = document.getElementById("myDropdown");

if (navDropdown.classList.contains("show")) {
  navDropdown.classList.remove("show");
}

}

// Close vocabulary dropdowns
if (!event.target.closest(".vocab-dropdown")) {
const vocabDropdowns =
document.querySelectorAll(".vocab-dropdown-content");

vocabDropdowns.forEach(dropdown => {
  dropdown.classList.remove("show");
});

}
};

function showYear(yearId, button) {

// Hide all years
const years = document.querySelectorAll(".year-content");

years.forEach(year => {
year.classList.remove("active-year");
});

// Remove active styling from year buttons
const yearButtons = document.querySelectorAll(".year-button");

yearButtons.forEach(button => {
button.classList.remove("active");
});

// Show selected year
document.getElementById(yearId).classList.add("active-year");

// Highlight selected year button
button.classList.add("active");

// Reset the month selection inside the selected year
const selectedYear = document.getElementById(yearId);

const months = selectedYear.querySelectorAll(".month-content");

months.forEach(month => {
month.classList.remove("active-month");
});

const monthButtons = selectedYear.querySelectorAll(".month-button");

monthButtons.forEach(monthButton => {
monthButton.classList.remove("active");
});

}

function showMonth(monthId) {

// Find the year containing the selected month
const selectedMonth = document.getElementById(monthId);

if (!selectedMonth) {
return;
}

const selectedYear = selectedMonth.closest(".year-content");

// Hide all months within that year
const months = selectedYear.querySelectorAll(".month-content");

months.forEach(month => {
month.classList.remove("active-month");
});

// Remove active styling from month buttons
const monthButtons = selectedYear.querySelectorAll(".month-button");

monthButtons.forEach(button => {
button.classList.remove("active");
});

// Show selected month
selectedMonth.classList.add("active-month");

// Highlight selected month button
const buttons = selectedYear.querySelectorAll(".month-button");

buttons.forEach(button => {

if (
  button.getAttribute("onclick") ===
  `showMonth('${monthId}')`
) {
  button.classList.add("active");
}

});

}
