console.log("Page load..")
$(".crankWheelCarousel").slick({
	lazyLoad: "ondemand",
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 1000,
	adaptiveHeight: true
});

$("#backToTop").on("click", function() {
	$("html, body").animate({ scrollTop: 0 }, 500);
});