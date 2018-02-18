
//var element = document.getElementById('main-text');
//element.innerHTML='New Value';

//move image
var img=document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft='100px';
};
//counter
counter=0;
var button=document.getElementById('counter');
button.onclick = function(){
    //make a request
  /*  var request= new XMLHttpRequest();
    
    //capture
    request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          //take action
          if(request.status == 200)
          {
              var counter = request.responseText;
               var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
      }
    };
    */
    //render in correct span
   counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
//   make a request
   //request.open('GET','http://ksravyamalika.imad.hasura-app.io/',true);
   //request.send(null);
};