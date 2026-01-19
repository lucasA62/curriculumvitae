document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.dataset.modal;
    document.getElementById(modalId).style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});