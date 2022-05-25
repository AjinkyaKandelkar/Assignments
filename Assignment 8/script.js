document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bi-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });


    // <!-- <i class="bi bi-gear nav_logo-icon"></i>
    // <i class="bi bi-bell nav_logo-icon"></i>
    // <span class="dropdown-center">
    //     <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    //       Centered dropdown
    //     </button>
    //     <ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn">
    //       <li><a class="dropdown-item" href="#">Action</a></li>
    //       <li><a class="dropdown-item" href="#">Action two</a></li>
    //       <li><a class="dropdown-item" href="#">Action three</a></li>
    //     </ul>
    // </span> -->