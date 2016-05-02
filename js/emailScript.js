function sendEmail() {
   var c_name = document.getElementById("nameInput").value;
   var c_email = document.getElementById("emailInput").value;
   var c_subject = document.getElementById("subjectInput").value;
   var msgContent = document.getElementById('message').value;
   var http = new XMLHttpRequest();


  var errorMsg = document.getElementById('errorMessage');

   if (c_name === '' || c_email === '' || c_subject === '' || msgContent === '') {
     errorMessage.innerHTML = "<p style='color: red'>Um dos campos acima não está preenchido corretamente.</p><p style='color: red; font-size: 20px;'>Some fields above aren't filled right.</p>";
   }
   else{
     errorMessage.innerHTML = "<p style='color: #fff;'>Email enviado com sucesso!</p><p style='color: #fff;'>Email succesfully sent!</p>";
   }

   http.onload = function() {
     alert("Oi")
   }
 };

 function subscribe(){
   var emailAddress = document.getElementById('emailNewsletterInput').value;
   var consoleSpace = document.getElementById('nlConsole');

   if(emailAddress != ''){
     consoleSpace.innerHTML = "<p style='color: #fff;'>Inscrição realizada com sucesso.</p><p style='color: #fff;'>Subscription sucessfully made.</p>"
   }
   else {
     consoleSpace.innerHTML = "<p style='color: red;'>Informe um endereço de email.</p> <p style='color: red; font-size: 20px;'>Inform an email address.</p>"
   }

 };
