var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


/*var articleOne={
    title: 'article one i sravya',
    heading: 'Article One',
    date: '19-aug-2017',
    content: '<p>i love doing web app.i love web app.i love doing web app.i love web app.i love doing web app.i love web appi love doing web app.i love web app </p>'
    
    
};

function createTemplate(data){
var title=data.title;
var date= data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate = `

<html>
    <head>
        <title>${title}</title>
<link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class='container'>
        <div>
            <a href="/">home</a>
        </div>
        <hr>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}

*/




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/article-one', function (req, res) {
    res.send(__dirname,'ui','article-one.html');
    
});/*
app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});*/
app.get('/article-two', function (req, res) {
  res.send('article two requested and served');
});
app.get('/article-three', function (req, res) {
  res.send('article three requested and served');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
