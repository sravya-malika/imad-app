var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
 var crypto = require('crypto');
 var bodyParser = require('body-parser');

var config = {
    user: 'ksravyamalika',
    database:	'ksravyamalika',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};



var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());


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


function hash(input,salt){
     
     var hashed = crypto.pbkdf2Sync(input, salt, 100000, 512, 'sha512');
     return hashed.toString('hex');
}


app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'i am naughty');
    res.send(hashedString);
    
});

app.post('/create-user',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    
    var salt = crypto.getRandomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username,dbString], function(err, result){
        if(err){
            res.status(500).send(err.toString());
    
        }
        else{
            res.send('User Successfully created'+username);
        }
    });
    
    
});





var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
    
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});


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

app.get('/articles/:articleNames', function (req, res) {
    
    
     pool.query("SELECT * FROM article WHERE title= $1", [req.params.articleNames], function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } 
        else{
            if(result.rows.length === 0){
                res.status(404).send('Article Not found');
            }
            else{
                 var articleData = result.rows[0];
                 res.send(createTemplate(articleData));
            }
        }
     });
    
   

    
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
