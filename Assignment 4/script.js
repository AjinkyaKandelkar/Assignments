function all_validation(event)
{
    event.preventDefault();
    var nameValid=validName();
    var emailValid=validEmail();
    var passValid=validPass();
    if(!nameValid||!emailValid||!passValid)
    {
        return;
    }
    event.target.submit();
}
function validName()
{
    var firstname=document.getElementById("fname").value
    var lastname=document.getElementById("lname").value
    var letters = /^[A-Za-z]+$/
    
    if(firstname=="" || lastname =="")
    {
        alert("Name Cannot be Empty!")
        return(false);
    }
    else if(/^[A-Za-z]+$/.test(firstname)& /^[A-Za-z]+$/.test(lastname))
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
        return (true)
    }
    else
    {   alert("You have entered an invalid email address!")
        return (false)
    }
}
function validPass()
{
    var pass=document.getElementById("password").value
    if(pass=="")
    {
        alert("password cannot be empty !!")
        return (false)
    }
    else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(pass))
    {
        return(true);
    }
    else
    {
        alert("1) Minimum length 4" +'\n'+"2) One upper case character and one lowercase character must be included."+'\n'+"3) Password must have one alpha-numeric value")
        return(false);
    }
}