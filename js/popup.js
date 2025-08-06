document.addEventListener('DOMContentLoaded', () => {
    // --- MAIN POPUP ---
    const openPopupButtons = document.querySelectorAll('.open-popup-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupBox = document.querySelector('.popup-box');
    const closePopupBtn = document.querySelector('.close-popup-btn');

    openPopupButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.add('popup-active');
        });
    });

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            document.body.classList.remove('popup-active');
        });
    }
});
