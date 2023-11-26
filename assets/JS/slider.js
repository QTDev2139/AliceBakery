window.addEventListener('load', function() {
    var slider = $('.slider');
    var sliderPrev = $('.slider-prev');
    var sliderNext = $('.slider-next');
    var sliderDots = $('.slider-dots');
    var sliderDotItems = $('.slider-dots').find('.slider-dot-item');
    var sliderMain = $('.slider-main');
    var sliderItem = $('.slider-main').find('.slider-item'); 
    var sliderContent = $('.slider-content');
    var sliderItemWidth = sliderItem[0].offsetWidth;
    var sliderLength = sliderItem.length;
    
    sliderNext.on('click', function() {
        handleChange(1);
        // sliderDotItems.each(function(sliderDotIndex) {
        //     sliderDotItems.removeClass('active');
        //     sliderDotItems.eq(sliderDotIndex).addClass('active');
        // })
        
    })
    sliderPrev.on('click', function() {
        handleChange(0);
    })

    var index = 0;
    var positionX = 0;

    // xử lí Next & Prev
    function handleChange(direction) {
        if (direction === 1) {
            nextSLider();
        } else if (direction === 0) {
            if (index <= 0) {
                positionX = -sliderItemWidth*(sliderLength);
                index = sliderLength;
            }
            positionX += sliderItemWidth;
            sliderMain.css('left', positionX + 'px');
            index --;
            sliderDotItems.removeClass('active');
            sliderDotItems.eq(index).addClass('active');
        } else {
            undefined;
        }
    }

    // Click dotsItem
    sliderDotItems.each(function(sliderDotIndex) {
        $(this).on('click', function() {
            positionX = -sliderItemWidth*sliderDotIndex;
            sliderDotItems.removeClass('active');
            $(this).addClass('active');
            sliderMain.css('left', positionX + 'px');
        })
    })

    // setInterval
    function nextSLider() {
        if (index >= sliderLength - 1) {
            positionX = sliderItemWidth;
            index = -1;
        }
        positionX -= sliderItemWidth;
        sliderMain.css('left', positionX + 'px');
        index ++;
        sliderDotItems.removeClass('active');
        sliderDotItems.eq(index).addClass('active');
    }

    this.setInterval(nextSLider, 5000);

})

// Select elements with class 'parent' that contain at least one element with class 'child'
console.log($('.parent:has(.child)'))