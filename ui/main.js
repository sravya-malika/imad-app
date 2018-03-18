var submit_login=document.getElementById('submit_login')

submit_login.onclick = function(){
    //make a request
   var request= new XMLHttpRequest();
    
    //capture
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take action
          if(request.status === 200)
          {
              alert('logged success');
              
          }
          else if(request.status === 403)
          {
              alert('username/password is incorrect');
          }
          else if(request.status === 500)
          {
              alert('something went wrong');
          }
      }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   request.open('POST','http://ksravyamalika.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username, password: password}));
};


















//var element = document.getElementById('main-text');
//element.innerHTML='New Value';

//move image
/*var img=document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft='100px';
};*/
//counter
//counter=0;
var button=document.getElementById('counter');
button.onclick = function(){
    //make a request
   var request= new XMLHttpRequest();
    
    //capture
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take action
          if(request.status === 200)
          {
              var counter = request.responseText;
               var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
      }
    };
    
    //render in correct span
   //counter=counter+1;
    //var span=document.getElementById('count');
    //span.innerHTML=counter.toString();
//   make a request
   request.open('GET','http://ksravyamalika.imad.hasura-app.io/counter',true);
   request.send(null);
};




var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a requst to server
    var request= new XMLHttpRequest();
    
    //capture
  
   request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take action
          if(request.status === 200)
          {
    
                //capture and list
                var names = request.responseText;
                names= JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++)
                {
                    list += '<li>'+names[i]+'</li>';   
                }
                var ul= document.getElementById('namelist');
                ul.innerHTML=list;
          }
      }
};
var nameInput =document.getElementById('name');
var name1 = nameInput.value;
request.open('GET','http://ksravyamalika.imad.hasura-app.io/submit-name?name='+name1,true);
   request.send(null);
};





