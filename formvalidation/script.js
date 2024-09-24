const btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (validate()) {
        alert("Form Submitted");
    }
});
function validate() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if(name.length == 0) {
        alert("Name is Required");
        return false;
    }
    if(!/^[a-zA-Z\s]*$/g.test(name)){
        alert("only Alphabets");
        return false;
    }
    if(email.length == 0){
        alert("Email is required");
        return false;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("Invalid Email");
        return false;
    }
    if(pass.length == 0) {
        alert("Password is Required");
        return false;
    }
    if(pass.length<8){
        alert("Password must be atleast 8 characters");
        return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(pass)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, one special symbol, and be at least 8 characters long.");
        return false;
    }
    return true;
}
