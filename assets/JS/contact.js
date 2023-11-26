$(document).ready(function() {
    
    function ktTen() {
        var formInput = $('#name').val().trim();
        var formErr = $('#name').closest('td').find('.form-message');
        if (formInput == '') {
            formErr.html('Tên không không được rỗng.');
            return false;
        } else  {
            formErr.html('');
            return true;
        } 
    }
    $('#name').blur(function() {
        ktTen();
    })

    function ktEmail() {
        var formInput = $('#email').val().trim();
        var rg = /^([A-Za-z]+[A-Za-z0-9\.-]+@gmail\.com)$/;
        var formErr = $('#email').closest('td').find('.form-message');
        if (formInput == '') {
            formErr.html('Email không được rỗng.');
            return false;
        } else if (rg.test(formInput)) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Vui lòng nhập đúng định dạng email: xxx@gmail.com.');
            return false;
        }
    }
    $('#email').blur(function() {
        ktEmail();
    })

    function ktPhone() {
        var formInput = $('#phone').val().trim();
        var rg = /^(0[3-9]{1}\d{8})$/;
        var formErr = $('#phone').closest('td').find('.form-message');
        if (formInput == '') {
            formErr.html('Không được rỗng.');
            return false;
        } else if (rg.test(formInput)) {
            formErr.html('');
            return true;
        } else {
            formErr.html('Số điện thoại phải đúng 10 số và bắt đầu bằng 0[3-9].');
            return false;
        }
    }
    $('#phone').blur(function() {
        ktPhone();
    })

    $('#sendMessage').click(function(e) {
        e.preventDefault();
        if (ktTen() && ktEmail() && ktPhone) {
            $('.success-btn').append(`
                <div class="success">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>Bạn đã gửi thành công</p>
                </div>
            `);
            setTimeout(function() {
                $('.success-btn').empty();
            }, 3800);
        } else {
            alert('Vui lòng nhập đầy đủ thông tin.');
        }
    })
    

})
