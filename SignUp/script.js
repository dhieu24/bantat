let name = document.getElementById("name");
let birthday = document.getElementById("birthday");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");

var listUser = [];


function validateForm() {
    if (password.value != repassword.value) {
        alert("Đăng kí thất bại! Mời bạn kiểm tra lại thông tin đăng kí")
        return false;
    }else {
        var user = {
            name: name.value,
            birthday: birthday.value,
            email: email.value,
            password: password.value
        }
        console.log(user)
        listUser.push(user);

        alert("Đăng Kí Thành Công! Mời Bạn Đăng Nhập.")
       
        sessionStorage.setItem("user_email", JSON.stringify(user.email))
        sessionStorage.setItem("user_matkhau", JSON.stringify(user.password))
        sessionStorage.setItem("user_name", JSON.stringify(user.name))

    }

}



   

