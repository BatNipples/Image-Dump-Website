window.onload = function() {
	init();
}

	var slideIndex = 1;
	//var galleryIndex = 1;

function init(){
	console.log('init fired');
	showSlides(slideIndex);
	
	$('#customizerLink').click(function(e) {
		window.location.href = "canvas.html";
	});
	
	$('.galleryImage').click(function(e) {
		var id = $(this).data('gallery');
		document.getElementById("galleryTextTitle").innerHTML = 'This is displaying the Title of gallery number ' + id;
		document.getElementById("galleryBody").innerHTML = 'description of gallery number ' + id;
	});
	
	$('.dropDownItems').click(function(e) {
		var id = $(this).data('item');
		console.log('ready');
		
		if (id == 1) {
			document.getElementById("slideShowContainer1").focus();
			console.log(id);}
		if (id == 2) {
			document.getElementById("galleryContainer").focus();
			console.log(id);}
		if (id == 3) {
			document.getElementById("customizerContainer").focus();
			console.log(id);}
		if (id == 4) {
			document.getElementById("reportContainer").focus();
			console.log(id);}
	});
	
	$('.dot').click(function(e){
		var id = $(this).data('id');
		showSlides(slideIndex = id);
	});
	
	
	function showSlides(n) {
		//
		/*stepper variable*/
		console.log(slideIndex);
		var i;
		/*creates an array of images and an array of navigation dots*/
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		
		/*Makes the slideshow into a continuous carousel*/
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++)
		{
			/*sets the display of all images to none*/
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) 
		{
			dots[i].className = dots[i].className.replace(" active", "");
		}
		
		/*displays the currently selected image*/
		slides[slideIndex-1].style.display = "block"; 
		
		/*highlights the currently selected button*/
		dots[slideIndex-1].className += " active";
	}	
	
} 