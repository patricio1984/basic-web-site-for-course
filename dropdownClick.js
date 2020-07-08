let x = document.getElementById("dropdownClick");

let dropdownMenu = () => {
    
    if(x.className === "topnav") {
        x.className += " responsive";
    /*Change topnav to topnav.responsive*/
    } else {
        x.className ="topnav";
    }
}

x.addEventListener("click", dropdownMenu);
