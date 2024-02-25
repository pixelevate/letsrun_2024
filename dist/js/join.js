(function () {
    function initModal() {
        document.getElementById('btnClosePersonalModal').addEventListener('click', () => {
            handlerCloseModal('.personal-modal');
        });

        document.getElementById('btnAgreementModalPersonal').addEventListener('click', () => {
            handlerCloseModal('.personal-modal');
        });
    }

    function handlerCloseModal(selector) {
        document.querySelector(selector).classList.toggle('open');
    }

    initModal();
})();
