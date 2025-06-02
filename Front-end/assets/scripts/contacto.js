export default function handleForm() {
  document.getElementById("contactForm")
    .addEventListener("submit", async function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = {
        nombre:  formData.get("nombre"),
        email:   formData.get("email"),
        mensaje: formData.get("mensaje"),
      };

      try {
        const res = await fetch("http://localhost:8001/contacto.php", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(data),
        });
        const json = await res.json();

        if (res.ok) {
          alert("✅ Mensaje enviado correctamente");
          this.reset();
        } else {
          alert("❌ " + (json.error || "Error al enviar"));
        }
      } catch (err) {
        console.error(err);
        alert("❌ No se pudo conectar con el servidor");
      }
    });
}

handleForm();
