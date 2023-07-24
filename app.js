// Imports
const express = require('express')
const Prism = require('prismjs');
require('prismjs/components/')();
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})

app.get('/usercentereddesign', (req, res) => {
    res.render('ucd')
})

app.get('/georanking', (req, res) => {
    res.render('geo-ranking')
})

app.get('/burger', (req, res) => {
    res.render('burger')
})

app.get('/webappfromscratch', (req, res) => {
    res.render('webapp')
})

app.get('/boardom', (req, res) => {
    res.render('boardom')
})

// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))