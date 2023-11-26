function validator(options) {

    function validate(inputElement, rule) {
        var errorElement = rule.test(inputElement.val());
        var errorMessage = inputElement.closest('.form-group').find('.form-message');
        if(errorElement) {
            errorMessage.html(errorElement);
            inputElement.addClass('invalid');
        } else {
            errorMessage.html('');
            inputElement.removeClass('invalid');
        }
    }
    
    var formELement = $(options.form);
    if(formELement) {
        options.rules.forEach(function(rule) {
            var inputElement = $(rule.selector);
            if (inputElement) {
                var errorMessage = inputElement.closest('.form-group').find('.form-message');
                // Xử lí trường hợp khi blur khỏi input
                inputElement.blur(function() {
                    validate(inputElement, rule);
                })
                // Xử lí trường hợp oninput
                inputElement.on('input', function() {
                    errorMessage.html('');
                    inputElement.removeClass('invalid');
                })
            }
            // xử lí trường hợp khi submit 
            var btnDK = $('.btn-signUp');
            btnDK.click(function(e) {
                e.preventDefault();
                validate(inputElement, rule);
            })
            var btnDN = $('.btn-login');
            btnDN.click(function(e) {
                e.preventDefault();
                validate(inputElement, rule);
            })
        })
    }
}
validator.isRequired = function(selector, message) {
    return {
        selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
validator.isFullname = function(selector, message) {
    return {
        selector,
        test: function(value) {
            var regex = /^[A-Z]{1}[a-z]+( [A-Z]{1}[a-z]+)+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng định dạng';
        }
    }
}
validator.isEmailPhone = function(selector, message) {
    return {
        selector,
        test: function(value) {
            var regex = /^([A-Za-z]+[A-Za-z0-9\.-]+@gmail\.com)|(0[3-9]{1}\d{8})$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng định dạng';
        }
    }
}
validator.isPassword = function(selector, message) {
    return {
        selector,
        test: function(value) {
            
            var regex = /^[A-Za-z0-9(!@#$%^&*()_ ]{8,}/;
            return regex.test(value) ? undefined : message || 'Mật khẩu phải chưa kí tự, số, kí tự đặc biệt và trên 8 kí tự';
        }
    }
}
validator.isConfirmPassword = function(selector, getPassword, message) {
    return {
        selector,
        test: function(value) {
            return value === getPassword() ? undefined : 'Mật khẩu nhập lại không chính xác';
        }
    }
}