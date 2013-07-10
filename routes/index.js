
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Caler' });
};

exports.contacto = function(req, res){
  res.render('contacto',{ title: 'Caler'});
};

exports.caler = function(req, res){
  res.render('caler', 
    { 
      title: 'Caler',
      data_slide_1: 'top slide',
      data_slide_2: 'parallax',
      data_slide_3: 'grid',
      data_slide_4: 'credits',
      firstDescription : 'descripción de el stuff',
      firstExtendedDescription: 'extensión de la descripción',
      firstPunchline   : 'esta es un punchline',
      fourthDescription : 'descripción de el stuff',
      fourthExtendedDescription: 'extensión de la descripción',
      fourthPunchline   : 'esta es un punchline',
      secondDescription : 'descripción de el stuff',
      secondExtendedDescription: 'extensión de la descripción',
      secondPunchline   : 'esta es un punchline',
      thirdDescription : 'descripción de el stuff',
      thirdExtendedDescription: 'extensión de la descripción',
      thirdPunchline   : 'esta es un punchline'
    }
  );
};

exports.servicios = function(req, res){
  res.render('servicios', { title: 'Caler' });
};

exports.capacitaciones = function(req, res){
  res.render('capacitaciones', { title: 'Caler' });
};

exports.calendario = function(req, res){
  res.render('calendario', { title: 'Caler' });
};