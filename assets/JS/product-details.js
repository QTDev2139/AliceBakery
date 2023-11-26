$(document).ready(function() {

    var productDetails = JSON.parse(localStorage.getItem('product-details'));

    var removeDot = productDetails[0].priceProduct.replace(/\./g, '');
    $('.container-body').html(`
            <div class="breadcrumb">
                <div class="breadcrumb-overlay"></div>
                <div class="breadcrumb-content">
                    <div class="breadcrumb-title">
                        <h3 style="text-transform: uppercase;">${productDetails[0].nameProduct}</h3>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="product-left">
                            <div class="product-details__img">
                                <img src="${productDetails[0].imgProduct}" alt="">
                            </div>
                            <a href="${productDetails[0].imgProduct}" class="product-details__img-blank" target="_blank">
                                <img src="${productDetails[0].imgProduct}" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="product-right">
                            <div class="product-details__name">${productDetails[0].nameProduct}</div>
                            <div class="product-details__linePrice">
                                <span>Giá</span>
                                <span class="product-details__price" priceCurrent="${removeDot}">${productDetails[0].priceProduct}</span>
                                <span class="product-details__tailPart">₫</span>
                            </div>
                            <div class="product-details__lineSize">
                                <div class="size-name">Kích thước</div>
                                <div class="list-size">
                                    <div class="size active" data-index="1">19cm</div>
                                    <div class="size" data-index="2">21cm</div>
                                    <div class="size" data-index="3">23cm</div>
                                    <div class="size" data-index="4">25cm</div>
                                </div>
                            </div>
                            <div class="product-details__lineQuantity">
                                <div class="quantity-name">Số lượng:</div>
                                <div class="quantity-group">
                                    <div class="qtt-item quantity-minus">-</div>
                                    <div class="qtt-item quantity-number">1</div>
                                    <div class="qtt-item quantity-plus">+</div>
                                </div>
                            </div>
                            <div class="product-details__action">
                                <button class="addCart" type="submit">THÊM VÀO GIỎ HÀNG</button>
                                <!--Success  -->
                                <div class="success-btn"> </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="content-2">
                    <div class="product-tabs">
                        <div class="tab">
                            <div class="tablink active">MÔ TẢ CHUNG</div>
                            <div class="tablink">DÁNH GIÁ</div>
                        </div>
                        <div class="product-tab-content ">
                            <div class="tab-content active">
                                <p>Thành phần chính: </p>
                                <span>
                                    - Gato <br>
                                    - Kem tươi vị rượu rum <br>
                                    - Hoa quả <br> 
                                    - Dừa khô. <br>
                                </span>
                            </div>
                            <div class="tab-content ">
                                <h4 class="tab-content-header">0 comment</h4>
                                <div class="tab-content-body">
                                    <i class="fa-solid fa-user user-cm"></i>
                                    <input type="text" class="form-control" placeholder="Add comment ...">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-3">
                    <div class="title d-flex">
                        <h3 class="content-icon">───   </h3>
                        <h3 class="content-title">SẢN PHẨM TƯƠNG TỰ</h3>
                        <h3 class="content-icon">───   </h3>
                    </div>
                    <div class="row"></div>
                </div>
            </div>     
            `)
    
    const apps = {
        products: [
            {
                img: "../IMG/Product/kt07.webp",
                name: "Bánh Tiramisu (Tiramisu Cake)",
                price: "355.000",
            },
            {
                img: "../IMG/Product/m07.webp",
                name: "Caramel Coconut Cake Mousse Vuông",
                price: "420.000",
            },
            {
                img: "../IMG/Product/kt11.webp",
                name: "Bánh Caramel Moist (Caramel Moist Cake)",
                price: "360.000",
            },
            {
                img: "../IMG/Product/m05.webp",
                name: "Passion Cake Mousse Vuông",
                price: "420.000",
            },

        ],
        render: function() {
            const htmls = this.products.map((product, index) => {
                return `
                    <div class="col-lg-3 col-md-6">
                        <a href="./chi-tiet-sp.html" class="home-product-item" data-index = "${index}">
                            <div class="product-item__img">
                                <img src="${product.img}" alt="">
                            </div>
                            <h4 class="product-item__name">
                                ${product.name}
                            </h4>
                            <div class="product-item__price">
                                <span>${product.price} </span>
                                <span class="product-item__currencySymbol">₫</span>
                            </div>
                            <button class="product-item__buy">Buy Now</button>
                        </a>
                    </div>`
                    
            });
            $('.content-3 .row').html(htmls.join(''));
        }
    }
    apps.render();
    $('.home-product-item').each(function(product) {
        $(this).click(function() {
            count = $(this).attr('data-index');
            const productDetails = []
            productDetails.push({
                nameProduct : apps.products[count].name,
                imgProduct : apps.products[count].img,
                priceProduct : apps.products[count].price,
            }) 
            localStorage.setItem('product-details', JSON.stringify(productDetails))
        })
    })

    // Xử lý khi đưa vào thanh toán
    $('.addCart').click(function() {
        const listProduct = localStorage.getItem('productCarts') ? JSON.parse(localStorage.getItem('productCarts')) : [] ;
        listProduct.push({
            productName: $('.product-details__name').text(),
            productIMG: $('.product-details__img img').attr('src'),
            productPrice: $('.product-details__price').text(),
            productSize: $('.size.active').text(),
            productNumber: $('.quantity-number').text(),
        })
        localStorage.setItem('productCarts', JSON.stringify(listProduct));
    })

    // xử lí khi add vào giỏ hàng
    $('.addCart').click(function() {
        $('.success-btn').append(`
            <div class="success">
                <i class="fa-solid fa-circle-check"></i>
                <p>Đã thêm vào giỏ</p>
            </div>
        `);
        setTimeout(function() {
            $('.success-btn').empty();
        }, 3800);
    })

    
})