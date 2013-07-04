
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Caler' });
};

exports.contacto = function(req, res){
  res.render('contacto', { title: 'Caler' });
};

exports.caler = function(req, res){
  res.render('caler', { title: 'Caler' });
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