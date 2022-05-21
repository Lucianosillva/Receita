/*As duas funções abaixo alternam entre 'ingredientes' e 'modo de preparo' em telas pequenas. */
function mododepreparo() {
    document.getElementById('ingredientescelular').style.display = 'none'
    document.getElementById('mododepreparocelular').style.display = 'block'
}
function ingredientes() {
    document.getElementById('mododepreparocelular').style.display = 'none'
    document.getElementById('ingredientescelular').style.display = 'block'
}
