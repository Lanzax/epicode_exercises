const textArea= document.getElementById('textArea')
const saveButton= document.getElementById('saveButton')
const loadButton= document.getElementById('loadButton')
const resetButton= document.getElementById('resetButton')

const resetFunction= function(){
    textArea.value=''
}
const saveFunction= function(){
    const saveLocal =textArea.value
    localStorage.setItem('formText',saveLocal)
    console.log('Il testo è stato correttamente salvato!')
}
const loadFunction= function(){
    const loadLocal = localStorage.getItem('formText')
    if(loadLocal){
        textArea.value=loadLocal
        console.log('Il testo è stato correttamente caricato!')
        
    }else{
        console.log('ERRORE NON ESISTE ALCUN FILE!!!!')
    }


}
saveButton.onclick=saveFunction
loadButton.onclick=loadFunction
resetButton.onclick=resetFunction