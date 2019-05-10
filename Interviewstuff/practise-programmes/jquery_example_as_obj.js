<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
function callme(){
 $.get("https://github.com/typicode/json-server/file-list/master/src", function(data, status)    {
    alert("Data: " + data + "\nStatus: " + status);
  });
}
</script>
</head>
<body>
<button onclick="callme()">Click me</button>
</body>
</html>


