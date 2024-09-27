function check() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gpa = document.getElementById("gpa").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("level").value;
    var status = document.getElementById("status").value;
    var departement = document.getElementById("department").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    if (id == "") { alert("Error,ID must be filled!"); document.getElementById("id").focus(); return false; }
    else {
        if (name == "") { alert("Error,Name must be filled!"); document.getElementById("name").focus(); return false; }
        else {
            re = /[a-zA-Z]/;
            if (!re.test(name)) { alert("Error,Name must be contain of character [a-z] or [A-Z]!"); document.getElementById("name").focus(); return false; }
            else {
                if (date == "") { alert("Error,date must be filled!"); document.getElementById("date").focus(); return false; }
                else {
                    if (gpa == "") { alert("Error,GPA must be filled!"); document.getElementById("gpa").focus(); return false; }
                    else {
                        if (gpa > 4 || gpa < 0) { alert("Error,GPA must be between 0 and 4 !"); document.getElementById("gpa").focus(); return false }
                        else {
                            if (gender == "") { alert("Error,gender must be filled!"); document.getElementById("gender").focus(); return false }
                            else {
                                if (level == "") { alert("Error,level must be filled!"); document.getElementById("level").focus(); return false; }
                                else {
                                    if (level > 4 || level <= 0) { alert("Error,level must be between 1 and 4 !"); document.getElementById("level").focus(); return false }
                                    else {
                                        if (status == "") { alert("Error,status must be filled!"); document.getElementById("status").focus(); return false; }
                                        else {
                                            if (departement == "") { alert("Error,Department must be filled!"); document.getElementById("department").focus(); return false; }
                                            else {
                                                if (email == "") { alert("Error,Email must be filled!"); document.getElementById("email").focus(); return false; }
                                                else {
                                                    if (phonenumber == "") { alert("Error,Phone Number must be filled!"); document.getElementById("phonenumber").focus(); return false; }
                                                    else {

                                                        re = /[0-9]/;
                                                        if (!re.test(phonenumber)) { alert("Error,Phone Number Should be 11 Numbers and must be contain of number [0-9] !"); document.getElementById("phonenumber").focus(); return false; }
                                                        else { return true; }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function checkUpdate() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gpa = document.getElementById("gpa").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("level").value;
    var status = document.getElementById("status").value;
    var departement = document.getElementById("department").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    if (id == "") { alert("Error,ID must be filled!"); document.getElementById("id").focus(); return false; }
    else {
        if (name == "") { alert("Error,Name must be filled!"); document.getElementById("name").focus(); return false; }
        else {
            re = /[a-zA-Z]/;
            if (!re.test(name)) { alert("Error,Name must be contain of character [a-z] or [A-Z]!"); document.getElementById("name").focus(); return false; }
            else {
                if (date == "") { alert("Error,date must be filled!"); document.getElementById("date").focus(); return false; }
                else {
                    if (gpa == "") { alert("Error,GPA must be filled!"); document.getElementById("gpa").focus(); return false; }
                    else {
                        if (gpa > 4 || gpa < 0) { alert("Error,GPA must be between 0 and 4 !"); document.getElementById("gpa").focus(); return false }
                        else {
                            if (gender == "") { alert("Error,gender must be filled!"); document.getElementById("gender").focus(); return false }
                            else {
                                if (level == "") { alert("Error,level must be filled!"); document.getElementById("level").focus(); return false; }
                                else {
                                    if (level > 4 || level <= 0) { alert("Error,level must be between 1 and 4 !"); document.getElementById("level").focus(); return false }
                                    else {
                                        if (status == "") { alert("Error,status must be filled!"); document.getElementById("status").focus(); return false; }
                                        else {
                                            if (email == "") { alert("Error,Email must be filled!"); document.getElementById("email").focus(); return false; }
                                            else {
                                                if (phonenumber == "") { alert("Error,Phone Number must be filled!"); document.getElementById("phonenumber").focus(); return false; }
                                                else {
                                                    re = /[0-9]/;
                                                    if (!re.test(phonenumber)) { alert("Error,Phone Number Should be 11 Numbers and must be contain of number [0-9] !"); document.getElementById("phonenumber").focus(); return false; }
                                                    else { return true; }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
