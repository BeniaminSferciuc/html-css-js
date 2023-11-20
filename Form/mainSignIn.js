const seePassIcon = document.getElementById("seePass");

seePassIcon.addEventListener("click", function() {
    var passInput = document.getElementById("pass");
    if (passInput.type === "password") {
        passInput.type = "text";
        seePassIcon.classList.remove('fa-eye');
        seePassIcon.classList.add('fa-eye-slash');
    } else {
        passInput.type = "password";
        seePassIcon.classList.remove('fa-eye-slash');
        seePassIcon.classList.add('fa-eye');
    }
});