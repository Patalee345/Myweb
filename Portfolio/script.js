form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submission successful');
      } else {
        console.error('Form submission failed. Status: ' + response.status);
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  });