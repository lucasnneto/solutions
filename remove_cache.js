// Remover cache do botão de retorno
// https://web.dev/bfcache/

window.addEventListener('pageshow', event => {
  if (event.persisted) {
     location.reload();
  }
 });
