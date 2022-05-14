var x=true;
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