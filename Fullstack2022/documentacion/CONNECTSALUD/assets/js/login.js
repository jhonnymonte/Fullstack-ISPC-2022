function Login() { 
    var usuario = document.getElementById("floatingInput").value; 
    var password = document.getElementById("floatingPassword").value; 
    console.log(usuario);
    console.log(password);
    if (usuario == "usuario@correo.com" && password == "contraseña") { 
        alert("Bienvenido " + usuario);
        window.location.href = "http://wwww.index2.html";
        
    } 
    else if (usuario == "usuario2@correo.com" && password == "contraseña2") { 
        alert("Bienvenido " + usuario);
        window.location.href = "http://wwww.index2.html";
    } 
    else if (usuario == "" && password == "") { 
        alert("Porfavor ingrese, correo y contraseña correctos."); 
    } 
    else{ 
        alert("Porfavor ingrese, correo y contraseña correctos."); 
    } 
} 