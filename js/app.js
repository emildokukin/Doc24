console.log(window.screen.width);

function openMenu() {
    $('.form-control').select2('open');
}

function closeMenu() {
    $('.form-control').select2('close');
}

document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.iti__arrow').innerHTML = '<i class="fas fa-angle-down fa-angle-down-1"></i>';
	document.querySelector('.select-wrap').innerHTML = '<i onclick="openMenu()" class="fas fa-angle-down fa-angle-down-2"></i>';

	document.addEventListener('click', function (event) {
		if ($("#iti-0__country-listbox").hasClass("iti__hide")) {
			document.querySelector('.iti__arrow').innerHTML = '<i class="fas fa-angle-down fa-angle-down-1"></i>';
		} else {
			document.querySelector('.iti__arrow').innerHTML = '<i class="fas fa-angle-up fa-angle-up-1"></i>';
		}

		if ($('.select2-container--open').length) {
			document.querySelector('.select-wrap').innerHTML = '<i onclick="closeMenu()" class="fas fa-angle-up fa-angle-up-2"></i>';
		} else {
			document.querySelector('.select-wrap').innerHTML = '<i onclick="openMenu()" class="fas fa-angle-down fa-angle-down-2"></i>';
		}
	}, false);

	

	$(".form-control").select2({
		tags: true,
		tokenSeparators: [',', ' ']
	})

	
})
