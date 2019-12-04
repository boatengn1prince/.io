$(function(){
    
    $('.burger-icon').on('click', function(){
        $('.menu').slideToggle();
    });

    $('.menu a').on('click', function(){
        if(this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });
});