(function() {
    function initMobileMenu() {
        let elem = document.getElementById('btnMobileMenu');
        let header = document.getElementById('header');

        elem.addEventListener('click', () => {
            header.classList.toggle('open');
        })
    }

    initMobileMenu()
})();
