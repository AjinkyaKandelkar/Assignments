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
        console.log("First call");
        document.getElementById("first-logo").style.display="none";
        document.getElementById("hidden-logo").style.display="block";
        y=false;
        
    }
    else
    {
        document.getElementById("hidden-logo").style.display="none";
        y=true;
        document.getElementById("first-logo").style.display="block";
    }
    
}