// contacto.js

// Se encarga de mostrar el toast con el mensaje que recibas
function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  // Después de 3 segundos, oculta el toast
  setTimeout(() => t.classList.remove("show"), 3000);
}

// Función que valida el formulario y luego lo envía
export default function handleForm() {
  const form = document.getElementById("contactForm");
  const contErrores = document.getElementById("errores");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Si hay errores, evitamos enviar

    const errores = [];
    const nombre  = this.nombre.value.trim();
    const email   = this.email.value.trim();
    const mensaje = this.mensaje.value.trim();

    // Regex para nombre: solo letras (incluye tildes y ñ), espacios, mínimo 2 caracteres
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/;
    if (!regexNombre.test(nombre)) {
      errores.push("El nombre debe tener al menos 2 letras y solo contener letras y espacios.");
    }

    // Regex para email estándar
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      errores.push("Ingresa un correo válido.");
    }

    // Regex para mensaje: mínimo 7 caracteres
    const regexMensaje = /^.{7,}$/;
    if (!regexMensaje.test(mensaje)) {
      errores.push("El mensaje debe tener al menos 7 caracteres.");
    }

    // Si hay errores, los mostramos y detenemos
    if (errores.length) {
      contErrores.innerHTML = errores.join("<br>");
      return;
    }

    // Limpia errores en caso de pasar la validación
    contErrores.innerHTML = "";

    // Prepara los datos para enviarlos al backend
    const data = { nombre, email, mensaje };

    try {
      const res = await fetch("http://localhost:8001/contacto.php", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        showToast("✅ Mensaje enviado correctamente");
        this.reset();
      } else {
        showToast("❌ " + (json.error || "Error al enviar"));
      }
    } catch (err) {
      console.error(err);
      showToast("❌ No se pudo conectar con el servidor");
    }
  });
}

// Llamamos a la función para activar la validación y el envío
handleForm();