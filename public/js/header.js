$( document ).ready( function() {

	vizData = 
    {
      title: 'Bicicletas públicas - CABA',
      body: 'Visualización de relación matrcial entre las estaciones de bicicletas de la Ciudad.',
      sub_body: '<small>Las áreas más grandes representan mayor tráfico entre estaciones, creado en 2012.</small>',
      url: 'http://gcba.github.io/visualizaciones-gcbadata/Bicicletas/estaciones.html'
    } ;

	var showHeader = function (eventObject) {
		brandingObj = $('.branding-data');
		topHeader = $('.navbar-fixed-top')
		subtitle = $('.title h4');

		$('.branding-data .navbar-search').hide();
		brandingObj.addClass('full-screen');
		topHeader.hide(250);
		subtitle.hide(50);
		brandingObj.animate({height:'100%'},1000, 'easeInOutQuart');

		
		$('.branding-data .hideviz').show();
		$('.branding-data .viewviz').hide();
		return false;	
	};

	$('.branding-data .hideviz').hide();

	var hideHeader = function(eventObject) {
		brandingObj = $('.branding-data');
		topHeader = $('.navbar-fixed-top')
		subtitle = $('.title h4');

		brandingObj.animate({"height":95},1000, 'easeInOutQuart');
		topHeader.show(250);
		subtitle.show(50);
		brandingObj.removeClass('full-screen');
		$('.branding-data .navbar-search').show();
		
		
		$('.branding-data .hideviz').hide();
		$('.branding-data .viewviz').show();
		return false;	
	}
	$('.branding-data .viewviz').click(showHeader);
	$('.branding-data .hideviz').click(hideHeader);

	$('.info-dataviz-container h5').text(vizData.title);
	$('.info-dataviz-container p').html(vizData.body);
	$('.info-dataviz-container span').html(vizData.sub_body);
	$('.branding-data iframe').attr('src', vizData.url);

	$('.branding-data form').submit(function(eventObject) {
		event.preventDefault();
		location.href = "/dataset#query=" + $('#search').val();
	});

});