function ktHo(){
    var ho = document.getElementById("txtHo").value
    var reg_ho = /^[A-Z]{1}[a-z]+/
    if(ho.trim()==""){
        window.alert("Họ không được để trống")
        return false
    }
    if(!reg_ho.test(ho)){
        window.alert("Họ phải bắt đầu bằng một ký tự hoa")
        return false
    }
    return true
}
function ktTen(){
    var ten = document.getElementById("txtTen").value
    var reg_ten = /^[A-Z]{1}[a-z]+/
    if(ten.trim()==""){
        window.alert("Tên không được để trống")
        return false
    }
    if(!reg_ten.test(ten)){
        window.alert("Tên phải bắt đầu bằng một ký tự hoa")
        return false
    }
    return true
}

function ktEmail(){
    var email = document.getElementById("txtEmail").value
    var reg_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(email.trim()==""){
        window.alert("Email không được để trống")
        return false
    }
    if(!reg_email.test(email)){
        window.alert("Email không đúng cú pháp")
        return false
    }
    return true
}

function ktEmailHai(){
    var email2 = document.getElementById("txtHai").value
    var reg_email2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(email2.trim()==""){
        window.alert("Email không được để trống")
        return false
    }
    if(!reg_email2.test(email2)){
        window.alert("Email không đúng cú pháp")
        return false
    }
    return true
}

function ktMatKhau(){
    var pass = document.getElementById("txtPW").value
    var reg_pass = /\w{6,}/
    if(pass.trim()==""){
        window.alert("Mật khẩu không được để trống")
        return false
    }
    if(!reg_pass.test(pass)){
        window.alert("Mật khẩu chưa ít nhất 6 ký tự")
        return false
    }
    return true
}
function ktNamSinh(){
    var nam = document.getElementById("txtNamSinh").value
    if(nam.trim()==""){
        window.alert("Năm sinh không được để trống")
        return false
    }
    if(isNaN(nam)){
        window.alert("Năm sinh phải là số")
        return false
    }else{
        var ns = parseInt(nam)
        if(ns >= 2002){
            window.alert("Năm sinh phải nhỏ hơn 2002")
            return false
        }
    }
    return true
}