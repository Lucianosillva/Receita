/*As duas funções abaixo alternam entre 'ingredientes' e 'modo de preparo' em telas pequenas, e também muda a cor dos botões. */
function mododepreparo() {
    document.getElementById('ingredientescelular').style.display = 'none'
    document.getElementById('mododepreparocelular').style.display = 'block'
    document.getElementById('modo').style.fontWeight= 'bolder'
    document.getElementById('modo').style.color= 'var(--cor1)'
    document.getElementById('ing').style.fontWeight= 'normal'
    document.getElementById('ing').style.color= 'rgba(0, 0, 0, 0.473)'
}
function ingredientes() {
    document.getElementById('mododepreparocelular').style.display = 'none'
    document.getElementById('ingredientescelular').style.display = 'block'
    document.getElementById('ing').style.fontWeight= 'bolder'
    document.getElementById('ing').style.color= 'var(--cor1)'
    document.getElementById('modo').style.fontWeight= 'normal'
    document.getElementById('modo').style.color= 'rgba(0, 0, 0, 0.473)'
}
