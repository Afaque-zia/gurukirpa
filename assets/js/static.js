// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Odometer counters
    const odometerElements = document.querySelectorAll('.odometer');
    if (odometerElements.length > 0 && typeof Odometer !== 'undefined') {
        odometerElements.forEach(function (element) {
            const count = element.getAttribute('data-count');
            if (count) {
                element.innerHTML = count;
            }
        });
    }

    // Mobile offcanvas menu toggle
    const offcanvasToggle = document.querySelector('.vl-offcanvas-toggle');
    const offcanvasClose = document.querySelector('.vl-offcanvas-close-toggle');
    const offcanvas = document.querySelector('.vl-offcanvas');
    const offcanvasOverlay = document.querySelector('.vl-offcanvas-overlay');

    // Open offcanvas menu
    if (offcanvasToggle && offcanvas) {
        offcanvasToggle.addEventListener('click', function () {
            offcanvas.classList.add('vl-offcanvas-open');
            document.body.classList.add('offcanvas-open');
        });
    }

    // Close offcanvas menu
    if (offcanvasClose && offcanvas) {
        offcanvasClose.addEventListener('click', function () {
            offcanvas.classList.remove('vl-offcanvas-open');
            document.body.classList.remove('offcanvas-open');
        });
    }

    // Close on overlay click
    if (offcanvasOverlay && offcanvas) {
        offcanvasOverlay.addEventListener('click', function () {
            offcanvas.classList.remove('vl-offcanvas-open');
            document.body.classList.remove('offcanvas-open');
        });
    }

    // Mobile submenu dropdown toggle
    const mobileMenuItems = document.querySelectorAll('.vl-offcanvas-menu .has-dropdown > a');
    mobileMenuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.parentElement;
            const submenu = parent.querySelector('.sub-menu, .vl-mega-menu');

            if (submenu) {
                parent.classList.toggle('active');
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Sticky header
    const header = document.getElementById('vl-header-sticky');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
});
