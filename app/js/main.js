$(function () {


    $(".cards-side__title").on("click",function(){
        let is_active = false;
        
       if( $(this).hasClass('cards-side__title--active') ){ is_active = true; }
        
       $(this).removeClass('cards-side__title--active');
       
     if(!is_active){  $(this).addClass('cards-side__title--active');  }
    
    
        });
})
