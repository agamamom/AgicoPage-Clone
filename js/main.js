// window.onscroll = () => {

//     if (window.scrollY > 0) {
//         document.querySelector('.header').classList.add('active');
//     } else {
//         document.querySelector('.header').classList.remove('active');
//     }
// };

// window.onload = () => {
//     if (window.scrollY > 0) {
//         document.querySelector('.header').classList.add('active');
//     } else {
//         document.querySelector('.header').classList.remove('active');
//     }
// };


// var btnPrev = document.querySelector(".owl-prev");
// btnPrev.innerHTML = "<i></i>";
// var iconBtn = document.querySelector(".owl-prev i")
// iconBtn.classList.add('fas', 'fa-long-arrow-alt-right');
// iconBtn.ariaHidden = "false";
// console.log(iconBtn);

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// Preloader js    
setTimeout(function () {
    $('.preloader-bg').fadeToggle();
}, 1500);