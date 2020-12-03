var check_email = JSON.parse(sessionStorage.getItem('user_email'));
var check_matkhau = JSON.parse(sessionStorage.getItem('user_matkhau'));


var emailnhapvao = document.getElementById("emailnhapvao");
var matkhaunhapvao = document.getElementById("matkhaunhapvao");

function checkTK() {
    if (emailnhapvao.value == check_email && matkhaunhapvao.value == check_matkhau) {
        alert("Đăng Nhập Thành Công!")
        var check_name = JSON.parse(sessionStorage.getItem('user_name'));
        sessionStorage.setItem("user_name123", JSON.stringify(check_name))
    }else {
        alert("Đăng nhập Thất Bại!")
        return false;
    }
}3