function enviarEmailConInfoBoda(inputNombre, inputEmail, inputMensaje) {
    Email.send({
        SecureToken : "f20be077-9156-4099-9eb4-db451b136134",
        To : "p4pupro@gmail.com",
        From : "mitaymito123@gmail.com",
        Subject : "Contactandome desde Portfolio",
        Body : "Usuario: " + inputNombre + " con email: " + inputEmail + `<br>` + "Mensaje: " +  inputMensaje
    }).then(
      message => console.log(message)
    );
}