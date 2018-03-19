const hamburger = document.querySelector('[role="trigger"]');
const popup = document.querySelector('[role="popup"]');
const popupContainer = document.querySelector('[role="popup-container"]');
const popupPage = document.querySelector('[role="popup-page"]');

if(hamburger && popup && popupContainer && popupPage) {
    hamburger.addEventListener("click", (event) => {
        event.preventDefault();
        hamburger.classList.toggle('is-active');
        popup.classList.toggle('popup--active');
        popupContainer.classList.toggle('popup-container--active');
        popupPage.classList.toggle('page--popup');
    });
}
