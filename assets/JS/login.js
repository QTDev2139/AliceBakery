$(document).ready(function() {
    var users = JSON.parse(localStorage.getItem('user'));
    
    users.map(function(user, index) {
        console.log(user)
        function ktTen() {
            var formInput = $('#fullname').val().trim();
            var formErr = $('#fullname').closest('.form-group').find('.form-message');
            if (formInput == '') {
                formErr.html('Tên tài khoản không được rỗng.');
                return false;
            } else if (formInput === user.tk) {
                formErr.html('');
                return true;
            } else {
                formErr.html('Tài khoản không chính xác.');
                return false;
            }
        }
        $('#fullname').blur(function() {
            ktTen();
        })

        function ktPassword() {
            var formInput = $('#password').val().trim();
            var formErr = $('#password').closest('.form-group').find('.form-message');
            if (formInput == '') {
                formErr.html('Mật khẩu không được rỗng.');
                return false;
            } else if (formInput === user.mk) {
                formErr.html('');
                return true;
            } else {
                formErr.html('Mật khẩu không chính xác.');
                return false;
            }
        }
        $('#password').blur(function() {
            ktPassword();
        })

        $('.btn-login').click(function(e) {
            e.preventDefault();
            if (ktTen() && ktPassword()) {
                alert('Đăng nhập thành công');
            } else {
                alert('Vui lòng nhập đầy đủ thông tin.');
            }
        })
    })
    

})
