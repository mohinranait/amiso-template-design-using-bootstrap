$(document).ready(function(){
    var doc = document;
    var logo =  $('#logo');
    $(window).scroll(function(){
        if ( window.pageYOffset >= 150) {
            $('.header-middle').addClass('sticky')
            logo.attr('src', "./assets/images/logo/logo-2.png")
            $('.align').css({display:'none'});
        }else{
            $('.header-middle').removeClass('sticky')
            logo.attr('src', "./assets/images/logo/logo.png")
            $('.align').css({display:'block'});
        }
    })


    // Search Pupup show
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.search-popup').addClass('active');
    })

    // Search Pupup hide
    $('.search-popup').click(function(e){
        if( e.target.className.includes('searchDiv') || e.target.className.includes('closePopup')){
            $('.search-popup').removeClass('active');
        }
    });

    if( window.innerWidth <= 1024 ){
        (function(){
            let mobileMenu = doc.querySelector('.nav-menu');
            let mobileHeader = doc.createElement('div');
            mobileHeader.className = 'mobile-header'
            let getLogo = logo.attr('src');
            let createLogo = doc.createElement('img');
            createLogo.setAttribute( "src", getLogo )
            createLogo.setAttribute( "alt", getLogo )
            createLogo.className = 'mobile-logo';
            let closeIcon = doc.createElement('i');
            closeIcon.classList.add('fas','fa-times','toggleMenuClose');
            let closeBtn = doc.createElement('button');
            closeBtn.className = 'navClsBtn';
            closeBtn.append(closeIcon)

            mobileHeader.append(createLogo,closeBtn)
            mobileMenu.insertAdjacentElement('afterbegin', mobileHeader)
        })();
    }

    $('.mobile-header').click(function(e){
        e.preventDefault();
        if( e.target.className.includes('navClsBtn')){
            $('.windowOverlay').removeClass('active')
            $('.nav-menu').toggleClass('active')
        }
    })

    $('.humber').click(function(e){
        e.preventDefault();
        $('.nav-menu').toggleClass('active')
        $('.windowOverlay').addClass('active')
    })

    $('.arrIcon').click(function(e){
        $(this).parent('a').next('.dropdown-wrap').slideToggle('slow')
    })
})