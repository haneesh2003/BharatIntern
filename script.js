var typed = new Typed('#element', {
    strings: ['Student', 'Front-end developer', 'video editor', 'Short-story Writer(Occasionally).'],
    typeSpeed: 50,
});

// Scroll to section when clicking on the "Education" link
document.querySelector('a[href="#education"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#education').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
function showCertificate(url) {
    window.open(url, '_blank');
}
document.querySelector('a[href="#certificates"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#certificates').scrollIntoView({
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#skills"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#internship"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#internship').scrollIntoView({
        behavior: 'smooth'
    });
});