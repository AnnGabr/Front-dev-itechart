
;((window) => {
    const HAMBURGER = '[hamburger-role="trigger"]';
    const POPUP = '[popup-role="popup"]';
    const POPUP_CONTAINER = '[header-role="popup-container"]';

    let hamburger = document.querySelector(HAMBURGER);
    let popup = document.querySelector(POPUP);
    let popupContainer = document.querySelector(POPUP_CONTAINER);

    if(hamburger && popup && popupContainer) {
        hamburger.addEventListener("click", (event) => {
            event.preventDefault();
            hamburger.classList.toggle('is-active');
            popup.classList.toggle('popup--active');
            popupContainer.classList.toggle('popup-container');
        });
    }
})(window);