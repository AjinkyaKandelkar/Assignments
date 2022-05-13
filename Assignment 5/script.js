function all_validation(event)
{
    event.preventDefault();
    
    if(!validName()||!validEmail()||!validPass())
    {
        return;
    }

    event.target.submit();
}
function validName()
{
    var firstname=document.getElementById("fname").value
    var letters = /^[A-Za-z]+$/
    
    if(firstname=="")
    {
        alert("Name Cannot be Empty!")
        return(false);
    }
    else if(/^[A-Za-z]+$/.test(firstname))
    {
        return (true);
    }
    else
    {
        alert("Name Should contain only Alphabates")
        return (false);
    }
}
function validEmail()
{
    var email=document.getElementById("email").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true);
    }
    else
    {   alert("You have entered an invalid email address!");
        return (false);
    }
}

function magic()
{
    document.getElementById("hide").style.display="block"
    document.getElementById("unide").style.display="none";
}
function hidemain()
{
    document.getElementById("hide").style.display="none";
}