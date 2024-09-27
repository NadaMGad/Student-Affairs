
function checkinf() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "") { alert("Error,User Name must be filled! "); document.getElementById("username").focus(); return false; }
    else {
        if (password == "") { alert("Error,Password must be filled! "); document.getElementById("password").focus(); return false; }
        else {
            return true;
        }
    }


}

