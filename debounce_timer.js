// Função para aguardar resposta que são sincronas de maneiras async

function waitUntil(callback, tick = 50, attempts = 3) {
  let interval;
  let step = 1;
 return new Promise((resolve, reject) => {
  interval = setInterval(() => {
    console.log(step)
      if (step === attempts) {
        clearInterval(interval);
        reject("Tentativas máximas alcançadas");
      }
      callback((params)=>{
        resolve(params);
        clearInterval(interval);
      });
      step += 1;
    }, tick);
  });
}
waitUntil((resolve) => {
  resolve('e');
}).then((resultado) => {
  console.log('Resultado alcançado:', resultado);
}).catch((erro) => {
  console.error('Erro:', erro);
});