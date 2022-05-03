flag=true
function hinav()
{
    if(flag)
    {
        document.getElementById('bot-nav').style.display='flex'
        flag=false;
    }
    else
    {
        document.getElementById('bot-nav').style.display='none'
        flag=true; 
    }
}