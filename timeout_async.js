// Função para deixar timeout async

function timeoutAsync(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
