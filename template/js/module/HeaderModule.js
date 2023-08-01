export default function HeaderModule() {
    const header = document.querySelector(".header");
    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const search = document.querySelector(".search-mona");

    function HandleHeader() {
        if (header && mobile && mobileOverLay) {
            if (window.scrollY > 0) {
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverLay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverLay.classList.remove("sticky");
            }
        }
    }
    window.addEventListener("scroll", function () {
        HandleHeader();
    });
    $(document).ready(function () {
        HandleHeader();
    });
}

// change icon menu mobile
const totalBars = document.querySelectorAll(".header__btn-showMenuMb");
const mobileOverLay = document.querySelectorAll('.overlay');
const heaerMobileList = document.querySelectorAll('.heaer__mobile-list');
let clickCount = 0;

for (let i = 0; i < totalBars.length; i++) {
    totalBars[i].addEventListener('click', () => {
        for (let j = 0; j < totalBars.length; j++) {
            totalBars[j].classList.toggle("show");
        }
        if (mobileOverLay[0].classList.contains('mobile-overlay')) {
            mobileOverLay[0].classList.add('open');
        }
        if (heaerMobileList[0].classList.contains('mobile')) {
            heaerMobileList[0].classList.add('open');
        }
        clickCount++;
        if (clickCount % 2 === 0) {
            if (mobileOverLay[0].classList.contains('mobile-overlay')) {
                mobileOverLay[0].classList.remove('open');
            }
            if (heaerMobileList[0].classList.contains('mobile')) {
                heaerMobileList[0].classList.remove('open');
            }
        }
    });
}