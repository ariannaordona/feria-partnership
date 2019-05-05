var express         = require('express'),
    app             = express(),
    serveStatic     = require('serve-static'),
    http            = require('http'),
    path            = require('path');

var agent = new http.Agent({
  keepAlive: true,
  maxSockets: 1,
  keepAliveMsecs: 3000
});

app.set('view engine', 'ejs');
app.use(serveStatic('FERIA/'));
app.use(express.urlencoded({}));

//====================================
// ROUTES
//====================================

app.get('/', function(req, res){res.redirect('/home');});
app.get('/home', function(req, res){res.render('home', {hrefEng:'/home', hrefSpa:'/home-spanish', spanish:false});});
app.get('/home-spanish', function(req, res){res.render('home', {hrefEng:'/home', hrefSpa:'/home-spanish', spanish:true});});
app.get('/about', function(req, res){res.render('about', {hrefEng:'/about', hrefSpa:'/about-spanish', spanish:false});});
app.get('/about-spanish', function(req, res) {res.render('about', {hrefEng:'/about', hrefSpa:'/about-spanish', spanish:true});});
app.get('/contact', function(req,res) {res.render('contact', {hrefEng:'/contact', hrefSpa:'/contact-spanish', spanish:false});});
app.get('/contact-spanish', function(req,res) {res.render('contact', {hrefEng:'/contact', hrefSpa:'/contact-spanish', spanish:true});});
app.post('/contact', function(req,res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var msg = {
    to: 'ariannaordona@gmail.com',
    from: req.body.email,
    subject: req.body.subject,
    html: req.body.message + '<p><strong>' + req.body.fullName + '</strong></p>',
  };
  sgMail.send(msg);
  msg = {
    to: 'feria.partnership@gmail.com',
    from: req.body.email,
    subject: req.body.subject,
    html: req.body.message + '<p><strong>' + req.body.fullName + '</strong></p>',
  }
  sgMail.send(msg);
  res.redirect('/about');
});
app.get('/events', function(req, res){res.render('events', {hrefEng:'/events', hrefSpa:'/events-spanish', spanish:false});});
app.get('/events-spanish', function(req, res){res.render('events', {hrefEng:'/events', hrefSpa:'/events-spanish', spanish:true});});
app.get('/events/feria-5', function(req, res){res.render('feria-5', {hrefEng:'/events/feria-5', hrefSpa:'/events/feria-5-spanish', spanish:false})});
app.get('/events/feria-5-spanish', function(req, res){res.render('feria-5', {hrefEng:'/events/feria-5', hrefSpa:'/events/feria-5', spanish:true})});
app.get('/events/feria-4', function(req, res){res.render('feria-4', {hrefEng:'/events/feria-4', hrefSpa:'/events/feria-4-spanish', spanish:false})});
app.get('/events/feria-4-spanish', function(req, res){res.render('feria-4', {hrefEng:'/events/feria-4', hrefSpa:'/events/feria-4-spanish', spanish:true})});
app.get('/events/feria-3', function(req, res){res.render('feria-3', {hrefEng:'/events/feria-3', hrefSpa:'/events/feria-3-spanish', spanish:false})});
app.get('/events/feria-3-spanish', function(req, res){res.render('feria-3', {hrefEng:'/events/feria-3', hrefSpa:'/events/feria-3-spanish', spanish:true})});
app.get('/agencies-orgs', function(req,res){res.render('agencies-orgs', {hrefEng:'/agencies-orgs', hrefSpa:'/agencies-orgs-spanish', spanish:false})});
app.get('/agencies-orgs-spanish', function(req,res){res.render('agencies-orgs', {hrefEng:'/agencies-orgs', hrefSpa:'/agencies-orgs-spanish', spanish:true})});
app.get('/questions-and-concerns', function(req,res){res.render('questions-and-concerns', {hrefEng:'/questions-and-concerns', hrefSpa:'/questions-and-concerns-spanish', spanish:false})});
app.get('/questions-and-concerns-spanish', function(req,res){res.render('questions-and-concerns', {hrefEng:'/questions-and-concerns', hrefSpa:'/questions-and-concerns-spanish', spanish:true})});

