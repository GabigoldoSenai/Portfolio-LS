const emailCopy = document.getElementById('btn-email');
const textoParaCopiar = document.getElementById('textoParaCopiar');

emailCopy.addEventListener('click', function() {

  const textArea = document.createElement('textarea')
  textArea.value = textoParaCopiar.textContent
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)

  emailCopy.classList.add("active");
            emailCopy.classList().removeAllRanges();
            setTimeout(function(){
                emailCopy.classList.remove("active");
            }, 2500);
  


});
