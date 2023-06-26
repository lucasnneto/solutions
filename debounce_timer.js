// Função para aguardar resposta que são sincronas de maneiras async

function waitUntil(callback, tick = 50, attempts = 10) {
  let interval;
  let step = 0;
  await new Promise((resolve, reject) => {
    inteval = setInterval(() => {
      if (step === attempts) {
        clearInterval(interval);
        reject("Tentativas máximas alcançadas");
      }
      callback((params)=>{
        clearInterval(interval);
        resolve(params);
      });
      step += 1;
    }, tick);
  });
  clearInterval(interval);
}
