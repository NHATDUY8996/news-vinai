export default function SwiperModule() {
  var bannerswiper = new Swiper(".bannerSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000, // Thời gian chờ giữa các slide (tính bằng mili giây)
      disableOnInteraction: false, // Cho phép autoplay tiếp tục sau khi người dùng tương tác với swiper
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  $(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>"], // Thay đổi icon nút điều hướng
      items: 1,
      dots: true,
      onInitialized: function () {
        var pagination = $('.owl-dots');
        pagination.find('.owl-dot').each(function (index) {
          var btnLastPost = $('.pagination .lastPost-click').eq(index); // Lấy button tương ứng
          btnLastPost.on('click', function () {
            owl.trigger('to.owl.carousel', [index, 300]); // Di chuyển đến phần tử tương ứng
          });
        });
      },
    });
  });
}