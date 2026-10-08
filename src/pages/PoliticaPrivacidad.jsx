// src/pages/PoliticaPrivacidad.jsx
import React, { useEffect } from 'react';
import AbejaFlotante from '../components/Panal/AbejaFlotante';
import './terminos.css'; // Reutilizamos el CSS estilizado

export default function PoliticaPrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section terminos-container">
      {/* 🐝 Abeja decorativa animada */}
      <AbejaFlotante className="abeja-fixed" size={64} flip delay={-2} />

      <div className="frame terminos-content">
        <span className="updated">Última actualización: 15 de mayo de 2025</span>
        <h1>Política de Privacidad</h1>

        <h2>1. ¿Quiénes somos?</h2>
        <p>
          Lukbyte es una marca enfocada en soluciones digitales, desarrollo web y branding. Esta
          Política describe cómo protegemos tu información.
        </p>

        <h2>2. Información que recopilamos</h2>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Teléfono de contacto</li>
          <li>Mensajes enviados desde formularios</li>
          <li>Información técnica (IP, navegador, ubicación, cookies)</li>
        </ul>

        <h2>3. ¿Para qué usamos tus datos?</h2>
        <p>Los datos personales son utilizados para:</p>
        <ul>
          <li>Responder solicitudes de contacto o cotización</li>
          <li>Brindar nuestros servicios de forma personalizada</li>
          <li>Enviar boletines o promociones si aceptas recibirlos</li>
          <li>Analizar navegación para mejorar la experiencia</li>
        </ul>

        <h2>4. Seguridad de tus datos</h2>
        <p>
          Implementamos medidas de seguridad físicas, digitales y organizativas para proteger tu
          información frente a accesos no autorizados.
        </p>

        <h2>5. ¿Compartimos tu información?</h2>
        <p>
          No compartimos, vendemos ni alquilamos tu información a terceros, salvo que sea necesario
          para cumplir una obligación legal o técnica (como EmailJS para formularios).
        </p>

        <h2>6. Uso de cookies</h2>
        <p>
          Utilizamos cookies para recopilar datos analíticos y ofrecer una experiencia más
          personalizada. Puedes configurar tu navegador para rechazarlas.
        </p>

        <h2>7. Derechos del usuario</h2>
        <p>Puedes solicitar en cualquier momento:</p>
        <ul>
          <li>Consultar tus datos</li>
          <li>Actualizar o rectificarlos</li>
          <li>Eliminar tu información</li>
          <li>Revocar tu consentimiento</li>
        </ul>
        <p>
          Para ejercer tus derechos, escríbenos a: <strong>contacto@lukbyte.com</strong>
        </p>

        <h2>8. Conservación de datos</h2>
        <p>
          Los datos serán conservados solo mientras sean necesarios para los fines establecidos o
          hasta que el usuario solicite su eliminación.
        </p>

        <h2>9. Enlaces a terceros</h2>
        <p>
          Este sitio puede incluir enlaces a redes sociales u otros sitios. Lukbyte no se hace
          responsable por sus políticas de privacidad. Te invitamos a consultarlas directamente.
        </p>

        <h2>10. Modificaciones a esta política</h2>
        <p>
          Podemos actualizar esta política cuando sea necesario. Notificaremos los cambios
          relevantes a través del sitio web.
        </p>

        <h2>11. Contacto</h2>
        <p>Si tienes dudas o deseas ejercer tus derechos, contáctanos:</p>
        <ul>
          <li>📧 contacto@lukbyte.com</li>
          <li>📱 +57 315 039 9322</li>
          <li>📍 Medellín, Colombia</li>
        </ul>
      </div>
    </section>
  );
}
