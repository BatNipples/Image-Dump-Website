window.onload = function() {
	init();
}

	var slideIndex = 1;
	var Dark = 'off';
	//var galleryIndex = 1;

function init(){
	console.log('init fired');
	showSlides(slideIndex);
	darkMode(Dark);
	
	
	//changes background colour depending on the value of Dark
	function darkMode(n) {
		if (Dark == 'on') {document.body.style.backgroundColor = "black";}
		if (Dark =='off') {document.body.style.backgroundColor = "white";}
	}
	
	//sets a local variable to store the users dark mode preference
	darkModeToggle.addEventListener("change",function(e) {
		console.log('initialized');
		if ((document.getElementById("darkModeToggle").checked) == true) {localStorage.setItem('darkMode',"on"); Dark = localStorage.getItem('darkMode')}
		if ((document.getElementById("darkModeToggle").checked) == false) {localStorage.setItem('darkMode',"off"); Dark = localStorage.getItem('darkMode')}
		document.body.style.backgroundColor = "black";
		darkMode(Dark);
		
	});
	//links canvas to Index
	$('#customizerLink').click(function(e) {
		window.location.href = "canvas.html";
	});
	
	
	//displays the text and title for the currently selected gallery
	$('.galleryImage').click(function(e) {
		var id = $(this).data('gallery');
		document.getElementById("galleryTextTitle").innerHTML = 'This is displaying the Title of gallery number ' + id;
		document.getElementById("galleryBody").innerHTML = 'description of gallery number ' + id;
	});
	
	
	//focuses the windows on the selected element
	$('.dropDownItems').click(function(e) {
		var id = $(this).data('item');
		
		if (id == 1) {
			document.getElementById("slideShowContainer1").focus();
			console.log(id);}
		//focusing on the element correctly but not panning the window to the right position because of the positioning of the elements
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
	
	
	//changes the slide to the selected one
	$('.dot').click(function(e){
		var id = $(this).data('id');
		showSlides(slideIndex = id);
	});
	
	//function to switch images in a carousel fashion in a slide show
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