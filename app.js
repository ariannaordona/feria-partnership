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

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'ariannaordona@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
//====================================
// ROUTES
//====================================

app.get('/', function(req, res){res.redirect('/home');});
app.get('/home', function(req, res){res.render('home', {spanish:false});});
app.get('/home-spanish', function(req, res){res.render('home', {spanish:true});});
// app.get('/about', function(req, res){res.render('about');});
// app.get('/about-spanish', function(req, res) {res.render('about-spanish');});
app.get('/events', function(req, res){res.render('events');});
// app.get('/events-spanish', function(req, res){res.render('events-spanish');});

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
// app.get('/images/team/group-picture.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'group-picture.png'));});
// app.get('/images/team/becki.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'becki.png'));});
// app.get('/images/team/jose.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'jose.png'));});
// app.get('/images/team/angie.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'angie.png'));});
// app.get('/images/team/patti.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'patti.png'));});
// app.get('/images/team/annegraves.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'annegraves.png'));});
// app.get('/images/team/manuela.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'manuela.png'));});
// app.get('/images/team/elizabeth.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'elizabeth.png'));});
// app.get('/images/team/raquel.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'raquel.png'));});
// app.get('/images/team/ochoa.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'ochoa.png'));});
// app.get('/images/team/carmen.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'carmen.png'));});
// app.get('/images/team/michelle.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'michelle.png'));});
// app.get('/images/team/escobedo.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'escobedo.png'));});
// app.get('/images/team/arianna.png', function(req, res, next){res.sendFile(path.join(__dirname, 'images/team', 'arianna.png'));});
app.get('/images/FERIA-conference/4/img0001.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0001.jpg'));});
app.get('/images/FERIA-conference/4/img0002.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0002.jpg'));});
app.get('/images/FERIA-conference/4/img0003.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0003.jpg'));});
app.get('/images/FERIA-conference/4/img0004.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0004.jpg'));});
app.get('/images/FERIA-conference/4/img0005.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/4/', 'img0005.jpg'));});
app.get('/images/FERIA-conference/3/img0001.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0001.jpg'));});
app.get('/images/FERIA-conference/3/img0002.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0002.jpg'));});
app.get('/images/FERIA-conference/3/img0003.jpg', function(req, res, next){res.sendFile(path.join(__dirname, 'images/FERIA-conference/3/', 'img0003.jpg'));});

//====================================
// DOCS ROUTES
//====================================

// app.get('/docs/IEP-record-keeping-flyer.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'IEP-record-keeping-flyer.pdf'));});
// app.get('/docs/applebee-fundraiser-flyer-english.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'applebee-fundraiser-flyer-english.pdf'));});
// app.get('/docs/applebee-fundraiser-flyer-spanish.pdf', function(req, res, next){res.sendFile(path.join(__dirname, 'docs/', 'applebee-fundraiser-flyer-spanish.pdf'));});
// app.get('/docs/FERIA-conference/1st-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '1st-program.pdf'));});
// app.get('/docs/FERIA-conference/2nd-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '2nd-program.pdf'));});
// app.get('/docs/FERIA-conference/3rd-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '3rd-program.pdf'));});
// app.get('/docs/FERIA-conference/4th-program.pdf', function(req, res) {res.sendFile(path.join(__dirname, 'docs/FERIA-conference', '4th-program.pdf'));});

//====================================
// STYLESHEETS ROUTES
//====================================

app.get('/stylesheets/general.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'general.css'));});
app.get('/stylesheets/home.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'home.css'));});
// app.get('/stylesheets/about.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'about.css'));});
app.get('/stylesheets/development.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'development.css'));});
app.get('/stylesheets/events.css', function(req, res, next){res.sendFile(path.join(__dirname, 'stylesheets', 'events.css'));});

app.get('*', function(req, res){res.render('development');});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('FERIA server is running');
});
