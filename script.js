const dropDownBtn = document.querySelector('.menuBtn');
const dropdownContainer = document.querySelector('.dropdown');

dropDownBtn.addEventListener('click', (e) => {
    dropdownContainer.classList.toggle('visible');
    dropDownBtn.classList.toggle('active')
})