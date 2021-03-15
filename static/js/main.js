$( document ).ready(function() {

    var html = $("html");

    $('.us-products-button').on('click', function(event){
            event.preventDefault();
            html.animate({scrollTop: $("#our_products").offset().top - 30}, '800');
    });

    $('.contact_us_button').on('click', function(event){
            event.preventDefault();
            html.animate({scrollTop: $("#contact_us").offset().top - 30}, '800');
    });
    
    contact_us

    $('.search-btn').on('click', function(){
        $('.search-input').toogleClass('active');
    });

    $('.toggle-detail').on('click', function(){
    	console.log('hi there')
    	$(this).next().toggleClass('active');

    });
    $('.close-detail').on('click', function(){
    	console.log('hi there')
    	$(this).parent().toggleClass('active');

    });
});