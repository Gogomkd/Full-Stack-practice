exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' }); 
}; // landing page

exports.submit_lead = function(req, res, next) {
 console.log("Lead Email: ", req.body.lead_email)
 res.redirect('/');
}; // submit lead return input value