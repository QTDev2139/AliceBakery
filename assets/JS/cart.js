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

})