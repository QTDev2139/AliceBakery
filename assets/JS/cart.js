$(document).ready(function() {
    const productCarts = JSON.parse(localStorage.getItem('productCarts'))
    productCarts.map(function(product, index) {
        const removeDot = product.productPrice.replace(/\./g, '');
        $('#tableList').append(
            `<tr>
                <td>
                    <div class="img-product">
                        <img src=${product.productIMG} alt="">
                    </div>
                </td>
                <td>
                    <div class="form-name">
                        <h4 class="name-product">${product.productName}</h4>
                        <div class="size">${product.productSize}</div>
                        <div class="delete">Xóa</div>
                    </div>
                </td>
                <td>
                    <span class="product-details__price" priceCurrent="${removeDot}">${product.productPrice}</span>
                    <span class="product-details__tailPart">₫</span>
                </td>
                <td width="200px">
                    <div class="quantity-group" style="margin: 0;">
                        <div class="qtt-item quantity-minus">-</div>
                        <div class="qtt-item quantity-number">${product.productNumber}</div>
                        <div class="qtt-item quantity-plus">+</div>
                    </div>
                </td>
                <td width="240px">
                    <span class="subtotal">0</span>
                    <span class="product-details__tailPart">₫</span>
                </td>
            </tr>`
        ) 
        
        
    })

    function ktFullName() {
        let fullname = $('#fullname').val().trim();
        let regex = /^[A-Z]{1}[a-z]+( [A-Z]{1}[a-z]+)+$/;
        let formErr = $('#fullname').closest('td').find('.form-message');
        if(fullname == "") {
            formErr.html('Họ tên không được để trống');
            formErr.focus();
            return false;
        } else if (regex.test(fullname)) {
            formErr.html('*');
            return true;
        } else {
            formErr.html('Họ tên phải từ 2 từ và mổi ký tự đầu phải viết hoa');
            formErr.focus();
            return false;
        }
    
    }
    $('#fullname').blur(function () {
        ktFullName();
    })
    
    function ktSDT() {
        let number = $('#phonenumber').val().trim();
        let regex = /^0[3-9]\d{8}$/;
        let formErr = $('#phonenumber').closest('td').find('.form-message');
        if(number == "") {
            formErr.html('Số điện thoại không được để trống');
            formErr.focus();
            return false;
        } else if (regex.test(number)) {
            formErr.html('*');
            return true;
        } else {
            formErr.html('Số điện thoại phải bắt đầu là 0[3-9] và đủ 10 kí tự')
            formErr.focus()
            return false;
        }
    }
    $('#phonenumber').blur(function() {
        ktSDT();
    })
    
    function ktAddres() {
        let address = $('#address').val().trim();
        let formErr = $('#address').closest('td').find('.form-message');
        if(address == "") {
            formErr.html('Địa chỉ không được để trống');
            formErr.focus();
            return false;
        } else  {
            formErr.html('*');
            return true;
        }
    }
    $('#address').blur(function() {
        ktAddres();
    })
 
    
    let count = 0;
    $('#saveInfo').click(function(e) {
        e.preventDefault();
        if(ktFullName() && ktSDT() && ktAddres()) {
            let name = $('#fullname').val();
            let sex = $("input[name='radioName']:checked").val();
            let sdt = $("#phonenumber").val();
            let httt = $('#sl').val();
            let address = $("#address").val();
            $('#tableDS').append("<tr><td>" + count + "</td><td>" + name + "</td><td>" + sex + "</td><td>"
                                + sdt + "</td><td>" + httt + "</td><td>" + address + "</td><td>"+ "Đang chờ duyệt" + "</td></tr>");
            $('#modalDH').modal('hide');
            count++;
        } else {
            alert("Khong hop le");
        } 
    
    })

})