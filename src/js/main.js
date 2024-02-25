(function() {
    window.onload = function() {
        const params = new URLSearchParams(window.location.search);
        const param = params.get('section');

        if (param) {
            if (param === 'section1') return scrollToTop();

            scrollTo(param, () => {
                const urlWithoutParams = window.location.pathname;
                history.pushState({}, '', urlWithoutParams);
            });
        }
    };

    document.getElementById('nav_menu_1').addEventListener('click', function() {
        scrollToTop();

        let header = document.getElementById('header');
        if (header.classList.contains('open')) {
            header.classList.toggle('open');
        }
    });
    document.getElementById('nav_menu_2').addEventListener('click', function() {
        scrollTo('section2');
    });
    document.getElementById('nav_menu_3').addEventListener('click', function() {
        scrollTo('section3');
    });

    function scrollTo(id, cb) {
        let elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });

        let header = document.getElementById('header');
        if (header.classList.contains('open')) {
            header.classList.toggle('open');
        }

        cb && cb();
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
})();
