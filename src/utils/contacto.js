export const WHATSAPP_NUMERO = '573150399322';

export const MENSAJE_COTIZACION =
  '¡Hola! Estoy interesad@ en una cotización personalizada para mi proyecto digital. ¿Podemos hablar? 😊';

export const whatsappUrl = (mensaje = MENSAJE_COTIZACION) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
