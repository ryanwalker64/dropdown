const dropDownBtns = document.querySelectorAll('.menuBtn');
const dropdownContainers = document.querySelectorAll('.dropdown');

dropDownBtns.forEach(dropdownBtn => {
    dropdownBtn.addEventListener('click', (e) => {
        const dropdownID = e.currentTarget.dataset.dropdownbtn;
        const dropdownContainer = document.querySelector(`.dropdown[data-dropdownCont="${dropdownID}"`);
        dropdownContainer.classList.toggle('visible');
    })
});