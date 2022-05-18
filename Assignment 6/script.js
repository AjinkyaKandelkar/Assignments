var x=true;
var y=true;
function unhidefun(yes)
{
    if(x)
    {
        yes.style.display="block";
        x=false;
    }
    else
    { 
        yes.style.display="none";
        x=true;
    }
}

function buttonchange()
{
    
    if(y==true)
    {  
        
        document.getElementById("first-logo").setAttribute("class","bi bi-chevron-up");
        y=false;
    }
     else
    {
        document.getElementById("first-logo").setAttribute("class","bi bi-chevron-down");
        y=true;
    }
    
}