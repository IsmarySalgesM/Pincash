// Modal
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
    document.getElementById('slideUp').style.display= 'block';
  });
  
  $('.close').click(function () {
    hideForm();
    
  });


// Modal Reclamo
function cerrar(){
  // document.getElementById('slideUp').style.display= 'none';
  location = './mapa.html'
}

const addButtonTrigger = (el) => {
	el.addEventListener('click', () => {
		const popupEl = document.querySelector(`.${el.dataset.for}`);
		popupEl.classList.toggle('popup--visible');
	});
};
Array.from(document.querySelectorAll('button[data-for]'))
           .forEach(addButtonTrigger); 
// Close Modal
