// Remover todo tipo de acentuação em palavras ex.: maçã -> maca
function removeAccent(word: string) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
