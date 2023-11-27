$(document).ready(function() {

    function ktTen() {
        var formInput = $('#fullname').val().trim();
        var rg = /^[A-Z]{1}[a-z]+( [A-Z]{1}[a-z]+)+$/;
        var formErr = $('#fullname').closest('.form-group').find('.form-message');
        if (formInput == '') {
            formErr.html('Họ và tên không được rỗng.');
            return false;
        } else if (rg.test(formInput)) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Họ tên bắt đầu bằng chữ IN HOA và từ hai ký tự trở lên.');
            return false;
        }
    }
    $('#fullname').blur(function() {
        ktTen();
    })
    
    function ktEmailPhone() {
        var formInput = $('#emailPhone').val().trim();
        var rg = /^([A-Za-z]+[A-Za-z0-9\.-]+@gmail\.com)|(0[3-9]{1}\d{8})$/;
        var formErr = $('#emailPhone').closest('.form-group').find('.form-message');
        if (formInput == '') {
            formErr.html('Không được rỗng.');
            return false;
        } else if (rg.test(formInput)) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Vui lòng nhập đúng định dạng email: xxx@gmail.com hoặc số điện thoại.');
            return false;
        }
    }
    $('#emailPhone').blur(function() {
        ktEmailPhone();
    })
    
    function ktPassword() {
        var formInput = $('#password').val().trim();
        // (?= ...) lọc kết quả.
        var rg = /^(?=.*[A-Z])(?=.*\d).{8,}/;
        var formErr = $('#password').closest('.form-group').find('.form-message');
        if (formInput == '') {
            formErr.html('Mật khẩu không được rỗng.');
            return false;
        } else if (rg.test(formInput)) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Mật khẩu phải bao gồm kí tự IN HOA, chữ số và trên 8 kí tự.');
            return false;
        }
    }
    $('#password').blur(function() {
        ktPassword();
    })
    
    function ktConfirmPassword() {
        var formInput = $('#confirmPassword').val().trim();
        var formErr = $('#confirmPassword').closest('.form-group').find('.form-message');
        if (formInput == '') {
            formErr.html('Không được rỗng.');
            return false;
        } else if (formInput === $('#password').val()) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Mật khẩu nhập lại không chính xác.');
            return false;
        }
    }
    $('#confirmPassword').blur(function() {
        ktConfirmPassword();
    })
    
    $('.btn-signUp').click(function(e) {
        e.preventDefault();
        if (ktTen() && ktEmailPhone() && ktPassword() && ktConfirmPassword()) {
            $('.tk').html($('#fullname').val());
            $('.mk').html($('#password').val());
            $('#modalSignUp').modal('show');
            var user = [];
            user.push({
                tk: $('.tk').html(),
                mk: $('.mk').html(),
            });
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            alert('Vui lòng nhập đầy đủ thông tin.');
        }
    })
})