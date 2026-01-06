
$('#fullpage').fullpage({
    //options here
    responsiveWidth: 1024,/* breakpoint 1024px */
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: false,
    navigationPosition: 'left', //기본값:right
    showActiveTooltip: true, //기본값:false
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 4) {
            $("#header,#fp-nav").addClass("active");
            /* destination이 2(번구역)에 도달했을 때 active가 실행된다 */
        } else {
            $("#header,#fp-nav").removeClass("active");
        };
        if (destination === 7) {
            $("#fp-nav, #header").fadeOut();
        } else {
            $("#fp-nav, #header").fadeIn();
        };
        if (destination === 1) {
            $(".gnb > li").eq(0).addClass("on").siblings().removeClass("on");
        } else if (destination === 2) {
            $(".gnb > li").eq(1).addClass("on").siblings().removeClass("on");
        } else if (destination === 3) {
            $(".gnb > li").eq(2).addClass("on").siblings().removeClass("on");
        } else if (destination === 4) {
            $(".gnb > li").eq(3).addClass("on").siblings().removeClass("on");
        } else if (destination === 5) {
            $(".gnb > li").eq(4).addClass("on").siblings().removeClass("on");
        } else {
            $(".gnb > li").eq(5).addClass("on").siblings().removeClass("on");
        }
    },
});

function togglePopup(isOpen) {
    const popup = document.getElementById('bannerPopup');
    const popupBody = popup.querySelector('.popup-body');
    
    if (isOpen) {
        popup.style.display = 'block';
        document.body.classList.add('stop-scroll');
        
        if (popupBody) popupBody.scrollTop = 0;
        
        if (window.fullpage_api) {
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
        }
    } else {
        popup.style.display = 'none';
        document.body.classList.remove('stop-scroll');
        
        if (window.fullpage_api) {
            fullpage_api.setAllowScrolling(true);
            fullpage_api.setKeyboardScrolling(true);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popupEl = document.getElementById('bannerPopup');
    
    popupEl.addEventListener('wheel', function(e) {
        e.stopPropagation(); 
    }, { passive: false });

    popupEl.addEventListener('touchmove', function(e) {
        e.stopPropagation(); 
    }, { passive: false });
});