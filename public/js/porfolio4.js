// Images from http://megatruh.deviantart.com/

$(document).ready(function() {
	var photos = [	"https://25.media.tumblr.com/tumblr_mef6quv5pq1qi1a91o1_1280.jpg",
									"https://25.media.tumblr.com/tumblr_mef66y4dyg1qi1a91o1_1280.jpg",
									"https://24.media.tumblr.com/tumblr_mef649hlGH1qi1a91o1_1280.jpg",
									"https://24.media.tumblr.com/tumblr_mdji3d4gz01qi1a91o1_1280.jpg",

	];

	var direction = 1,
		 animation = false,
		 nbPhotos = photos.length,
		 gallery = $("#gallery");

	function init() {
		for(var i = nbPhotos-1; i>=0; i--) {
			var color = (255-i*10),
				 bgColor = "rgba("+color+", "+color+", "+color+", 1)",
				 card = $("<div>");

			card.addClass("photo").css({
				"top": i * -6 + "px",
				"left": (i * 4.5) + "px",
				"width": 100-i*5 + "%",
				"background": bgColor
			}).appendTo(gallery);

			var imgContainer = $("<div>").addClass("imgContainer").appendTo(card);
			var img = $("<img>").attr("src", photos[i]).appendTo(imgContainer);
		}

		$(".photo").on("click", function() {
			if ($(this).index() == $(".photo").length - 1 && animation == false)
				swipePhoto(this);
		});
	}

	function swipePhoto(elem) {
		animation = true;
		var photo = $(elem);

		var animationsDone = 0;
		function animationDone() {
			animationsDone++;
			if (animationsDone >= nbPhotos) {
				$(".photo").attr("animating", false);
				animation = false;
			}
		}

		// Animation: photo swipe
		photo.attr("animating", true);
		photo.animate({
			top: "+=" + 30,
			left: direction+"=" + 250
		}, 500, "easeInQuart", function() {
			// Photo goes behind all photos (DOM)
			photo.detach();
			photo.prependTo(gallery);

			var color = (255-4*10);
			var bgColor = "rgba("+color+","+color+","+color+", 1)";

			// Animation of the photo going behind
			photo.animate({
				"top": (nbPhotos - 1) * -6 + "px",
				"left": ((nbPhotos - 1) * 4.5) + "px",
				"width": 100-(nbPhotos - 1)*5 + "%"
			}, 900, "easeOutQuart", animationDone)
			.css("background", bgColor)
		});

		// Update animation direction
		if(direction == '+') direction = '-';
		else direction = '+';

		// Animation : each photo move to his correct position
		var j = 0;
		for(var i = nbPhotos - 1; i>=0; i--) {
			var color = (225+i*12);
			var bgColor = "rgba("+color+","+color+","+color+", 1)";
			if ($(".photo:eq("+i+")").attr("animating") !== "true") {
				$(".photo:eq("+i+")")
				.delay((nbPhotos - i + 1) * 150)
				.animate({
					"top": j * -6 + "px",
					"left": (j * 4.5) + "px",
					"width": 100-j*5 + "%",
				}, 500, "easeOutBack", animationDone)
				.css("background", bgColor);
				j++;
			}
		};
	}

	init();
});
