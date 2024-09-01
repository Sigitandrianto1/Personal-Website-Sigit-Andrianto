function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_g8rdbkq","template_1g42xgf",parms).then(alert ("success"))
}