$(function () {
  $('.cards-side__title').on('click', function () {
    let is_active = false

    if ($(this).hasClass('cards-side__title--active')) {
      is_active = true
    }

    $(this).removeClass('cards-side__title--active')

    if (!is_active) {
      $(this).addClass('cards-side__title--active');
    }
    // $(this).toggle()
    
   
  })
  // $('.btn-show').on('click',function(){
  //   $('.cards-side__hidden').toggle()
  // })

  $( "#slider-range" ).slider({
    range: true,
    min: 43,
    max: 68,
    values: [ 43, 68 ],
    slide: function( event, ui ) {
      $( "#amount1" ).text( "€" + ui.values[ 0 ]+"K")
      $("#amount2").text( "€" + ui.values[ 1 ] +"K");
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  

})
