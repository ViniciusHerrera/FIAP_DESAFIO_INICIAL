function enviarFormulario() {
  var form = document.getElementById('form');
  var formData = new FormData(form);
  var jsonData = {};

  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  var jsonString = JSON.stringify(jsonData);

  // Enviar o JSON para a API
  fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonString
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta da API:', data);
      alert('Formulário enviado com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    });
}
