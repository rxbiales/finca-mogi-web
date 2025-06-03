# Proyecto Finca-Mogi-Web – Guía resumida

## Requisitos previos

- Git
- Node.js (versión 14 o superior)
- Yarn
- PHP (versión 7 o superior)
- Composer *(solo si se usará el envío de formularios)*

## Pasos para instalar y ejecutar el proyecto

1. Clona el repositorio y entra en la carpeta principal del proyecto.

2. **Front-end**  
   - Entra en la carpeta correspondiente.  
   - Instala las dependencias con Yarn.

3. **Back-end**  
   - Entra en la carpeta `Back-end/api`.  
   - Si solo vas a ver datos, Composer no es necesario.  
   - Si vas a usar el envío de formularios, instala las dependencias con Composer.

4. **Puertos por defecto**  
   - Front-end: `http://localhost:3000`  
   - Back-end: `http://localhost:8001`  
   Asegúrate de que esos puertos estén libres o cámbialos si es necesario.

5. **Ejecución**  
   - Abre dos terminales:  
     - Una para levantar el servidor del Front-end y acceder desde el navegador.  
     - Otra para iniciar el servidor PHP y exponer la API.

6. **Verificación**  
   - Comprueba que la interfaz carga sin errores.  
   - Cambia el idioma y confirma que las traducciones se cargan correctamente.  
   - Si vas a probar el formulario, asegúrate de haber instalado Composer.

## Consejos adicionales

- Asegúrate de que las rutas de traducción coincidan con la estructura del proyecto.
- Si usas puertos distintos, verifica que el Back-end permita peticiones CORS.
- Si el proyecto utiliza variables de entorno, copia el archivo `.env.example` como `.env` y ajústalo antes de instalar con Composer.

## Despliegue en producción

- **Front-end:** Genera la carpeta `build`.
- **Back-end:** Sube la carpeta `Back-end/api` a un servidor real (Apache, Nginx o similar).
- Ajusta las rutas en el Front-end para que apunten al dominio o ruta correspondiente.

## Resumen rápido

1. Clona el repositorio y entra en la carpeta principal.  
2. Instala las dependencias del Front-end.  
3. *(Opcional)* Instala las dependencias del Back-end si vas a usar formularios.  
4. Levanta el Front-end y abre en el navegador.  
5. Levanta el Back-end y verifica que responde correctamente.
