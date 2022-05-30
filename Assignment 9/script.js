function magic(){
    document.getElementById("unhide").style.display="none";
    document.getElementById("hide").style.display="block";
}

function clrchange(yes,card_id,col_id,clr='white'){
    if(yes=="hi"){
        col_id.style.backgroundColor=clr;
        card_id.style.borderRadius="10px";
        col_id.style.borderTopLeftRadius="10px";
        col_id.style.borderBottomLeftRadius="10px";
        col_id.style.transition="0.4s";
        document.getElementById("image1").style.display="block";
    }
    else if(yes=='bye'){
        col_id.style.backgroundColor=clr;
        card_id.style.borderRadius="0px";
        document.getElementById("image1").style.display="none";
    }
        
}
