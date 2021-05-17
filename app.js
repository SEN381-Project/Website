// imports
const express = require('express');
const app = express();
const port = 8080;
const HOST = '0.0.0.0';

// Static files
app.use(express.static('public'));
app.use(express.json());
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('clientSatisfactionHome');
})

app.get('/csFeedback', (req, res) => {
    res.render('csFeedback');
})

app.get('/csFollowUp', (req, res) => {
    res.render('csFollowUp');
})

app.get('/csSetReminder', (req, res) => {
    res.render('csSetReminder');
})

app.post('/', (req, res) => {
    console.log(req.body);
});

// listen to port 8080
app.listen(port, () => console.info(`Server started, running on https://${HOST}:${port}`));
// changed package.json .. the entry point was specified as index.js changed it to app.js