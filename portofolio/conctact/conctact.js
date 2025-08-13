const formdiv = document.getElementById("formdiv");


function HideSuccessMessageBox(){
    document.getElementById("sussefullmessage").style.display = 'none';
}

function HideErrorMessageBox(){
    document.getElementById("errormessage").style.display = 'none';
}

formdiv.addEventListener("submit",function(e){
    e.preventDefault()
    
    
    let user_name = document.getElementById("username").value;
    let user_email = document.getElementById("email").value;
    let user_message = document.getElementById("user_message").value;
    
    emailjs.init('AKvtGLUE2IlF1IJFd');


    emailjs.send("service_ambf8od","template_mnuzj9q",{
    user_name: user_name,
    message: user_message,
    email:user_email,
    subject: "Email from my portfolio website",
  }).then(()=>{
        document.getElementById("sussefullmessage").style.display = 'block';
        setTimeout(HideSuccessMessageBox,5000);
    },() => {
        document.getElementById("errormessage").style.display = 'block';
        setTimeout(HideErrorMessageBox,5000);
    })

    formdiv.clear();
})




