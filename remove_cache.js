// Remover cache no botão de retorno
// https://web.dev/bfcache/

window.addEventListener('pageshow', event => {
  if (event.persisted) {
     // Recarregar pagina
     location.reload();
  }
 });
