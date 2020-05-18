//Underline text if click
$('ul').on('click','li', function(){
  $(this).toggleClass('done');
})
//show button
$('#ico').on('click', function(){
  $('#inputDiv').slideToggle(300, function(){
    $('#ico').toggleClass('fa-plus fa-minus');
    $('span').fadeToggle(200)
  });
});
//delete text
$('ul').on('click', 'i' ,function(event){
  event.stopPropagation();
  $(this).parent().parent().slideUp('500', function(){
    $(this).remove();
  })
})
//enter todo
$('input').on('keyup', function(e){
  if(e.which === 13){
    var inpt = $(this).val();
    $(this).val('');
    var lis = '<li>'+inpt+ '<span><i class="fas fa-trash"></i></span></li>';
    $('ul').append(lis);
  }
});
