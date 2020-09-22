module.exports = function (str) {
  // Normaliza a string
  let normalized_str = str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/ /gm, '');
  
  return Array.from(normalized_str).map((word) => word.charCodeAt(0).toString(2)).join("")
}
