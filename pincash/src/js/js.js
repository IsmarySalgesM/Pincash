function showForm() {
    $('.overlay').addClass('active');
    $('.slideUpForm').addClass('active');
  }
  
  function hideForm() {
    $('.slideUpForm').removeClass('active');
    $('.overlay').removeClass('active');
    
  }
  
  $('.showForm').click(function () {
    showForm();
  });
  
  $('.close').click(function () {
    hideForm();
  });