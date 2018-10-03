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
  });
  
  $('.close').click(function () {
    hideForm();
  });


// Modal Reclamo

const addButtonTrigger = (el) => {
	el.addEventListener('click', () => {
		const popupEl = document.querySelector(`.${el.dataset.for}`);
		popupEl.classList.toggle('popup--visible');
	});
};
Array.from(document.querySelectorAll('button[data-for]'))
           .forEach(addButtonTrigger); 