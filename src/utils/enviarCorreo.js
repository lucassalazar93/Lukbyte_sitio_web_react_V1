// utils/enviarCorreo.js

export const enviarCorreoConfirmacion = async ({
  nombre,
  email,
  numero,
  servicio,
  negocio,
  fecha,
  hora,
}) => {
  try {
    const response = await fetch('http://localhost:5000/api/enviar-correo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre,
        email,
        numero,
        servicio,
        negocio,
        fecha,
        hora,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Correo enviado con éxito.');
    } else {
      console.error('❌ Error al enviar correo:', result.error);
    }
  } catch (error) {
    console.error('❌ Error de conexión al backend:', error);
  }
};
