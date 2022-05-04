function ValidateEmail(event) 
{
    event.preventDefault();
    var nameValid= ValidName();
    var emailValid=ValidEmail();
    var passValid= ValidPass();
    
    if(!nameValid || !emailValid ||!passValid)
    {
        return;
    }
    event.target.submit();
}
function ValidName()
{
    var name=document.getElementById("defaultForm-name").value

    if(name==null || name=="")
    {
            alert("Name should not be empty")
    }
}
function ValidEmail()
{
    var mail=document.getElementById("defaultForm-email").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    else
    {   alert("You have entered an invalid email address!")
        return (false)
    }
}   
function ValidPass()
{
    var firstpassword=document.getElementById("defaultForm-pass1").value  
    var secondpassword=document.getElementById("defaultForm-pass2").value
    console.log(firstpassword)
    if(firstpassword=="" || secondpassword=="")
    {
        alert("Passwords Empty !!")    
    }
    else
    {
        if(firstpassword==secondpassword)
        {  
            return true;  
        }  
        else
        {  
            alert("password must be same!");  
            return false;  
        }  
    }

}

function clear_all()
{
    document.getElementById("defaultForm-name").value=''
    document.getElementById("defaultForm-email").value=''
    document.getElementById("defaultForm-pass1").value=''
    document.getElementById("defaultForm-pass2").value=''
}

function redirects()
{
    
    var mail=document.getElementById("l-email").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      location.href="http://www.w3schools.com"
    }
    else
    {   alert("You have entered an invalid email address!")
    }
    
    var pass=document.getElementById("l-pass").value
    if(pass=="")
    {
        alert('Password is Empty !!')
    }
}

function hinav()
{
        document.getElementById('top-nav').style.display='none'
        document.getElementById('bot-nav').style.display='flex'
        document.getElementById('head-nav').style.display='flex'  
}
function close_hinav()
{
    document.getElementById('top-nav').style.display='flex'
    document.getElementById('bot-nav').style.display='none'
    document.getElementById('head-nav').style.display='none'   
}

var i=1;
function zo_btun(num)
{ 
    if(num==1)
    {
        console.log((i++)*100)
        document.getElementById("main-doc").style.zoom=((i++)*100)+"%"
    }
    else if(num==0.5)
    {
        document.getElementById("main-doc").style.zoom=((i--)*100)+"%"
    }
    else if(num==0.25)
    {
        document.getElementById("main-doc").style.zoom="150%"
    }
    else
    {
        document.getElementById("main-doc").style.zoom="100%"
    }
}
function clear_mail_pass()
{
    document.getElementById("l-email").value=''
    document.getElementById("l-pass").value=''   
}