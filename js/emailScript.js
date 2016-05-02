 function sendEmail() {
   var c_name = document.getElementById("nameInput").value;
   var c_email = document.getElementById("emailInput").value;
   var c_subject = document.getElementById("subjectInput").value;
   var msgContent = document.getElementById('message').value;
   var http = new XMLHttpRequest();


  var errorMsg = document.getElementById('errorMessage');

   if (c_name === '' || c_email === '' || c_subject === '' || msgContent === '') {
     errorMessage.innerHTML = "<p>Um dos campos acima não está preenchido corretamente.</p><p>Some fields above aren't filled right.</p>";
   }
   else{
     errorMessage.innerHTML = "<p>Email enviado com sucesso!</p><p>Email succesfully sent!</p>";
   }

   http.onload = function {
     alert("Oi")
   }
 }
