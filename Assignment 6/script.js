var x=true;
var y=true;
function unhidefun(yes,change_clr)
{
    if(x)
    {
        yes.style.display="block";
        change_clr.style.color="rgb(29, 164, 254)";
        x=false;
    }
    else
    { 
        yes.style.display="none";
        change_clr.style.color="black";
        x=true;
    }
}
function buttonchange()
{
    console.log(y);
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
    