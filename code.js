const ctaBtn = document.getElementById('cta-button')
const modalBg = document.querySelector('.modal-bg')

const submitBtn = document.getElementById('submit-button')
const closeModalBtn = document.getElementById('closeModal')

ctaBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active')
})
closeModalBtn.addEventListener('click', function() {
    modalBg.classList.remove('bg-active')
})

submitBtn.addEventListener('click', function() {
    Swal.fire({
        title: 'Great!',
        text: 'You will be contacted in the next 24 hours ',
        icon: 'success',
        confirmButtonText: 'OK'
      })
})