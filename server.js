var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
    title: 'article one i sravya',
    heading: 'Article One',
    date: '19-aug-2017',
    content: ` <p>i love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herevi love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from here
            </p>
            <p>i love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herevi love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from here
            </p>
            <p>i love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from herevi love doing web app.We can learn a lot from herei love doing web app.We can learn a lot from here
            </p>`
    
    
},
 'article-two':{
    title: 'article two i sravya',
    heading: 'Article two',
    date: '17-feb-2018',
    content: ` <div>
            <p>i love doing web appi love doing web appi love doing web appi love doing web appi love doing web app</p>
        </div>`
    
    
}
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
var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(path.join(counter.toString()));
});


var names = [];
app.get('/submit-name',function(req, res){
    var name=req.query.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));

    
});




app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
