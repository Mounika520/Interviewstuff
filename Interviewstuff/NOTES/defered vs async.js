// defered vs async 


// https://bitsofco.de/async-vs-defer/



Noraml Case :
===============


<html>
<head> ... </head>
<body>
    ...
    <script src="script.js">
    ....
</body>
</html>



HTML parser  starts 
    

    Html parser holds / pasue 
     Scrit file fetch 

     Script file excutes 


     HTML parser play 

HTMl parse done 


async case 
========== 
<html>
<head> ... </head>
<body>
    ...
    <script async src="script.js">
    ....
</body>
</html>

  


HTML parser  starts 
    

   
     Scrit file fetch 

     Script file excutes 



HTMl parse done  

// Parser dosn't wait for script to load 





//Deffer atribute 


<html>
<head> ... </head>
<body>
    ...
    <script defer src="script.js">
    ....
</body>
</html>



