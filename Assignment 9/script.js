function magic(){
    document.getElementById("unhide").style.display="none";
    document.getElementById("hide").style.display="block";
}

function clrchange(yes,card_id,col_id,img_div,clr='white'){
    if(yes=="hi"){
        col_id.style.backgroundColor=clr;
        card_id.style.borderRadius="10px";
        col_id.style.borderTopLeftRadius="10px";
        col_id.style.borderBottomLeftRadius="10px";
        col_id.style.transition="0.4s";
        image_hide(yes,img_div);
    }
    else if(yes=='bye'){
        col_id.style.backgroundColor=clr;
        card_id.style.borderRadius="0px";
        image_hide(yes,img_div);
    }
        
}

function image_hide(yes,img_div){
    if(yes=="hi"){
       img_div.style.display="block";
    }
    else if(yes=='bye'){
        img_div.style.display="none";
    }
}
var y=true;
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

function sitechange(){
    window.location.replace("login_page.html");

}