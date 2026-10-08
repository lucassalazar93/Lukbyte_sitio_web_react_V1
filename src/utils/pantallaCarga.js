const MINIMO = 3600; // primera visita de la sesión: la secuencia completa, en ms
const MINIMO_BREVE = 1600; // recargas en la misma sesión: versión corta
const SALIDA = 800; // duración del cierre en hexágono

/* Retira la pantalla de carga de index.html cuando la aplicación ya montó.
   Aunque el sitio cargue al instante, se mantiene el tiempo mínimo para que
   la secuencia alcance a verse. Tocar la pantalla la salta. */
export function retirarPantallaCarga() {
  const carga = document.getElementById('carga');
  if (!carga) {
    document.documentElement.classList.remove('cargando');
    return;
  }
  // En desarrollo React monta dos veces: la retirada se programa una sola
  if (carga.dataset.retirando) return;
  carga.dataset.retirando = '1';

  let minimo = carga.classList.contains('carga--breve') ? MINIMO_BREVE : MINIMO;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) minimo = 0;

  const transcurrido = performance.now() - Number(carga.dataset.inicio || 0);
  let saliendo = false;

  const salir = () => {
    if (saliendo) return;
    saliendo = true;
    carga.classList.add('is-lista');

    setTimeout(() => {
      carga.classList.add('is-saliendo');
      document.documentElement.classList.remove('cargando');
      window.dispatchEvent(new Event('lukbyte:listo'));
      setTimeout(() => carga.remove(), SALIDA + 100);
    }, 220);
  };

  const reloj = setTimeout(salir, Math.max(0, minimo - transcurrido));
  carga.addEventListener(
    'pointerdown',
    () => {
      clearTimeout(reloj);
      salir();
    },
    { once: true }
  );
}
