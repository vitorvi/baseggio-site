anchorButtons = [].slice.call(document.querySelectorAll('[data-anchor-target]'));

anchorButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    let targetAnchor = event.target.getAttribute('data-anchor-target');
    if (targetAnchor == 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      let targetElement = document.querySelector(targetAnchor);
      if (targetElement !== null) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});
