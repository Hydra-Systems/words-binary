module.exports = function (str) {
  // Normaliza a string
  let normalized_str = str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/ /gm, '');
  
  // Variavel que irá guardar o resultado
  let result = "";

  // Itera sobre o normalized-str
  for(let i = 0; i < normalized_str.length; i++) {
    let binaryChar = normalized_str.charCodeAt(i).toString(2);
    result += binaryChar.length  === 8 ? binaryChar : '0'.repeat( 8 - binaryChar.length) + binaryChar;
  }

  // Retorna o resultado
  return result;
}