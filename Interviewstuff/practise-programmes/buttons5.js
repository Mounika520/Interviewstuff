function createbuttons(){
  
  for(var i=1;i<=5;i++){
   var button  = document.createElement('BUTTON')
       button.innerHTML = 'button'+i+'';
      
         button.onclick = function(){
          alert("This is button "+num)
        }
   
    document.getElementById('buttons').appendChild(button)
  }
}
createbuttons()



solution :

function createbuttons(){
  
  for(var i=1;i<=5;i++){
   var button  = document.createElement('BUTTON')
       button.innerHTML = 'button'+i+'';
       (function(num){
         console.log(num)
         button.onclick = function(){
          alert("This is button "+num)
        }
       })(i)
    document.getElementById('buttons').appendChild(button)
  }
}
createbuttons()



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div id='buttons'></div>
</body>
</html>



// Solution 1:

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(num) {
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     body.appendChild(button);
   }
}

createButtons();




// Solution 2:

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;     
     addClickFunctionality(button, i);
     body.appendChild(button);
   }
}

function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert('This is button ' + num);
  }
}

createButtons();




// Solution 3:

function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}

createButtons();