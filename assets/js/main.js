/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 350,
			noOpenerFade: true,
			alignment: 'center'
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Carousels.
		$('.carousel').each(function() {

			var	$t = $(this),
				$forward = $('<span class="forward"></span>'),
				$backward = $('<span class="backward"></span>'),
				$reel = $t.children('.reel'),
				$items = $reel.children('article');

			var	pos = 0,
				leftLimit,
				rightLimit,
				itemWidth,
				reelWidth,
				timerId;

			// Items.
				if (settings.carousels.fadeIn) {

					$items.addClass('loading');

					$t.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						enter: function() {

							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);

							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();

								if (x.length <= limit) {

									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;

								}

								xf.removeClass('loading');

							}, settings.carousels.fadeDelay);

						}
					});

				}

			// Main.
				$t._update = function() {
					pos = 0;
					rightLimit = (-1 * reelWidth) + $window.width();
					leftLimit = 0;
					$t._updatePos();
				};

				$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

			// Forward.
				$forward
					.appendTo($t)
					.hide()
					.mouseenter(function(e) {
						timerId = window.setInterval(function() {
							pos -= settings.carousels.speed;

							if (pos <= rightLimit)
							{
								window.clearInterval(timerId);
								pos = rightLimit;
							}

							$t._updatePos();
						}, 10);
					})
					.mouseleave(function(e) {
						window.clearInterval(timerId);
					});

			// Backward.
				$backward
					.appendTo($t)
					.hide()
					.mouseenter(function(e) {
						timerId = window.setInterval(function() {
							pos += settings.carousels.speed;

							if (pos >= leftLimit) {

								window.clearInterval(timerId);
								pos = leftLimit;

							}

							$t._updatePos();
						}, 10);
					})
					.mouseleave(function(e) {
						window.clearInterval(timerId);
					});

			// Init.
				$window.on('load', function() {

					reelWidth = $reel[0].scrollWidth;

					if (browser.mobile) {

						$reel
							.css('overflow-y', 'hidden')
							.css('overflow-x', 'scroll')
							.scrollLeft(0);
						$forward.hide();
						$backward.hide();

					}
					else {

						$reel
							.css('overflow', 'visible')
							.scrollLeft(0);
						$forward.show();
						$backward.show();

					}

					$t._update();

					$window.on('resize', function() {
						reelWidth = $reel[0].scrollWidth;
						$t._update();
					}).trigger('resize');

				});

		});
        // Get the modal
        var modal1 = document.getElementById("myModal1");
        var modal2 = document.getElementById("myModal2");
        var modal3 = document.getElementById("myModal3");
        var modal4 = document.getElementById("myModal4");
        var modal5 = document.getElementById("myModal5");
		var modal6 = document.getElementById("myModal6");

        // Get the button that opens the modal
        var btn1 = document.getElementById("myBtn1");
        var btn2 = document.getElementById("myBtn2");
        var btn3 = document.getElementById("myBtn3");
        var btn4 = document.getElementById("myBtn4");
        var btn5 = document.getElementById("myBtn5");
		var btn6 = document.getElementById("myBtn6");

        // Get the <span> element that closes the modal
        var span1 = document.getElementById("span1");
        var span2 = document.getElementById("span2");
        var span3 = document.getElementById("span3");
        var span4 = document.getElementById("span4");
        var span5 = document.getElementById("span5");
		var span6 = document.getElementById("span6");

        // When the user clicks the button, open the modal 
        btn1.onclick = function() {
            modal1.style.display = "block";
        }
        btn2.onclick = function() {
            modal2.style.display = "block";
        }
        btn3.onclick = function() {
            modal3.style.display = "block";
        }
        btn4.onclick = function() {
            modal4.style.display = "block";
        }
        btn5.onclick = function() {
            modal5.style.display = "block";
        }
		btn6.onclick = function() {
            modal6.style.display = "block";
        }


        // When the user clicks on <span> (x), close the modal
        span1.onclick = function() {
            modal1.style.display = "none";
        }
        span2.onclick = function() {
            modal2.style.display = "none";
        }
        span3.onclick = function() {
            modal3.style.display = "none";
        }
        span4.onclick = function() {
            modal4.style.display = "none";
        }
        span5.onclick = function() {
            modal5.style.display = "none";
        }
		span6.onclick = function() {
            modal6.style.display = "none";
        }


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
        }
        window.onclick = function(event) {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
        }
        window.onclick = function(event) {
            if (event.target == modal3) {
                modal3.style.display = "none";
            }
        }
        window.onclick = function(event) {
            if (event.target == modal4) {
                modal4.style.display = "none";
            }
        }
        window.onclick = function(event) {
            if (event.target == modal5) {
                modal5.style.display = "none";
            }
        }
		window.onclick = function(event) {
            if (event.target == modal6) {
                modal6.style.display = "none";
            }
        }

		
})(jQuery);