//====================================
// IMAGE ROUTES
//====================================

app.get('/images/logo/feria_icon.ico', function(req, res, next){res.sendFile(path.join(__dirname, 'images/logo', 'feria_icon.ico'));});
app.get('/images/logo/feria.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/logo', 'feria.png'));});
app.get('/images/logo/top-donors.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/logo', 'top-donors.jpg'));});
app.get('/images/home/crowd.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/home', 'crowd.jpg'));});
app.get('/images/home/jose.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/home', 'jose.jpg'));});
app.get('/images/home/vendor.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/home', 'vendor.jpg'));});
app.get('/images/home/presenter.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/home', 'presenter.jpg'));});
app.get('/images/home/keynote.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/home', 'keynote.jpg'));});
app.get('/images/flags/mexico.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/flags', 'mexico.jpg'));});
app.get('/images/flags/usa.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/flags', 'usa.png'));});
app.get('/images/team/group-picture.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'group-picture.jpg'));});
app.get('/images/team/clarisa-solis.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'clarisa-solis.jpg'));});
app.get('/images/team/alex-montoya.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'alex-montoya.jpg'));});
app.get('/images/FERIA-conference/4/img0001.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0001.jpg'));});
app.get('/images/FERIA-conference/4/img0002.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0002.jpg'));});
app.get('/images/FERIA-conference/4/img0003.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0003.jpg'));});
app.get('/images/FERIA-conference/4/img0004.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0004.jpg'));});
app.get('/images/FERIA-conference/4/img0005.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0005.jpg'));});
app.get('/images/FERIA-conference/3/img0001.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0001.jpg'));});
app.get('/images/FERIA-conference/3/img0002.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0002.jpg'));});
app.get('/images/FERIA-conference/3/img0003.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0003.jpg'));});
app.get('/images/graphics/feria-frame.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/graphics', 'feria-frame.jpg'));});
app.get('/images/graphics/bullet.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/graphics', 'bullet.jpg'));});
app.get('/images/graphics/mountain-frame.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/graphics', 'mountain-frame.jpg'));});

//====================================
// DOCS ROUTES
//====================================

// app.get('/docs/IEP-record-keeping-flyer.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'IEP-record-keeping-flyer.pdf'));});
// app.get('/docs/applebee-fundraiser-flyer-english.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'applebee-fundraiser-flyer-english.pdf'));});
// app.get('/docs/applebee-fundraiser-flyer-spanish.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'applebee-fundraiser-flyer-spanish.pdf'));});
app.get('/docs/FERIA-conference/1st-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '1st-program.pdf'));});
app.get('/docs/FERIA-conference/2nd-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '2nd-program.pdf'));});
app.get('/docs/FERIA-conference/3rd-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '3rd-program.pdf'));});
app.get('/docs/FERIA-conference/4th-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '4th-program.pdf'));});
app.get('/docs/FERIA-conference/4-eval-sum.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '4-eval-sum.pdf'));});
app.get('/docs/FERIA-conference/3-eval-sum.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '3-eval-sum.pdf'));});

//====================================
// STYLESHEETS ROUTES
//====================================

app.get('/stylesheets/general.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'general.css'));});
app.get('/stylesheets/home.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'home.css'));});
app.get('/stylesheets/about.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'about.css'));});
app.get('/stylesheets/development.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'development.css'));});
app.get('/stylesheets/events.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'events.css'));});
app.get('/stylesheets/event-conferences.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'event-conferences.css'));});
app.get('/stylesheets/feria-5.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'feria-5.css'));});
app.get('/stylesheets/feria-4.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'feria-4.css'));});
app.get('/stylesheets/feria-3.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'feria-3.css'));});

app.get('*', function(req, res){res.render('development');});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('FERIA server is running');
});
