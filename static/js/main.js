$( document ).ready(function() {
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