function onlylogin_valid(event)
{
    event.preventDefault();
    if(!validEmail()||!validPass())
    {
        return;   
    }
    if(true){
        alert("Succesful!");
        setTimeout(page_direct(),3000);
    }
}

function page_direct()
{
    window.location.href="HomePage.html";   
}

function all_validation(event)
{
    event.preventDefault();
    
    if(!validName()||!validEmail()||!validPass())
    {
        return;   
    }
    if(true){alert("Succesful!");}
}



function validName()
{
    var firstname=document.getElementById("fname").value
    var lastname=document.getElementById("lname").value
    if(firstname=="" || lastname=="")
    {
        alert("Name Cannot be Empty!")
        return(false);
    }
    else if((/^[A-Za-z]+$/.test(firstname)) && (/^[A-Za-z]+$/.test(lastname)) )
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
    if(email=="")
    {
        alert("Email cannot be empty!");
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true);
    }
    else
    {   alert("You have entered an invalid email address!");
        return (false);
    }
}
function validUser()
{
    var user=document.getElementById("uname").value;
    if(user==""){
        alert("Empty Username!");
        return (false);
    }
    else{ return (true);}
}

function validPass()
{
    var pass1=document.getElementById("password").value;
  
    if(pass1=="")
    {
        alert("Password cannot be Empty!");
        return (false);
    }

    else{
        return true;
    }
}