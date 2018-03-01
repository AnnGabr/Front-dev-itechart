
;((window) => {
    const HAMBURGER = '[hamburger-role="trigger"]';
    const POPUP = '[popup-role="popup"]';
    const POPUP_CONTAINER = '[header-role="popup-container"]';
    const POPUP_PAGE = '[page-role="popup-page"]';

    let hamburger = document.querySelector(HAMBURGER);
    let popup = document.querySelector(POPUP);
    let popupContainer = document.querySelector(POPUP_CONTAINER);
    let popupPage = document.querySelector(POPUP_PAGE);

    if(hamburger && popup && popupContainer && popupPage) {
        hamburger.addEventListener("click", (event) => {
            event.preventDefault();
            hamburger.classList.toggle('is-active');
            popup.classList.toggle('popup--active');
            popupContainer.classList.toggle('popup-container--active');
            popupPage.classList.toggle('page--popup');
        });
    }
})(window);