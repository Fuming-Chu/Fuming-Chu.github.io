(function($) {

		"use strict";

		//Hide Loading Box (Preloader)
		function handlePreloader() {
			if($('.preloader').length){
				$('.preloader').delay(200).fadeOut(500);
			}
		}

		//Add One Page nav
		if($('.scroll-nav').length) {
			$('.scroll-nav ul').onePageNav();
		}

		$('[data-toggle="tooltip"]').tooltip();

		//Hide Bootstrap Onepage Menu On Click
		$('.mobile-menu .scroll-nav .navigation li a').on('click', function(){
			var windowWidth = $(window).width();
			if (windowWidth <= 1199) {
				$('.mobile-menu .navbar-toggle').trigger( "click" );
			}
		});

		$('.typed-title').typed({
			stringsElement: $('.typing-title'),
			backDelay: 1000,
			typeSpeed: 0,
			loop: true
		});

		function customScrollbar() {
			var windowWidth = $(window).width();
			if (windowWidth <= 1199) {
			}else {
				$(".card-inner").niceScroll();
			}
		}
		customScrollbar();

		/*
			Vars
		*/

		var width = $(window).width();
		var height = $(window).height();


		/*
			Header Menu Desktop
		*/

		var container = $('.main-area');
		var innerbox = $('.card-inner-box');
		var card_items = $('.card-item');
		var animation_in = container.data('animation-in');
		var animation_out = container.data('animation-out');

		$('.main-menu').on('click', 'a', function(){

			/* vars */
			var id = $(this).attr('href');
			var h = parseFloat($(id).offset().top);
			var card_item = $(id);
			var menu_items = $('.main-menu li');
			var menu_item_home = $('.main-menu li.home');
			var menu_item = $(this).closest('li');
			var d_lnk = $('.lnks .lnk.discover');

			/* if desktop */
			if(!menu_item.hasClass('active') & $('#home').length) {

				/* close card items */
				menu_items.removeClass('active');
				container.find(card_items).removeClass('animated '+animation_in);

				if($(container).hasClass('opened')) {
					container.find(card_items).addClass('animated '+animation_out);
				}

				/* open card item */
				menu_item.addClass('active');
				container.addClass('opened');
				container.find(card_item).removeClass('animated '+animation_out);
				container.find(card_item).addClass('animated '+animation_in);

				$(card_items).addClass('hide-item');

				$(card_item).removeClass('hide-item');
				$(card_item).addClass('active');
			}

			return false;
		});

		//Jquery Knob animation
		if($('.dial').length){
		   $('.dial').appear(function(){
	          var elm = $(this);
	          var color = elm.attr('data-fgColor');
	          var perc = elm.attr('value');

	          elm.knob({
	               'value': 0,
	                'min':0,
	                'max':100,
	                'skin':'tron',
	                'readOnly':true,
	                'thickness':0.12,
					'dynamicDraw': true,
					'displayInput':false
	          });

	          $({value: 0}).animate({ value: perc }, {
				  duration: 2000,
	              easing: 'swing',
	              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
	              }
	          });

	          },{accY: 0});
	    }


		//Jquery Knob animation Two
		function knobAnimate() {
		if($('.round-dial').length){
		   $('.round-dial').each(function(){
	          var elm = $(this);
	          var color = elm.attr('data-fgColor');
	          var perc = elm.attr('value');

	          elm.knob({
	               'value': 0,
	                'min':0,
	                'max':100,
	                'skin':'tron',
	                'readOnly':true,
	                'thickness':0.12,
					'dynamicDraw': true,
					'displayInput':false
	          });

	          $({value: 0}).animate({ value: perc }, {
				  duration: 0,
	              easing: 'swing',
	              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
	              }
	          });

	          });
	    }
		}

		knobAnimate();



		//Masonary
		function enableMasonry() {
			if($('.masonry-items-container').length){

				var winDow = $(window);
				// Needed variables
				var $container=$('.masonry-items-container');

				$container.isotope({
					itemSelector: '.masonry-item',
					 masonry: {
						columnWidth : '.column-width'
					 },
					animationOptions:{
						duration:500,
						easing:'linear'
					}
				});

				winDow.on('resize', function(){

					$container.isotope({
						itemSelector: '.masonry-item',
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				});
			}
		}

		enableMasonry();


		//Masonary Two
		function enableMasonryTwo() {
			if($('.masonry-two').length){

				var winDow = $(window);
				// Needed variables
				var $container=$('.masonry-two');

				$container.isotope({
					itemSelector: '.masonry-item',
					 masonry: {
						columnWidth : '.masonry-item',
					 },
					animationOptions:{
						duration:500,
						easing:'linear'
					}
				});

				winDow.on('resize', function(){

					$container.isotope({
						itemSelector: '.masonry-item',
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				});
			}
		}

		enableMasonryTwo();

		//Portfolio Carousel one
		if ($('.portfolio-carousel-one').length) {
			$('.portfolio-carousel-one').owlCarousel({
				animateOut: 'fadeOut',
	    		animateIn: 'fadeIn',
				loop:true,
				mouseDrag:false,
				margin:30,
				nav:true,
				smartSpeed: 700,
				autoplay: true,
				autoplayTimeout:7000,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1024:{
						items:1
					},
				}
			});
		}

		//Portfolio Carousel Two
		if ($('.portfolio-carousel-two').length) {
			$('.portfolio-carousel-two').owlCarousel({
				animateOut: 'fadeOut',
	    		animateIn: 'fadeIn',
				loop:true,
				mouseDrag:false,
				margin:30,
				nav:true,
				smartSpeed: 700,
				autoplay: true,
				autoplayTimeout:7000,
				navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1024:{
						items:1
					},
				}
			});
		}

		//Portfolio Carousel Slider
		if ($('.portfolio-carousel-three').length) {
			$('.portfolio-carousel-three').owlCarousel({
				loop:true,
				margin:20,
				nav:true,
				smartSpeed: 700,
				autoplay: 4000,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					800:{
						items:3
					},
					1024:{
						items:4
					},
					1600:{
						items:5
					}
				}
			});
		}

		//Testimonial Carousel
		if ($('.testimonial-carousel').length) {
			$('.testimonial-carousel').owlCarousel({
				loop:true,
				margin:20,
				nav:true,
				smartSpeed: 700,
				autoplay: 4000,
				navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1024:{
						items:1
					},
				}
			});
		}

		//Testimonial Carousel
		if ($('.single-item-carousel').length) {
			$('.single-item-carousel').owlCarousel({
				loop:true,
				margin:20,
				nav:true,
				smartSpeed: 700,
				autoplay: 4000,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1024:{
						items:1
					},
				}
			});
		}

		//LightBox / Fancybox
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox({
				openEffect  : 'fade',
				closeEffect : 'fade',
				helpers : {
					media : {}
				}
			});
		}

		//Contact Form Validation
		if($('#contact-form').length){
			$('#contact-form').validate({
				rules: {
					username: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					message: {
						required: true
					}
				}
			});
		}

		// Scroll to a Specific Div
		if($('.scroll-to-target').length){
			$(".scroll-to-target").on('click', function() {
				var target = $(this).attr('data-target');
			   // animate
			   $('html, body').animate({
				   scrollTop: $(target).offset().top
				 }, 1500);

			});
		}


		//Progress Bar
		if($('.progress-line').length){
			$('.progress-line').appear(function(){
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width',percent+'%');
			},{accY: 0});
		}


		//Tabs Box
		if($('.tabs-box').length){
			$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
				e.preventDefault();
				var target = $($(this).attr('data-tab'));

				if ($(target).is(':visible')){
					return false;
				}else{
					target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
					$(this).addClass('active-btn');
					target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
					target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
					$(target).fadeIn(300);
					$(target).addClass('active-tab');
				}
			});
		}


		// Elements Animation
		if($('.wow').length){
			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();
		}

		//Fact Counter + Text Count
		if($('.count-box').length){
			$('.count-box').appear(function(){

				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}

			},{accY: 0});
		}

		//Bottom Parallax
		function bottomParallax() {
			if($('.bottom-parallax').length){
				var windowpos = $(window).scrollTop();
				var siteFooter = $('.main-footer').height();
				var sitebodyHeight = $('.page-wrapper').height();
				var finalHeight = sitebodyHeight - siteFooter - 1100;
				if (windowpos >= finalHeight) {
					$('body').addClass('parallax-visible');
				} else {
					$('body').removeClass('parallax-visible');
				}
			}
		}

		bottomParallax();

		//Make Content Sticky
		if($('.sticky-box').length){
			var a = new StickySidebar('.portfolio-single .content-column .inner', {
				topSpacing: 80,
				bottomSpacing: 0,
				containerSelector: '.sticky-container',
				innerWrapperSelector: '.sticky-box'
			});
		}

		//Split Scroll (Home 7)
		if($('#scroll-container').length){
			$('#scroll-container').multiscroll({
				navigation: true,
				css3:true
			});
		}


	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

		$(window).on('scroll', function() {
			bottomParallax();
		});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

		$(window).on('load', function() {
			handlePreloader();
			enableMasonry();
			enableMasonryTwo();
		});


	/* ==========================================================================
	   When page is resized
	   ========================================================================== */

		$(window).on('resize', function() {
			customScrollbar();
		});

	/* ==========================================================================
	   When document is Resize, do
	   ========================================================================== */


		/* ==========================================================================
		   Custom Photo Lightbox
		   ========================================================================== */
		var lightbox = null;

		function getLang() {
			return (window.I18N && I18N.current) || 'en';
		}

		function isAlbumOverlayActive() {
			return !!(albumOverlay && albumOverlay.el && albumOverlay.el.classList.contains('active'));
		}

		function syncBodyScrollLock() {
			var isLightboxActive = !!(lightbox && lightbox.el && lightbox.el.classList.contains('active'));
			document.body.style.overflow = (isAlbumOverlayActive() || isLightboxActive) ? 'hidden' : '';
		}

		function escapeHtml(value) {
			return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch) {
				return {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;',
					'"': '&quot;',
					"'": '&#39;'
				}[ch];
			});
		}

		function createLightbox() {
			var lb = document.createElement('div');
			lb.className = 'photos-lightbox';
			lb.setAttribute('role', 'dialog');
			lb.setAttribute('aria-modal', 'true');
			lb.setAttribute('aria-label', 'Photo lightbox');

			lb.innerHTML = '<button class="lightbox-close" aria-label="Close lightbox">&times;</button>';

			var inner = document.createElement('div');
			inner.className = 'lightbox-inner';

			var img = document.createElement('img');
			img.alt = '';
			inner.appendChild(img);

			var panel = document.createElement('div');
			panel.className = 'lightbox-panel';
			panel.innerHTML = '<div class="lb-date"></div><h3 class="lb-title"></h3><p class="lb-desc"></p><div class="lb-loc"></div>';
			inner.appendChild(panel);

			lb.appendChild(inner);

			function close() {
				lb.classList.remove('active');
				syncBodyScrollLock();
				// Return focus to previously active element
				if (lb._prevFocus && document.body.contains(lb._prevFocus)) lb._prevFocus.focus();
			}

			lb.querySelector('.lightbox-close').addEventListener('click', close);
			lb.addEventListener('click', function(e) {
				if (e.target === lb) close();
			});
			document.addEventListener('keydown', function(e) {
				if (e.key === 'Escape' && lb.classList.contains('active')) {
					e.preventDefault();
					e.stopImmediatePropagation();
					close();
				}
			});

			document.body.appendChild(lb);
			return { el: lb, img: img, panel: panel, close: close };
		}

		$(document).on('click', '.photos-grid-item', function() {
			var $item = $(this);
			var src = $item.find('img').attr('src');
			if (!src) return;

			if (!lightbox) lightbox = createLightbox();

			var lang = getLang();
			var isCn = lang === 'cn';

			lightbox.img.src = src;
			lightbox.el._prevFocus = this;

			// Fill panel data
			var date = $item.attr('data-date') || '';
			var title = isCn ? ($item.attr('data-title-cn') || '') : ($item.attr('data-title-en') || '');
			var desc = isCn ? ($item.attr('data-desc-cn') || '') : ($item.attr('data-desc-en') || '');
			var location = $item.attr('data-location') || '';

			var panel = lightbox.panel;
			panel.querySelector('.lb-date').textContent = date;
			panel.querySelector('.lb-title').textContent = title;
			panel.querySelector('.lb-desc').textContent = desc;
			panel.querySelector('.lb-loc').textContent = location;

			lightbox.el.classList.add('active');
			syncBodyScrollLock();
		});

		$(document).on('keydown', '.photos-grid-item, .album-cover', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				$(this).trigger('click');
			}
		});

		/* ==========================================================================
		   Dynamic Timeline Builder
		   Scans share-grid photos, groups by YYYY.MM, and renders the timeline.
		   ========================================================================== */

		var tapeCombos = [
			['tape-tl', 'tape-br'],
			['tape-tr', 'tape-bl'],
			['tape-tl', 'tape-tr'],
			['tape-bl', 'tape-br']
		];

		function sortSharePhotos() {
			var $grid = $('.photos-grid');
			if (!$grid.length) return;

			var items = $grid.children('.photos-grid-item').get();
			items.sort(function(a, b) {
				var aDate = $(a).attr('data-date') || '';
				var bDate = $(b).attr('data-date') || '';
				return bDate.localeCompare(aDate);
			});

			$grid.append(items);
		}

		function buildTimeline() {
			var $track = $('#timeline-track');
			if (!$track.length) return;

			sortSharePhotos();

			var photos = [];
			var lang = getLang();
			var isCn = lang === 'cn';

			// Collect all photos from the share grid
			$('.photos-grid-item').each(function() {
				var $it = $(this);
				photos.push({
					date:     $it.attr('data-date')     || '',
					location: $it.attr('data-location')  || '',
					titleCn:  $it.attr('data-title-cn')  || '',
					titleEn:  $it.attr('data-title-en')  || '',
					descCn:   $it.attr('data-desc-cn')   || '',
					descEn:   $it.attr('data-desc-en')   || '',
					src:      $it.find('img').attr('src') || ''
				});
			});

			// Group by YYYY.MM
			var groups = {};
			$.each(photos, function(i, p) {
				var ym = p.date.substring(0, 7);
				if (!groups[ym]) groups[ym] = [];
				groups[ym].push(p);
			});

			// Sort months descending
			var months = Object.keys(groups).sort().reverse();

			// Sort photos within each month by date descending
			$.each(groups, function(ym, arr) {
				arr.sort(function(a, b) { return b.date.localeCompare(a.date); });
			});

			var stackRotations = [-3.5, 2.8, -2.2, 1.6];  // alternating angles for the mini stack
			var stackOffsets = [
				{ x: -6,  y: -4 },
				{ x:  5,  y: -2 },
				{ x: -3,  y:  5 },
				{ x:  4,  y:  3 }
			];

			var html = '';
			$.each(months, function(i, ym) {
				var album = groups[ym];
				var cover = album[0];
				var count = album.length;
				var countText = isCn ? count + ' 张照片' : count + ' photo' + (count > 1 ? 's' : '');

				// Build mini stacked cover with first 3-4 photos
				var stackN = Math.min(4, album.length);
				var stackHtml = '';
				for (var si = 0; si < stackN; si++) {
					var sp = album[si];
					var rot = stackRotations[si];
					var off = stackOffsets[si];
					stackHtml += '<img class="album-cover-stack-photo" src="' + escapeHtml(sp.src) + '" alt="" style="transform:rotate(' + rot + 'deg) translate(' + off.x + 'px,' + off.y + 'px);z-index:' + (stackN - si) + ';">';
				}

				html += '<div class="timeline-item timeline-album-item">';
				html += '<div class="timeline-marker"><div class="timeline-dot"></div><span class="timeline-label">' + escapeHtml(ym) + '</span></div>';
				html += '<div class="timeline-card album-cover" role="button" tabindex="0">';
				html += '<div class="album-cover-stack">' + stackHtml + '</div>';
				html += '<div class="timeline-card-body">';
				html += '<h5>' + escapeHtml(isCn ? cover.titleCn : cover.titleEn) + '</h5>';
				html += '<p>' + escapeHtml(isCn ? cover.descCn : cover.descEn) + '</p>';
				html += '<span class="album-badge">' + escapeHtml(countText) + '</span>';
				html += '</div></div>';
				html += '<div class="album-expand"><div class="album-photo-grid">';

				$.each(album, function(j, p) {
					var tapes = tapeCombos[j % tapeCombos.length];
					html += '<div class="album-photo" data-date="' + escapeHtml(p.date) + '" data-location="' + escapeHtml(p.location) + '" data-title-cn="' + escapeHtml(p.titleCn) + '" data-title-en="' + escapeHtml(p.titleEn) + '" data-desc-cn="' + escapeHtml(p.descCn) + '" data-desc-en="' + escapeHtml(p.descEn) + '">';
					html += '<img src="' + escapeHtml(p.src) + '" alt="">';
					html += '<span class="tape ' + tapes[0] + '"></span>';
					html += '<span class="tape ' + tapes[1] + '"></span>';
					html += '</div>';
				});

				html += '</div></div>';
				html += '</div>';
			});

			$track.html(html);

			// Update photo count in stats
			var totalPhotos = photos.length;
			var totalMonths = months.length;
			$('.photos-stat-num').eq(0).text(totalPhotos);
			$('.photos-stat-num').eq(1).text(totalMonths);
		}

		// Hook into i18n to rebuild timeline on language switch
		var _i18nApplyOrig = I18N.apply;
		I18N.apply = function() {
			_i18nApplyOrig.call(this);
			buildTimeline();
		};

		// Build on page load (after I18N.init)
		$(buildTimeline);

		/* ==========================================================================
		   Timeline Album Expand - Fullscreen Frosted Glass Overlay
		   ========================================================================== */
		var albumOverlay = null;

		function createAlbumOverlay() {
			var overlay = document.createElement('div');
			overlay.className = 'album-overlay';
			overlay.setAttribute('role', 'dialog');
			overlay.setAttribute('aria-modal', 'true');
			overlay.setAttribute('aria-label', 'Album expanded view');

			var closeBtn = document.createElement('button');
			closeBtn.className = 'album-overlay-close';
			closeBtn.innerHTML = '&times;';
			closeBtn.setAttribute('aria-label', 'Close album');
			overlay.appendChild(closeBtn);

			var photosContainer = document.createElement('div');
			photosContainer.className = 'album-overlay-photos';
			overlay.appendChild(photosContainer);

			function close() {
				overlay.classList.remove('active');
				photosContainer.innerHTML = '';
				syncBodyScrollLock();
			}

			closeBtn.addEventListener('click', close);
			overlay.addEventListener('click', function(e) {
				if (e.target === overlay) close();
			});
			document.addEventListener('keydown', function(e) {
				if (e.key === 'Escape' && overlay.classList.contains('active')) {
					if (lightbox && lightbox.el.classList.contains('active')) return;
					close();
				}
			});

			document.body.appendChild(overlay);
			return { el: overlay, container: photosContainer, close: close };
		}

		function generateScatteredPositions(count, cw, ch, iw, ih) {
			var positions = [];
			var pad = 20;
			var rows, cols;

			if (count <= 3) {
				var totalW = count * (iw + 50);
				var startX = Math.max(pad, (cw - totalW) / 2);
				for (var i = 0; i < count; i++) {
					positions.push({
						x: clampVal(pad, cw - iw - pad, startX + i * (iw + 50) + (Math.random() - 0.5) * 36),
						y: clampVal(pad, ch - ih - pad, (ch - ih) / 2 + (Math.random() - 0.5) * 48)
					});
				}
			} else if (count <= 6) {
				rows = 2;
				var perRow = Math.ceil(count / rows);
				var rowH = (ch - pad * 2) / rows;
				for (var i = 0; i < count; i++) {
					var r = Math.floor(i / perRow);
					var c = i % perRow;
					var inRow = (r === rows - 1 && count % perRow !== 0) ? (count % perRow || perRow) : perRow;
					var totalW = inRow * (iw + 50);
					var startX = Math.max(pad, (cw - totalW) / 2);
					positions.push({
						x: clampVal(pad, cw - iw - pad, startX + c * (iw + 50) + (Math.random() - 0.5) * 54),
						y: clampVal(pad, ch - ih - pad, pad + r * rowH + (rowH - ih) / 2 + (Math.random() - 0.5) * 36)
					});
				}
			} else {
				cols = Math.ceil(Math.sqrt(count * (cw / ch)));
				rows = Math.ceil(count / cols);
				var cellW = (cw - pad * 2) / cols;
				var cellH = (ch - pad * 2) / rows;
				for (var i = 0; i < count; i++) {
					var col = i % cols;
					var row = Math.floor(i / cols);
					positions.push({
						x: clampVal(pad, cw - iw - pad, pad + col * cellW + (cellW - iw) / 2 + (Math.random() - 0.5) * cellW * 0.55),
						y: clampVal(pad, ch - ih - pad, pad + row * cellH + (cellH - ih) / 2 + (Math.random() - 0.5) * cellH * 0.5)
					});
				}
			}
			return positions;
		}

		function clampVal(minVal, maxVal, val) {
			return Math.max(minVal, Math.min(maxVal, val));
		}

		$(document).on('click', '.album-cover', function(e) {
			var $item = $(this).closest('.timeline-album-item');
			var $photos = $item.find('.album-photo');
			if (!$photos.length) return;

			if (!albumOverlay) albumOverlay = createAlbumOverlay();

			var container = albumOverlay.container;
			container.innerHTML = '';

			var isCn = getLang() === 'cn';
			var count = $photos.length;
			var photoW = 220;
			var photoH = Math.round(photoW * 0.75) + 52;
			var cw = Math.min(window.innerWidth - 96, 1100);
			var ch = Math.min(window.innerHeight - 160, Math.max(340, count === 1 ? 350 : count <= 3 ? 420 : count <= 6 ? 560 : 700));
			container.style.minHeight = ch + 'px';

			var positions = generateScatteredPositions(count, cw, ch, photoW + 28, photoH + 24);

			var tapeColors = [
				'rgba(253,230,138,0.88)',
				'rgba(191,219,254,0.85)',
				'rgba(251,207,232,0.83)',
				'rgba(209,250,229,0.84)',
				'rgba(255,228,181,0.86)',
				'rgba(221,214,255,0.82)',
				'rgba(254,215,170,0.85)'
			];

			$photos.each(function(i) {
				var $photo = $(this);
				var src = $photo.find('img').attr('src') || '';
				var date = $photo.attr('data-date') || '';
				var titleCn = $photo.attr('data-title-cn') || '';
				var titleEn = $photo.attr('data-title-en') || '';
				var descCn = $photo.attr('data-desc-cn') || '';
				var descEn = $photo.attr('data-desc-en') || '';
				var location = $photo.attr('data-location') || '';

				var pos = positions[i];
				var rot = ((Math.random() * 9) - 4.5).toFixed(2);

				var polaroid = document.createElement('div');
				polaroid.className = 'album-polaroid';
				polaroid.style.cssText =
					'width:' + photoW + 'px;' +
					'left:' + pos.x + 'px;' +
					'top:' + pos.y + 'px;' +
					'transform:rotate(' + rot + 'deg);' +
					'z-index:' + (i + 1) + ';';

				var img = document.createElement('img');
				img.src = src;
				img.alt = (isCn ? titleCn : titleEn) || 'Photo';
				img.loading = 'lazy';
				polaroid.appendChild(img);

				var tape = document.createElement('span');
				tape.className = 'tape';
				var tapeRot = ((Math.random() * 8) - 4).toFixed(1);
				var tapeColor = tapeColors[Math.floor(Math.random() * tapeColors.length)];
				tape.style.cssText =
					'transform:rotate(' + tapeRot + 'deg);' +
					'opacity:' + (0.6 + Math.random() * 0.3).toFixed(2) + ';' +
					'background:' + tapeColor + ';';
				polaroid.appendChild(tape);

				var caption = document.createElement('span');
				caption.className = 'polaroid-caption';
				caption.textContent = date + (location ? ' - ' + location : '');
				polaroid.appendChild(caption);

				polaroid._data = {
					src: src, date: date,
					titleCn: titleCn, titleEn: titleEn,
					descCn: descCn, descEn: descEn,
					location: location
				};

				polaroid.addEventListener('click', function(ev) {
					ev.stopPropagation();
					if (!lightbox) lightbox = createLightbox();

					var d = this._data;
					var lang = getLang();
					var isCnLang = lang === 'cn';

					lightbox.img.src = d.src;
					lightbox.el._prevFocus = this;

					var panel = lightbox.panel;
					panel.querySelector('.lb-date').textContent = d.date;
					panel.querySelector('.lb-title').textContent = isCnLang ? d.titleCn : d.titleEn;
					panel.querySelector('.lb-desc').textContent = isCnLang ? d.descCn : d.descEn;
					panel.querySelector('.lb-loc').textContent = d.location;

					lightbox.el.classList.add('active');
					syncBodyScrollLock();
				});

				container.appendChild(polaroid);
			});

			albumOverlay.el.classList.add('active');
			syncBodyScrollLock();
		});

	})(window.jQuery);
