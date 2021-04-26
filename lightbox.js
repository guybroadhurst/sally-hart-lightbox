$('.photos a').on('click', function() {
  var image = $(this).html()
  $('.modal-content').html(image)
  $('.modal').fadeIn(500)
  return false
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)
  return false
})
