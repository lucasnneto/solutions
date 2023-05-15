//Função para inserir mascara em CPF
// ex.: 01234567890 -> 012.345.678-90
function maskCPF(value: string) {
  if (!value) return;
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}
