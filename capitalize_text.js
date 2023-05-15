//Capitalizar palavras, mantendo artigos definidos (a,e,o)
// e conjunções (da,de,do) no minusculo. ex.: código do joão -> Código do João

function capitalizeText(value: string) {
  return value
    .split(" ")
    .map((el) =>
      ["e", "a", "o", "da", "de", "do"].includes(el)
        ? el.toLowerCase()
        : el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()
    )
    .join(" ");
}
