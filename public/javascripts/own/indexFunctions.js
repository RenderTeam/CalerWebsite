function scrollSmooth(){
  var id = $(this).parent().data('anchor-id');
  if($(this).closest('.span12').hasClass('fixedMenu')){
    $('html, body').animate({
        scrollTop: ($(id).offset().top)
    }, 800);
    return false;
  }else{
    $('html, body').animate({
        scrollTop: ($(id).offset().top -160)
    }, 800);
    return false;
  }
}

function scrollTop(){
  $('html, body').animate({
      scrollTop: -($(this).offset().top)
  }, 1000);
}
  
function setFixMenu(element,stickyCssClass) { 
  $(window).scroll(function(){ 
    var menuTop = $(element).offset(); 
    // get total scrolling 
    var htmlTop = $(window).scrollTop(); 
    if ((htmlTop + 1) > menuTop.top) { 
      $(element).addClass(stickyCssClass);
    }

    if(htmlTop < 110){
      $(element).removeClass(stickyCssClass); 
    }
  }); 
}

function changeVisibleCourses(){
  var i,
      month = $('.full-month-header-container').find('.span2').find('h2').text();

  $('.activeCourseCard').removeClass('activeCourseCard');
  $('.course-card:first').addClass('activeCourseCard');

  for(i = 0, loopTimes = $('.course-card').length;i < loopTimes; i++){
    if($('.activeCourseCard').hasClass(month.toLowerCase())){
      $('.activeCourseCard').slideDown();
    }else{
      $('.activeCourseCard').slideUp();
    }

    $('.activeCourseCard').next().addClass('activeCourseCard');
    $('.activeCourseCard:first').removeClass('activeCourseCard');
  }
}

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
      $('#mainSiteNav').find('li:last').addClass('active');
    break;
    case '/servicios':
      $('#mainSiteNav').find('li').removeClass('active');
      $('#mainSiteNav').find('li:last').prev().prev().addClass('active');
      $('.navbar-fixed-top').css('position', 'static');
      $('#layoutLine').remove();
      
      setFixMenu('.service-menu','fixedMenu'); 
    break;
    case '/capacitaciones':
      $('#mainSiteNav').find('li').removeClass('active');
      $('#mainSiteNav').find('li:last').prev().addClass('active');

      var month = new Date(),
      todayDate = 'd' + month.getDate() + '-m' + (month.getMonth() + 1) + '-y' + month.getFullYear();
      createMonth(month);

      $('.day-preview').find('.day').find('h1').text(month.getDate());
      $('.day-preview-header').find('.month').text($('.full-month-header-container').find('.span2').find('h2').text());
      $('.day-preview-header').find('.year').text($('.full-month-header-container').find('.yearPreview').text());
      $('.' + todayDate).addClass('selectedCell');

      $('.arrow-left').on('click', arrowClickChangeMonth);
      $('.arrow-right').on('click', arrowClickChangeMonth);
      $('.calendar-cell').on('click', onPressShowDayAndMonth);

      $('.calendarWrapper').append($('<p class="indicador"></p>'));
      $('.indicador').css({'position': 'fixed'});

      $(window).scroll(function(){ 
        var indicador = $('.indicador').offset(); 
        // get total scrolling 
        var footer = $('footer').offset();
        console.log(indicador.top);
        console.log(footer.top);
        if((indicador.top + 600) < footer.top){
          $('.calendarContainer').css({'position': 'fixed'});
        }else{
          $('.calendarContainer').css({'position': 'relative'});
        }
      });
    break;
  }

  $('.advice').on('click',scrollSmooth);
  $('.audit').on('click',scrollSmooth);
  $('.course').on('click',scrollSmooth);
  $('.to-top').on('click',scrollTop);
}

$(document).on('ready', start);