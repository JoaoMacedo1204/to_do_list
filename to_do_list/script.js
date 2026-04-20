const localStorageName = 'to-do-list'

function NewTask()
{
    let input = document.getElementById('input-new-task')

    // validacao de se nao houver nenhum item para adicionar, aparece a mensagem abaixo
    if(!input.value)
    {
        alert('Digite algo para inserir na sua lista')
    }
    //else if()
    else
    {
        //incrementa no localstorage os valores adicionados ao input
        let values = JSON.parse(localStorage.getItem('localStorageName') || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorage, JSON.stringify(values))
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem('localStorageName') || "[]")
    // cria uma variavel para a lista, onde se inicia com a lista vazia
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    // laco de repeticao que percorre todos os valores e adiciona-os à funcao
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}</li>`
    }
}
