'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "/img/banner_crop.jpg",
        "/img/banner_crop2.jpg",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("banner-main").style.backgroundImage = `url('${randomImage}')`;
});
