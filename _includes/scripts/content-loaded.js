document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.getElementById('wrapper');
  setTimeout(function() {
    wrapper.classList.add('ready');
  }, 200);
});
