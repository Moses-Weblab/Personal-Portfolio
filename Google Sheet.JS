const scriptURL = 'https://script.google.com/macros/s/AKfycbz1Eb5Ph0SdGwsK_WiA2TULm96k4klvdB4csiIGxg4-BEtE6smUDgg4Wwba8Mc6Qcfn/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert('Thank you! your form is submitted successfully.'))
  .then(() => {window.location.reload();})
  .catch(error => console.error('Error!', error.message))
})
