$(function () {
	$('.header-slider').slick({
		dots: true,
		infininte: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-top.svg"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-top.svg"></img></button>',
	})

	$('.product__name').slick({
		infininte: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.product__content',
		focusOnSelect: true,
		centerMode: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-top-b.png"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-top-b.png"></img></button>',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					verticalSwiping: false,
				},
			},
		],
	})

	$('.product__content').slick({
		asNavFor: '.product__name',
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
	})

	$('.menu__btn').click(() => $('.menu__list').toggleClass('active'))
})
