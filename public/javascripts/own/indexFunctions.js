function start(){
	//variables
	var urlPathname = window.location.pathname;

	switch(urlPathname){
		case '':			
			$('#mainSiteNav').find('li').removeClass('active');
			$('#mainSiteNav').find('li:first').addClass('active');
		break;
		case '/caler':
			$('#mainSiteNav').find('li').removeClass('active');
			$('#mainSiteNav').find('li:first').next().addClass('active');
		break;
		case '/contacto':
			$('#mainSiteNav').find('li').removeClass('active');
			$('#mainSiteNav').find('li:last').prev().prev().addClass('active');
		break;
		case '/servicios':
			$('#mainSiteNav').find('li').removeClass('active');
			$('#mainSiteNav').find('li:last').prev().addClass('active');
		break;
		case '/capacitaciones':
			$('#mainSiteNav').find('li').removeClass('active');
			$('#mainSiteNav').find('li:last').addClass('active');
		break;
	}
}

$(document).on('ready', start);