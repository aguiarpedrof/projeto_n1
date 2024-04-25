window.onload = function() {
    document.getElementById("buttonEnviar").onclick = function Enviar(){
        //pega e imprime nome
        const nomeImput = document.getElementById("nameCli");
        console.log(nomeImput.value);
        const nomeh1 = document.getElementById("nomeUsuario");
        nomeh1.innerText = "Nome: " + nomeImput.value;
//pega email
        const emailInput = document.getElementById("emailCli");
        console.log(emailInput.value);
        const emailh1 = document.getElementById("emailUsuario");
        emailh1.innerText = "Email: " + emailInput.value;
//pega data
        const dataInput = document.getElementById("dataCli");
        console.log(dataInput.value);
        const datah1 = document.getElementById("dataUsuario");
        datah1.innerText = "Data: " + dataInput.value;
       
      
        
        // Obtém referências aos elementos relevantes
      var servicoUsuario = document.getElementById("servicoUsuario");
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
      // Inicializa uma variável para armazenar o serviço selecionado
      var servicoSelecionado = "";
    
      // Itera sobre as checkboxes para encontrar a que está marcada
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          // Obtém o elemento label associado à checkbox
          var label = checkboxes[i].parentElement.querySelector('label');
          
          // Extrai o texto do label (que inclui o nome e o preço do serviço)
          servicoSelecionado = label.textContent; 
          break; // Sai do loop pois encontramos a opção selecionada
        }
      }
    
      // Exibe o serviço selecionado no elemento com id "servicoUsuario"
      if (servicoSelecionado) {
        servicoUsuario.textContent = "Serviço: " + servicoSelecionado;
      } else {
        servicoUsuario.textContent = "Serviço: Nenhum serviço selecionado";
      }
          }
  
}
    



      
