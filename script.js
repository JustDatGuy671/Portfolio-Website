const opencontact = document.getElementById("contactform");
const overlay = document.getElementById('overlay');
function openContact(){
    opencontact.classList.add("opencontact")
    overlay.classList.add('overlayactive')
}
function closeContact(){
    opencontact.classList.remove("opencontact")
    overlay.classList.remove('overlayactive')
}


function sendEmail(){
    alert("Message sent successfully")  
}  