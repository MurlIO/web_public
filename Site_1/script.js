window.addEventListener('scroll', function() {
    const imgSection = document.querySelector('.img');
    const menu = document.querySelector('.menu');

    const imgRect = imgSection.getBoundingClientRect();
    if (imgRect.bottom <= 0) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});