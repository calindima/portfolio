// Sidenav

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 800,
    transition: 500,
    interval: 6000
});

// Scrollspy

const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {});