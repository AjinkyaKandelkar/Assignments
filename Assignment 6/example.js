var z = document.getElementById("inputBox");
z.addEventListener("focusin", myFocusFunction);
z.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
document.getElementById("searchIcon").style.display="none";
}

function myBlurFunction() {
document.getElementById("searchIcon").style.display= "block";
} 

