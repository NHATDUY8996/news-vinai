export default function SwiperModule() {
  var bannerswiper = new Swiper(".bannerSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1000, // Thời gian chờ giữa các slide (tính bằng mili giây)
      disableOnInteraction: false, // Cho phép autoplay tiếp tục sau khi người dùng tương tác với swiper
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}