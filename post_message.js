// Função responsavel pela comunicação entre componentes PAI e FILHO em um contexto de uso iframe

//Componente FILHO (enviar dados)
const TAG = "TAG_COMUNICACAO"
export const enviarMensagem = (
  tipoMensagem,
  dadosMensagem,
) => {
  const message = { value: tipoMensagem, dadosMensagem };
  const payload = { ...message, tag: TAG };

  window.parent.postMessage(payload, "*");
};

//Componente PAI (receber dados)
window.addEventListener('message', event => {
    if (event.data.tag === TAG) {
      console.log(event.data) //.value e .dadosMensagem
    }
  });
