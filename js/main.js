const texto = document.getElementById('text-tarefa')

const button_add = document.getElementById('adicionar_tarefa')

const result = document.getElementById('div_lista')

let lista = []



let caixaMisterio = document.getElementById('caixa').addEventListener('click', () =>{

    TocaSomMoeda()


})


function isTextValid(t){

    if (t.value.length == 0){
        return false
    }else{
        return true
    }
}

function button_remove(indice,tagli){

    let removeSound = document.getElementById('audioRemove')
    let button_remover = document.createElement('button')

    button_remover.id='button_remover'
    
    button_remover.textContent = '❌'

    button_remover.addEventListener('click', () =>{
        removeSound.play()
        lista.splice(indice,1)
        tagli.remove()
        
    })

    return button_remover 
}


function TocaSomMoeda(){

    let somMoeda = document.getElementById('audio')
    somMoeda.preload = 'auto'
    somMoeda.play()
}

function TocaSomEnviar(){

    let audio_enviar = document.getElementById('enviar')
    audio_enviar.preload = 'auto'
    audio_enviar.play()
}


button_add.addEventListener("click", () =>{


    if (!isTextValid(texto)){
        
        alert(' Conteúdo vazio ou inválido!')

    }else{
        
        //TocaSomMoeda()
        TocaSomEnviar()

        lista.push(texto.value)

        let ul_listaTarefas = document.getElementById('lista_tarefas')

        ul_listaTarefas.style.listStyleType = 'none'
  
        let tagli = document.createElement('li')
        tagli.style.marginTop = '8px'


        lista.forEach((item,indice) => {

       

            tagli.textContent = ` ✅  ${item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}            `
            tagli.appendChild(button_remove(indice,tagli))

            ul_listaTarefas.appendChild(tagli)    
    });

    texto.value = ''
    texto.focus()


    }
})

let marioClick = document.getElementById('img_mario').addEventListener('click', ()=>{

    let mario_audio = document.getElementById('mario')
    mario_audio.play()
    
})







