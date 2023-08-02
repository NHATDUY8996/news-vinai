export default function SwiperModule() {
  // slider banner
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
  // slider last post
  $(document).ready(function () {
    var owl = $('.lastPost-carousel');
    owl.owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ], // Thay đổi icon nút điều hướng
      items: 1,
      dots: true,
      onInitialized: function () {
        var pagination = $('.owl-dots');
        pagination.find('.owl-dot').each(function (index) {
          var btnLastPost = $('.pagination .lastPost-click').eq(index); // Lấy button tương ứng
          btnLastPost.on('click', function () {
            // Loại bỏ class active khỏi các button
            $('.lastPost-click').removeClass('active');

            // Thêm class active vào button được click
            $(this).addClass('active');

            // Di chuyển đến phần tử tương ứng
            owl.trigger('to.owl.carousel', [index, 300]);
          });
        });
      },
      onChanged: function (event) {
        // Loại bỏ class active khỏi tất cả các button
        $('.lastPost-click').removeClass('active');

        // Thêm class active vào button tương ứng với slide hiện tại
        var currentSlideIndex = event.item.index;
        $('.lastPost-click').eq(currentSlideIndex).addClass('active');
      },
    });
  });

  // slider ai update
  var aiUpdateSwiper = new Swiper(".aiupdateSwiper", {
    loop: true,
    loopAdditionalSlides: 1, //để thêm 2 slide vào cả hai bên của swiper
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}