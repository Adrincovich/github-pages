window.addEventListener("load", ()=> {
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const arrayForm = [name, surname, email, pass, telefono, direccion]


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (estadoValidaciones.name &&
            estadoValidaciones.surname &&
            estadoValidaciones.email &&
            estadoValidaciones.pass &&
            estadoValidaciones.telefono &&
            estadoValidaciones.direccion){
                name.value = "";
                surname.value = "";
                email.value = "";
                pass.value = "";
                telefono.value = "";
                direccion.value = "";
                estadoValidaciones.name = false;
                estadoValidaciones.surname = false;
                estadoValidaciones.email = false;
                estadoValidaciones.pass = false;
                estadoValidaciones.telefono = false;
                estadoValidaciones.direccion = false;
                alert("Enviado exitosamente");
        }else {
            alert("No enviado, verificar campos")
        }
    });

    const estadoValidaciones = {
        name: false,
        surname: false,
        email: false,
        pass: false,
        telefono: false,
        direccion: false,
    }


    name.addEventListener("blur", function () {
        if (name.value == ""){
            validaFalla(name, "")
            estadoValidaciones.name = false
        }else if (name.value.length < 3 ){
            validaFalla(name, "Ingrese mas de 3 digitos")
            estadoValidaciones.name = false
        }else {
            validaOk(name, "");
            estadoValidaciones.name = true
        }
    })

    name.addEventListener("focus", function (){
        validaOk(name, "")
    })

    surname.addEventListener("blur", function () {
        if (surname.value == ""){
            validaFalla(surname, "")
            estadoValidaciones.surname = false
        }else if (surname.value.length < 3 ){
            validaFalla(surname, "Ingrese mas de 3 digitos")
            estadoValidaciones.surname = false
        }else {
            validaOk(surname, "")
            estadoValidaciones.surname = true
        }
    })

    surname.addEventListener("focus", function (){
        validaOk(surname, "")
    })

    email.addEventListener("blur", function () {
        if (email.value == ""){
            validaFalla(email, "")
            estadoValidaciones.email = false
        }else if (!validaEmail(email.value)){
            validaFalla(email, "El e-mail no es valido")
            estadoValidaciones.email = false
        }else {
            validaOk(email, "")
            estadoValidaciones.email = true
        }
    })

    email.addEventListener("focus", function (){
        validaOk(email, "")
    })

    pass.addEventListener("blur", function () {
        if (pass.value == ""){
            validaFalla(pass, "")
            estadoValidaciones.pass = false
        }else if (!validaPass(pass.value)){
            validaFalla(pass, "Ingresar al menos 8 caracteres, letras y numeros")
            estadoValidaciones.pass = false
        }else {
            validaOk(pass, "")
            estadoValidaciones.pass = true
        }
    })

    pass.addEventListener("focus", function (){
        validaOk(pass, "")
    })

    telefono.addEventListener("blur", function () {
        if (telefono.value == ""){
            validaFalla(telefono, "")
            estadoValidaciones.telefono = false
        }else if (!validaTel(telefono.value)){
            validaFalla(telefono, "Ingresar solo numeros, mínimo 7")
            estadoValidaciones.telefono = false
        }else {
            validaOk(telefono, "")
            estadoValidaciones.telefono = true
        }
    })

    telefono.addEventListener("focus", function (){
        validaOk(telefono, "")
    })

    direccion.addEventListener("blur", function () {
       if (direccion.value == ""){
            validaFalla(direccion, "")
            estadoValidaciones.direccion = false
        }else if (!validaDir(direccion.value) && direccion.value.length >= 1){
            validaFalla(direccion, "Caracteres invalidos, ingresar letras y numeros")
            estadoValidaciones.direccion = false
        }else if (direccion.value.length < 4 && direccion.value.length >= 1){
            validaFalla(direccion, "Ingrese al menos 5 digitos")
            estadoValidaciones.direccion = false
        }else {
            validaOk(direccion, "")
            estadoValidaciones.direccion = true
        }
    })

    direccion.addEventListener("focus", function (){
        validaOk(direccion, "")
    })


    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText = msje

        formControl.className = "fieldset falla"
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText = msje

        formControl.className = 'form-control ok'
    }

        /*Expresiones regulares*/

    const validaEmail = (email) => {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    }

    const validaPass = (pass) => {
        return /^.[a-z0-9]{8,999}$/.test(pass);
    }

    const validaTel = (telefono) => {
        return /^\d{7,14}$/.test(telefono);
    }

    const validaDir = (direccion) => {
        return /^[A-Za-z0-9\s]+$/g.test(direccion)
    }

})