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
    if(firstpassword==null || secondpassword==null)
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

function cleasrs()
{
    document.getElementById("defaultForm-name").value=''
    document.getElementById("defaultForm-email").value=''
    document.getElementById("defaultForm-pass1").value=''
    document.getElementById("defaultForm-pass2").value=''
}
