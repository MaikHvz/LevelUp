(function(){
    const form = document.getElementById('contactForm');
    const alert = document.getElementById('alerta');

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');

    const mensaje = document.getElementById('mensaje');

    function setOk(el){
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
    }

    function setError(el, msg){
        el.classList.remove('is-valid');
        el.classList.add('is-invalid');
        const fb = el.parentElement.querySelector('.invalid-feedback');
        if(fb && msg) fb.textContent = msg;
    }

    function validarNombre(){
        const v = nombre.value.trim();
        if(v.length < 3){setError(nombre, 'El nombre debe tener al menos 3 caracteres.'); return false;}
        setOk(nombre); return true;
    }

    function validarCorreo(){
        const v = correo.value.trim();
        const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      // [^\s@]+ -> significa que será uno o más caracteres que no sean espacio o @
        if (!rx.test(v)){setError(correo, 'Ingrese un correo válido (ej: nombre@dominio.cl).'); return false;}
        setOk(correo); return true;
    }


    function validarMensaje(){
        const v = mensaje.value.trim();
        if(v.length < 20){setError(mensaje, 'El mensaje debe terner al menos 20 caracteres.'); return false;}
        setOk(mensaje); return true;
    }

    //mensajes en tiempo real
    nombre.addEventListener('input', validarNombre);
    correo.addEventListener('input', validarCorreo);
    mensaje.addEventListener('input', validarMensaje);

    
    //Manejo del envío de formulario
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alerta.innerHTML = '';

        const ok =
        validarNombre() &
        validarCorreo() & 
        validarMensaje();

        //Así siempre se ejecutan todas y ok será true solo si todas pasan.
        //const ok = [validarNombre(), validarCorreo(), validarTipo(), validarMensaje()].every(Boolean);


        if (ok){
            alerta.innerHTML = `
      <div class="alert alert-success" role="alert">
        ¡Mensaje enviado con éxito! Te contactaremos pronto.
      </div>`;
        } else{
            alerta.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Error, revisa los campos marcados en rojo.
      </div>`;
            const firstInvalid = form.querySelector('.is-invalid');
            if(firstInvalid)firstInvalid.focus();
        }
    });


}());