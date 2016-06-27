
//modal windows
$(document).ready(function() {

	$(".fancybox").fancybox();


	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

});

//mobile menu

var id_menu = new Array('sub_menu');
   startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
	}
}

	function openMenu(id){
		for (i=0; i < id_menu.length; i++){
			if (id != id_menu[i]){
				document.getElementById(id_menu[i]).style.display = "none";
			}
		}
		if (document.getElementById(id).style.display == "block"){
			document.getElementById(id).style.display = "none";
		}else{
			document.getElementById(id).style.display = "block";
		}
	}
	window.onload=startList;


//scroll UP

	$(window).scroll(function() {
		if ($(window).scrollTop() > 600) {
			$('.up').css("display", 'block');
		  
		}
		else{
			$('.up').css("display", 'none');
		   
		}
	});


//run bx slider

	$('.bxslider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  autoControls: true,
	  pause: 4000
	});


//Ajax. Contact form

	document.getElementById('feedback-form').addEventListener('submit', function(evt){
	  var http = new XMLHttpRequest(), f = this;
	  evt.preventDefault();
	  http.open("POST", "contacts.php", true);
	  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
	  http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
		  document.getElementById('answer').innerHTML = http.responseText + ", Спасибо! Наши специалисты в ближайшее время свяжутся с вами!" 
		  f.messageFF.removeAttribute('value'); 
		  f.messageFF.value='';
		}
	  }
	  http.onerror = function() {
		alert('Извините, данные не были переданы');
	  }
	}, false);














